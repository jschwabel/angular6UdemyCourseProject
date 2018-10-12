import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
    //{path: '', redirectTo:'recipes', pathMatch:'full'},//do not use this so can do lazy loading of recipes
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},//lazy loading
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {  
}