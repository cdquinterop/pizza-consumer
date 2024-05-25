import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PageMainComponent } from './page/page-main.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { AddPizzaIngredientComponent } from './components/add-pizza-ingredient/add-pizza-ingredient.component';
import { TableIngredientComponent } from './components/table-ingredient/table-ingredient.component';
import { TablePizzaIngredientComponent } from './components/table-pizza-ingredient/table-pizza-ingredient.component';

@NgModule({
  declarations: [
    PageMainComponent,
    HeaderComponent,
    ModalComponent,
    TableComponent,
    AddIngredientComponent,
    AddPizzaIngredientComponent,
    TableIngredientComponent,
    TablePizzaIngredientComponent
  ],
  exports:[
    PageMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
  ]
})
export class PizzaBaseModule { }
