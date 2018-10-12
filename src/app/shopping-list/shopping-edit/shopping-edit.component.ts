import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild("f") slForm: NgForm;
  subscription: Subscription;
  editMode=false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   
    this.subscription=this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } 

  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmt = this.amountInputRef.nativeElement.value;
    const value = form.value;
    console.log("onSubmit name["+value.name+"] amount["+value.amount+"]");
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    //this.ingredientAdded.emit(ingredient);
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
