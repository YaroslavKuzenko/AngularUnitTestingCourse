import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeroComponent} from "./hero.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe("HeroComponent (shallow tests)", () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HeroComponent);
  })

  it("Should have the correct hero", () => {
    fixture.componentInstance.hero = {id: 1, name: "Pes Patron", strength: 1231};
    expect(fixture.componentInstance.hero.name).toEqual("Pes Patron");
  })

  it("should render the hero name in an anchor tag", () =>{
    fixture.componentInstance.hero = {id: 1, name: "Pes Patron", strength: 1231};
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector("a").textContent).toContain("Pes Patron");
  })
})
