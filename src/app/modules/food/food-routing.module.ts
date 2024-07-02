import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from '../../cart-page/cart-page.component';
import { FoodManageComponent } from '../../food-manage/food-manage.component';
import { FoodPageComponent } from '../../food-page/food-page.component';
import { HomeComponent } from '../../home/home.component';


const routes: Routes = [
  {
    path: '', component: FoodManageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'type/:id', component: FoodPageComponent },
      { path: 'cart', component: CartPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule { }

export const FoodRoutingDeclarations = [
  FoodManageComponent,
  HomeComponent,
  FoodPageComponent,
  CartPageComponent
]