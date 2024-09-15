import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedLayoutComponent } from './protected-layout.component';

describe('ProtectedLayoutComponent', () => {
  let component: ProtectedLayoutComponent;
  let fixture: ComponentFixture<ProtectedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
