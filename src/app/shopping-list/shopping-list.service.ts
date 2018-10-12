import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {
    private ingredients:Ingredient[] = [
       new Ingredient("Bread", 1),
        new Ingredient("Plum", 3)
     ];
    ingredientsChanged = new Subject<Ingredient[]>();//new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();

    addIngredient(ing: Ingredient){
         console.log("addIngredient name["+ing.name+"]");
         this.ingredients.push(ing);
        //this.ingredientsChanged.emit(this.ingredients.slice());
         this.ingredientsChanged.next(this.ingredients.slice());
     }

     addIngredients(ings: Ingredient[]){
        /*for (let i of ings) { 
            //console.log("addIngredients name["+i.name+"]");
            this.addIngredient(i); 
        }*/
        this.ingredients.push(...ings);
        //this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

     getIngredients(){
         return this.ingredients.slice();
     }

     getIngredient(index: number): Ingredient {
         return this.ingredients[index];
     }
    
     updateIngredient(index: number, newIngredient: Ingredient){
        console.log("udpdateIngredient index["+index+"] newIngredient["+newIngredient.name+"]");
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
     }

     deleteIngredient(index: number){
         this.ingredients.splice(index, 1);
         this.ingredientsChanged.next(this.ingredients.slice());
     }
 }