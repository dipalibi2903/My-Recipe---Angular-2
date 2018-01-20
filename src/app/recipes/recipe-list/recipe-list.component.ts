import { Component, OnInit } from '@angular/core';
import { IRecipes } from '../../../interfaces/IReipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:IRecipes[]=[{
    name:' Dhokala',
    description:'Femous Gujarathi Food',
    imagePath:'http://www.ruchiskitchen.com/wp-content/uploads/2015/01/khaman_1.jpg'
  },
  {
    name:'Idali Sambhar',
    description:'Femous South Indian Food',
    imagePath:'https://www.ndtv.com/cooks/images/idli.2.jpg'
  }];
  constructor() { }

  ngOnInit() {
  }

}
