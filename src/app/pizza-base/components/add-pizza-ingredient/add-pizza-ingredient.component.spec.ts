import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPizzaIngredientComponent } from './add-pizza-ingredient.component';

describe('AddPizzaIngredientComponent', () => {
  let component: AddPizzaIngredientComponent;
  let fixture: ComponentFixture<AddPizzaIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPizzaIngredientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPizzaIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
