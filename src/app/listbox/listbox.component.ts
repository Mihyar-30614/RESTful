import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
})
export class LISTBOXComponent implements ProcessComponent {

  @Input() data;

  constructor() { }

}
