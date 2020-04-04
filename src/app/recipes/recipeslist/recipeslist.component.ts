import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test',
    'This simply a test',
    'https://www.simplyrecipes.com/wp-content/uploads/2014/09/Classic-Baked-Chicken-LEAD-4.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
