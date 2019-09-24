import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { ProcessComponent } from '../process';


@Component({
	selector: 'app-mobilejq-wo-new',
	templateUrl: './mobilejq-wo-new.page.html',
	styleUrls: ['./mobilejq-wo-new.page.scss'],
})
export class MOBILEJQWONEWPage implements OnInit {

	elements: Observable<any[]>;
	data : any[];
	@ViewChild('processContainer', {read: ViewContainerRef, static: true}) container;
	constructor(private apiService: ApiService, private resolver : ComponentFactoryResolver) { }

	ngOnInit() {
		this.apiService.getelements('init').subscribe(results => {
			let elements = this.apiService.getElementType(results);
			for (const element of elements) {
				const factory = this.resolver.resolveComponentFactory(element.component);
				let componentRef = this.container.createComponent(factory);
				(<ProcessComponent>componentRef.instance).data = element.data;
			}
		})
	}

}
