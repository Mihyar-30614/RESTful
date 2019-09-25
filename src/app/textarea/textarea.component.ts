import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TEXTAREAComponent implements ProcessComponent {

  @Input() data :any;

  constructor() { }

}
