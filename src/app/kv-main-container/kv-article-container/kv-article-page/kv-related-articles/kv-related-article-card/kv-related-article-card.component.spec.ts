import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvRelatedArticleCardComponent } from './kv-related-article-card.component';

describe('KvRelatedArticleCardComponent', () => {
  let component: KvRelatedArticleCardComponent;
  let fixture: ComponentFixture<KvRelatedArticleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvRelatedArticleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvRelatedArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
