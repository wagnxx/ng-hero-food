import { Component, Input } from '@angular/core';

@Component({
  selector: 'not-found', 
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "Nothing Found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string = "/";

}
