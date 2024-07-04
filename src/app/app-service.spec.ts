import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('AppService', () => {

  let service: AppService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 8000;

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = new AppService(httpClient);
  });
  
  it("should be created", () => {
    expect(service).toBeTruthy();
  })

  it("should get 100 post", () => {
    service.getListPosts().subscribe((data)=>{
      expect(data.length).toEqual(100);
    });
   
  });

});
