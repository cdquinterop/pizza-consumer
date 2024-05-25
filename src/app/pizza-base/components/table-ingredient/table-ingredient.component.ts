import { Component, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/pizza.interface';

@Component({
  selector: 'pizza-table-ingredient',
  templateUrl: './table-ingredient.component.html',
  styleUrl: './table-ingredient.component.css'
})
export class TableIngredientComponent {

  @Input()
  public ingredients: Ingredient[] = [];

  

}
