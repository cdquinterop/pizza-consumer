import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePizzaIngredientComponent } from './table-pizza-ingredient.component';

describe('TablePizzaIngredientComponent', () => {
  let component: TablePizzaIngredientComponent;
  let fixture: ComponentFixture<TablePizzaIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePizzaIngredientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePizzaIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
