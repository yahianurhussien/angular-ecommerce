import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponentMenuComponent } from './product-component-menu.component';

describe('ProductComponentMenuComponent', () => {
  let component: ProductComponentMenuComponent;
  let fixture: ComponentFixture<ProductComponentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponentMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
