import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipesRoutes: Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':index', component: RecipeDetailsComponent, canActivate: [AuthGuard]},
        {path: ':index/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
]},];

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule],
    providers: [
        AuthGuard //guards are the only services to add to a routing module
    ]
})
export class RecipesRoutingModule {}