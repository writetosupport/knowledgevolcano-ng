import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvRelatedArticlesComponent } from './kv-related-articles.component';

describe('KvRelatedArticlesComponent', () => {
  let component: KvRelatedArticlesComponent;
  let fixture: ComponentFixture<KvRelatedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvRelatedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvRelatedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
