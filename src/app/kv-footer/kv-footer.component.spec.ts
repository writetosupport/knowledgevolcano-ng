import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvFooterComponent } from './kv-footer.component';

describe('KvFooterComponent', () => {
  let component: KvFooterComponent;
  let fixture: ComponentFixture<KvFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
