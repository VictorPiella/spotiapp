import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styleUrls: ['./targetas.component.css']
})
export class TargetasComponent {

  @Input() items: any[] = [];

  constructor() { }


}
