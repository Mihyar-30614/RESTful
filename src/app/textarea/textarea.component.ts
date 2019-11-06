import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss'],
})
export class TEXTAREAComponent implements ProcessComponent {

	label: string;
	@Input() data;

	constructor() { }

	ngOnInit() {
		this.label = this.data.POS_LABEL;
		if (this.data.POS_REQUIRED == '1') this.label = '*' + this.label;
	}

}
