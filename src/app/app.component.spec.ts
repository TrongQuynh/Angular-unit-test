import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { timer } from 'rxjs';


describe('AppComponent', () => {

  let httpTestingController: HttpTestingController;
  let service: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      // providers: [AppService]
    }).compileComponents();

    httpTestingController = TestBed.get(HttpTestingController);

    // const httpClient = inject(HttpClient);
    service = TestBed.inject(AppService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.myProperty).toEqual(false);
    expect(app.title).toEqual('unit-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unit-test app is running!');
  });

  it("should get 100 post",  (done)=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.handleGetListPost();

    timer(5000).subscribe(()=>{
      expect(app._posts.length).toEqual(100);
    })
  });

});
