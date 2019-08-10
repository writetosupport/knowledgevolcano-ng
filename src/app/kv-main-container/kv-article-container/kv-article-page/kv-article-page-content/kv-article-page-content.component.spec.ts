import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvArticlePageContentComponent } from './kv-article-page-content.component';

describe('KvArticlePageContentComponent', () => {
  let component: KvArticlePageContentComponent;
  let fixture: ComponentFixture<KvArticlePageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvArticlePageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvArticlePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
