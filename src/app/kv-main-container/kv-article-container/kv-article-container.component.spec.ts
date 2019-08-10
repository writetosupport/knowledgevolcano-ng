import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvArticleContainerComponent } from './kv-article-container.component';

describe('KvArticleContainerComponent', () => {
  let component: KvArticleContainerComponent;
  let fixture: ComponentFixture<KvArticleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvArticleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvArticleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
