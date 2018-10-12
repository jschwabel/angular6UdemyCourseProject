import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { RecipesModule } from './recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from "./core/core.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule, //BrowserModule includes CommonModule
    BrowserModule.withServerTransition({appId: "jhs-app"}),
    AuthModule, 
    //RecipesModule, //lazy loading
    ShoppingListModule, 
    AppRoutingModule, 
    HttpModule, 
    HttpClientModule,
    SharedModule,
    CoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
