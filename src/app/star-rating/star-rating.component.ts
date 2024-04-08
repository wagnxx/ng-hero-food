import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  fastar = faStar
  @Input() checkedcolor = 'gold'; // 选中颜色
  @Input() uncheckedcolor = 'gray'; // 未选中颜色
  @Input() value = 3.5; // 初始评分
  @Input() size = 24; // 图标大小
  @Input() totalstars = 5; // 总星星数量
  @Output() rateChange = new EventEmitter<{ oldValue: number, newValue: number, starRating: StarRatingComponent }>(); // 评分变化事件



  stars: number[];

  constructor() {
    this.stars = Array(this.totalstars).fill(0).map((_, index) => index + 1);
  }

  oldValue = 0;

  rate(newValue: number): void {
    const oldValue = this.value;
    this.value = newValue;
    this.oldValue = oldValue;
    this.rateChange.emit({ oldValue, newValue, starRating: this });
  }
}
