import { Component, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
	selector: 'app-text-box',
	templateUrl: './text-box.component.html',
	styleUrls: ['./text-box.component.scss'],
})
export class TEXTBOXComponent implements ProcessComponent {

	label: string;
	@Input() data;

	constructor() { }

	ngOnInit() {
		this.label = this.data.POS_LABEL;
		if (this.data.POS_REQUIRED == '1') this.label = '*' + this.label;
	}

}
