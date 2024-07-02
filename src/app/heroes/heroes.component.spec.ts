import {HeroesComponent} from "./heroes.component";
import {of} from "rxjs";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let heroes;
  let mockHeroService;

  beforeEach(() => {
    heroes = [
      {id:1, name: "Pes patron", strength: 3},
      {id:2, name: "Kit Stepan", strength: 23},
      {id:3, name: "Kit Syrskyi", strength: 16},
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it("should delete the indicated hero from the heroes list", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heroes;

      component.delete(heroes[2])

      expect(component.heroes.length).toBe(2)
    })

    it("should call deleteHero", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heroes;

      component.delete(heroes[2]);
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroes[2]);
    })

  })
})
