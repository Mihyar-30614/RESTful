import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
	selector: 'app-listbox',
	templateUrl: './listbox.component.html',
	styleUrls: ['./listbox.component.scss'],
})
export class LISTBOXComponent implements ProcessComponent {

	label : string;
	@Input() data;

	constructor() { }

	ngOnInit() {
		this.label = this.data.POS_LABEL;
		if (this.data.POS_REQUIRED == '1') this.label = '*' + this.label;
	}
}
