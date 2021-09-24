import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RecipeBookComponent } from './recipeBook/recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipeBook/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppingList/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecipeService } from './services/recipe-service.service';
import { ShoppingListService } from './services/shopping-list-service.service';
import { RouterModule, Routes } from '@angular/router';
import { RecipeStartComponent } from './recipeBook/recipe-start/recipe-start.component';

const appRouts: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeBookComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailsComponent}
  ]},
  {path: 'shoppingList', component: ShoppingListComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeStartComponent,

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRouts),


  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
