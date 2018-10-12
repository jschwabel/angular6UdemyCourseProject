import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataStorageService {

    constructor(
        private http: Http, 
        private httpClient: HttpClient,
        private recipeService: RecipesService, private authService: AuthService
        ){
    }

    storeRecipes(){
        //const token = this.authService.getToken();
        return this.httpClient.put("https://udemy-recipe-book-1977.firebaseio.com/recipes.json", this.recipeService.getRecipes());
        //return this.httpClient.put("https://udemy-recipe-book-1977.firebaseio.com/recipes.json?auth="+token, this.recipeService.getRecipes());
        //return this.httpClient.put("https://udemy-recipe-book-1977.firebaseio.com/recipes.json?auth="+token, this.recipeService.getRecipes(),
        // { observe: 'events' });
    }

    getRecipes(){
        //const token = this.authService.getToken();
        return this.httpClient.get<Recipe[]>("https://udemy-recipe-book-1977.firebaseio.com/recipes.json")
        //return this.httpClient.get<Recipe[]>("https://udemy-recipe-book-1977.firebaseio.com/recipes.json?auth="+token)
        .map(
            //(response: Response)=>{
                (recipes)=>{
            //const recipes: Recipe[] = response.json();
            for(let recipe of recipes) {
                if(!recipe['ingredients']) {
                    // console.log("getRecipes no ingredients ["+recipe.name+"]");
                    recipe['ingredients']=[];
                }
            }
            return recipes;
        })
        .subscribe(
            (recipes: Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}