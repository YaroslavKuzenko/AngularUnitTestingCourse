import {HeroService} from "./hero.service";
import {TestBed} from "@angular/core/testing";
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
    let msgSvc = TestBed.inject(MessageService);
  })

  describe('getHero', () => {
    
  })

})
