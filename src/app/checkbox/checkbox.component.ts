import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
})
export class CHECKBOXComponent implements ProcessComponent {

	label: string;
	required : boolean = false;
	disabled : boolean = false;
	name: boolean = false;
	id : string;
	@Input() data;

	constructor() { }

	ngOnInit() {
		this.label = this.data.POS_LABEL;
		let temp = this.data.POS_DICT_NAME;
		this.id = temp[0] == "#"? temp.slice(1,temp.length) : temp;
		if (this.data.POS_REQUIRED == '1'){
			this.label = '*' + this.label;
			this.required = true;
		}
		if (this.data.POS_CONTROL_DISABLED == '1') {
			this.disabled = true;
		}
	}

}
