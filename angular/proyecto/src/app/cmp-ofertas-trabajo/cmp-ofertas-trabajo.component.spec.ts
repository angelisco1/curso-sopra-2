import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpOfertasTrabajoComponent } from './cmp-ofertas-trabajo.component';

describe('CmpOfertasTrabajoComponent', () => {
  let component: CmpOfertasTrabajoComponent;
  let fixture: ComponentFixture<CmpOfertasTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpOfertasTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpOfertasTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
