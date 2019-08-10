import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvMainContainerComponent } from './kv-main-container.component';

describe('KvMainContainerComponent', () => {
  let component: KvMainContainerComponent;
  let fixture: ComponentFixture<KvMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
