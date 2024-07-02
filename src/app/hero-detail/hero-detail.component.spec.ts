import {ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync} from "@angular/core/testing";
import {HeroDetailComponent} from "./hero-detail.component";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';
import {of} from "rxjs";
import {FormsModule} from "@angular/forms";


describe('HerodetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivatedRoute, mockHeroService, mockLocation;
  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);
    mockActivatedRoute = {
      snapshot: {paramMap: {get: () => '3'}},
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: HeroService, useValue: mockHeroService},
        {provide: Location, useValue: mockLocation},
      ]
    });

    fixture = TestBed.createComponent(HeroDetailComponent);

    mockHeroService.getHero.and.returnValue(of({id: 3, name: 'pes patron', strength: 5}));
  })

  it('should render hero name in a h2 tag', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('PES PATRON');
  })

  it('should call updateHero when save is called', fakeAsync(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();

    fixture.componentInstance.save();
    flush();

    expect(mockHeroService.updateHero).toHaveBeenCalled();
  }));


  // it('should call updateHero when save is called', waitForAsync(() => {
  //   mockHeroService.updateHero.and.returnValue(of({}));
  //   fixture.detectChanges();
  //
  //   fixture.componentInstance.save();
  //
  //   fixture.whenStable().then(() => {
  //     expect(mockHeroService.updateHero).toHaveBeenCalled();
  //   })
  // }));
})
