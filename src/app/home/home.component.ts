import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/Models/Food';
import { StarRatingComponent } from '../star-rating/star-rating.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  foods: Food[] = []
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
   this.foods = this.foodService.getAll();
  }

  onRate(event: { oldValue: number, newValue: number, starRating: StarRatingComponent }): void {
    console.log('Old Value:', event.oldValue);
    console.log('New Value:', event.newValue);
    console.log('Star Rating Component:', event.starRating);
  }
  
  

}
