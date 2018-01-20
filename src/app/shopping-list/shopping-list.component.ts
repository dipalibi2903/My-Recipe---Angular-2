import { IIngredients } from './../../interfaces/IIngredients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:IIngredients[]=[{
    name:'Apple',
    amount:10
  },{
    name:'PineApple',
    amount:10
  }];

  constructor() { }

  ngOnInit() {
  }

}
