import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HeroDetailComponent } from '../../hero-detail/hero-detail.component';
import { HeroesComponent } from '../../heroes/heroes.component';
import { HeroManageComponent } from '../../hero-manage/hero-manage.component';


const routes: Routes = [
  // heroes
  { path: '', component: HeroManageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class HeroRoutingModule {}

export const HeroRoutingDeclarations =   [
  HeroManageComponent,
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent,
]