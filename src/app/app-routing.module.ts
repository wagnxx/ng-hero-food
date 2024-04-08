import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/hero', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},

  // heroes
  { path: 'hero', loadChildren: () => import('./modules/hero/hero.module').then(m => m.HeroModule) }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}

export const AppRoutingDeclarations =   [
  HomeComponent,
  FoodPageComponent,
  CartPageComponent,
]