import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PageMainComponent } from './page/page-main.component';

@NgModule({
  declarations: [
    PageMainComponent
  ],
  exports:[
    PageMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PizzaBaseModule { }
