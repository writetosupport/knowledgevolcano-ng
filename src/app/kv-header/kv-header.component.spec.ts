import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvHeaderComponent } from './kv-header.component';

describe('KvHeaderComponent', () => {
  let component: KvHeaderComponent;
  let fixture: ComponentFixture<KvHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
