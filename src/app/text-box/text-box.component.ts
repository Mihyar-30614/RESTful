import { Component, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TEXTBOXComponent implements ProcessComponent {
  
  @Input() data;

  constructor() { }
  
}
