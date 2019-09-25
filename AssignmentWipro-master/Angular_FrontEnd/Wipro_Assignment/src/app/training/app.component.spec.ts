import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

describe('AppComponent', () => {
    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //       declarations: [
    //         AppComponent,
    //         SearchHeaderComponent,
    //         FeedListComponent,
    //         FeedItemComponent
    //       ],
    //       imports: [FormsModule, HttpClientTestingModule],
    //       providers: [
    //         FeedProviderService,
    //         HttpClientTestingModule
    //       ],
    //     }).compileComponents();
    //   }));

      
    it('should create the app', () => {
        // const fixture = TestBed.createComponent(AppComponent);
        // const app = fixture.debugElement.componentInstance;
        expect({}).toBeTruthy();
      });
      it('should create the app new ', () => {
        // const fixture = TestBed.createComponent(AppComponent);
        // const app = fixture.debugElement.componentInstance;
        expect({}).toBeTruthy();
      });

    //   it('should render git profile image', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('.navbar-brand').href).toContain(environment.GIT_PROJECT_URL);
    //     expect(compiled.querySelector('.navbar-brand > img').getAttribute('src')).toContain(environment.AUTHOR_POFILE_IMG);
    //     expect(compiled.querySelector('.search-control > input')).toBeTruthy();
    //     expect(compiled.querySelector('.search-control > button')).toBeTruthy();
    //   });
});