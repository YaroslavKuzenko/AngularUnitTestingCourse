import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeroesComponent} from "./heroes.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HeroService} from "../hero.service";
import {HeroComponent} from "../hero/hero.component";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";

describe('HeroesComponent (deep test)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let heroes;

  beforeEach(() => {
    heroes = [
      {id:1, name: "Pes patron", strength: 3},
      {id:2, name: "Kit Stepan", strength: 23},
      {id:3, name: "Kit Syrskyi", strength: 16},
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should render each hero as a HeroComponent', () => {
    mockHeroService.getHeroes.and.returnValue(of(heroes));

    //run ngOnInit()
    fixture.detectChanges();

    const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));

    expect(heroComponents.length).toBe(3);
    for(let i = 0; i < heroComponents.length; i++){
      expect(heroComponents[i].componentInstance.hero).toEqual(heroes[i]);
    }
  });
});
