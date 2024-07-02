import {HeroService} from "./hero.service";
import {inject, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MessageService} from "./message.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe("Hero Service", () => {
  let service: HeroService;
  let mockMessageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add', 'clear'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageService}
      ]
    })
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);

  })

  describe('getHero', () => {
    it('should call get with the correct URL', () =>{
      service.getHero(4).subscribe();

      const req = httpTestingController.expectOne('api/heroes/4');

      req.flush({id: 4, name: 'Pes Patron', strength: 1231})
    })
  })

})
