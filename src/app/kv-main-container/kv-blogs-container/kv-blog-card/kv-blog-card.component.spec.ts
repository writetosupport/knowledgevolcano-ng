import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvBlogCardComponent } from './kv-blog-card.component';

describe('KvBlogCardComponent', () => {
  let component: KvBlogCardComponent;
  let fixture: ComponentFixture<KvBlogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvBlogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
