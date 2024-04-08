import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/food', pathMatch: 'full' },
  { path: 'user', component: UserComponent }, // standalone 

  // food
  { path: 'food', loadChildren: () => import('./modules/food/food.module').then(m => m.FoodModule) },
  // heroes
  { path: 'hero', loadChildren: () => import('./modules/hero/hero.module').then(m => m.HeroModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const AppRoutingDeclarations = [
]