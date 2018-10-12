import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes:Recipe[] = [
        new Recipe('Deviled Eggs','Yum','https://cb-web-assets.imgix.net/getmagicbullet/img/recipe-red-pepper-deviled-eggs.jpg',
        [new Ingredient('eggs', 24),
        new Ingredient('mayonaise', 1)]),
        new Recipe('Pasta','Nom','https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastapenne.jpg?output-format=webp',
        [new Ingredient('pasta', 1),
        new Ingredient('sauce', 1)])
    ];
    
    constructor(){
    }

    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes.slice();//slice makes a copy
    }
    getRecipe(index:number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        console.log("addRecipe recipe["+recipe.name+"] recipes.length["+this.recipes.length+"]");
        //recipe.index=this.recipes.length;
        this.recipes.push(recipe);
        console.log("addRecipe recipe["+recipe.name+"] recipes.length["+this.recipes.length+"]");

        this.recipesChanged.next(this.recipes.slice());
    }

    // storeRecipes(recipes: Recipe[]){
    //     return this.http.put("https://udemy-recipe-book-1977.firebaseio.com/data.json", recipes);
    // }

    updateRecipe(index: number, recipe: Recipe){
        //recipe.index=index;
        console.log("updateRecipe index["+index+"] recipe.name["+recipe.name+"]");
        this.recipes[index]=recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        console.log("deleteRecipe index["+index+"]");
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}