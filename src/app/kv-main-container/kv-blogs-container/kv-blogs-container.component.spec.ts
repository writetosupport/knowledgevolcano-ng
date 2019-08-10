import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvBlogsContainerComponent } from './kv-blogs-container.component';

describe('KvBlogsContainerComponent', () => {
  let component: KvBlogsContainerComponent;
  let fixture: ComponentFixture<KvBlogsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvBlogsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvBlogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
