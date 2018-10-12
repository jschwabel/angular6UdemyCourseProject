import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[] = [];
  ingredientsChangedSubscription: Subscription;
  
  constructor(private shoppingListService: ShoppingListService,
    private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ings: Ingredient[]) => {this.ingredients=ings;}
      );
  }

  ngOnDestroy(){
    this.ingredientsChangedSubscription.unsubscribe();
  }

  onEditIngredient(index: number){
    this.shoppingListService.startedEditing.next(index);
    
  }

}
