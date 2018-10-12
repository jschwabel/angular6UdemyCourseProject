import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
//import { Ingredient } from '../../shared/ingredient.model';

import "rxjs/add/operator/take";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  index: number;
  
  constructor(private shoppingListService: ShoppingListService, 
    private route: ActivatedRoute, private recipeService: RecipesService,
    private router: Router) { }

  ngOnInit() {
   
    this.route.params.subscribe(
      (params: Params) => {
        this.index=+params['index'];
        this.recipe=this.recipeService.getRecipe(+params['index']);
      }
    );
  }

  addIngredientsToShoppingList(){
    console.log("addIngredientsToShoppingList recipe["+this.recipe.name+"]");
    this.shoppingListService.addIngredients(this.recipe.ingredients);

  }  

  onEditRecipe() {
    this.router.navigate(["edit"], {relativeTo: this.route});
    //this.router.navigate(["../", this.recipe.index, "edit"], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    console.log("onDeleteRecipe index["+this.index+"]");
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(["/recipes"]);
  }
}
