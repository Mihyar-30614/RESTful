import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[processContainer]'
})

export class directive {
    constructor(public viewContainerRef : ViewContainerRef){}
}