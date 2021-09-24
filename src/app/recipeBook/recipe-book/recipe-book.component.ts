import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

  selectedRecipe?: Recipe;

  constructor(private recipeService: RecipeService) {

   }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
