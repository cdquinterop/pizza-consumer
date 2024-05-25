import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIngredientComponent } from './table-ingredient.component';

describe('TableIngredientComponent', () => {
  let component: TableIngredientComponent;
  let fixture: ComponentFixture<TableIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableIngredientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
