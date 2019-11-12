import { Component, OnInit, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
	selector: 'app-listbox',
	templateUrl: './listbox.component.html',
	styleUrls: ['./listbox.component.scss'],
})
export class LISTBOXComponent implements ProcessComponent {

	label : string;
	required = false;
	disabled = false;
	id : string;
	@Input() data;

	constructor() { }

	ngOnInit() {
		this.label = this.data.POS_LABEL;
		let name = this.data.POS_DICT_NAME;
		this.id = name[0] == "#"? name.slice(1,name.length) : name;
		if (this.data.POS_REQUIRED == '1'){
			this.label = '*' + this.label;
			this.required = true;
		}
		if (this.data.POS_CONTROL_DISABLED == '1') {
			this.disabled = true;
		}
	}
}
