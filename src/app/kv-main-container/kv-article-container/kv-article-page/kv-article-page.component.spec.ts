import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvArticlePageComponent } from './kv-article-page.component';

describe('KvArticlePageComponent', () => {
  let component: KvArticlePageComponent;
  let fixture: ComponentFixture<KvArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
