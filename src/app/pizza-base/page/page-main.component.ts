import { Component } from '@angular/core';
import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'page-main-pizza',
  templateUrl: './page-main.component.html'
})

export class PageMainComponent {
  constructor(private pizzaService: PizzaService) {
    console.log(pizzaService.findAllIngredient());
  }


  get ingredients(){
    return this.pizzaService.ingredientList;
  }


}
