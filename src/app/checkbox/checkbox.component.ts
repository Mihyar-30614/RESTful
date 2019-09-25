import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CHECKBOXComponent implements ProcessComponent {

  @Input() data: any;

  constructor() { }

}
