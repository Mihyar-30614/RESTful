import { Component, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
	selector: 'app-text-box',
	templateUrl: './text-box.component.html',
	styleUrls: ['./text-box.component.scss'],
})
export class TEXTBOXComponent implements ProcessComponent {

	label : string;
	required : boolean = false;
	disabled : boolean = false;
	hidden : boolean = false;
	name : string = '';
	id : string;
	@Input() data;

	constructor() { }

	ngOnInit() {
		this.label = this.data.POS_LABEL;
		this.name = this.data.POS_DEFAULT_CODE;
		let temp = this.data.POS_DICT_NAME;
		this.id = temp[0] == "#"? temp.slice(1,temp.length) : temp;
		this.hidden = temp == "WO_NO"? true : false;
		if (this.data.POS_REQUIRED == '1'){
			this.label = '*' + this.label;
			this.required = true;
		}
		if (this.data.POS_CONTROL_DISABLED == '1') {
			this.disabled = true;
		}
	}

}
