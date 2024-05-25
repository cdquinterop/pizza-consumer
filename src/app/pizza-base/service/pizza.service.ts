import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../interfaces/pizza.interface';
import { Observable, catchError, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PizzaService {
  constructor(private http: HttpClient) { }

  private url:string = 'https://api-pizza-production.up.railway.app';

  private error: string = 'Mensaje de error ejemplo'

  public ingredientList: Ingredient[] = [];

  /*findAllIngredient(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.url}/api/v1/ingredient/`).pipe(
      map(response => response),

    );
  }*/


  findAllIngredient(): void{
    this.http.get<Ingredient[]>(`${this.url}/api/v1/ingredient/`)
      .subscribe(resp => {
        this.ingredientList = resp;
      })
  }





}
