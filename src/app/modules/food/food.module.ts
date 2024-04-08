import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodRoutingDeclarations, FoodRoutingModule } from './food-routing.module';
import { HeaderComponent } from '../../header/header.component';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
 



@NgModule({
  declarations: [
    HeaderComponent,
    StarRatingComponent,
    NotFoundComponent, 
    ...FoodRoutingDeclarations,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
