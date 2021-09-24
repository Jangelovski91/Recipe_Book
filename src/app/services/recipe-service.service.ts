import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipeBook/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('Honey pancake!', 'the best dessert ever...', 'https://blogs.uoregon.edu/natewoodburyaad250/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg',
    [
      new Ingredient('Flour', 100),
      new Ingredient('Eggs', 5),
      new Ingredient('Oil', 10),
      new Ingredient('Milch', 200)
    ]),
    new Recipe('Pizza!', 'best Capriciossa in town...', 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg',
    [
      new Ingredient('Flour', 150),
      new Ingredient('Salt', 2),
      new Ingredient('Oil', 5),
      new Ingredient('Cheese', 80),
      new Ingredient('Salami', 70),
      new Ingredient('Mushrooms', 50),
      new Ingredient('Ketchup', 10)

    ])
  ];

  constructor(private slService: ShoppingListService) {

   }

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  getRecipe(id: number){
    return this.recipes[id];
  }

}
