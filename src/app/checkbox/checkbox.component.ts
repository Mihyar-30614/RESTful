import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
})
export class CHECKBOXComponent implements ProcessComponent {

	label: string;
	@Input() data;

	constructor() { }

	ngOnInit() {
		this.label = this.data.POS_LABEL;
		if (this.data.POS_REQUIRED == '1') this.label = '*' + this.label;
	}

}
