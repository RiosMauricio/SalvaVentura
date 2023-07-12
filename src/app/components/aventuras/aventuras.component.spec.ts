import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventurasComponent } from './aventuras.component';

describe('AventurasComponent', () => {
  let component: AventurasComponent;
  let fixture: ComponentFixture<AventurasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AventurasComponent]
    });
    fixture = TestBed.createComponent(AventurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
