import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
 
@Component({
  selector: 'event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailComponent {
 
    @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
    @Input('expanded') expanded;
    @Input('expandHeight') expandHeight;
 
    constructor(public renderer: Renderer) {
 
    }
 
    ngAfterViewInit(){
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', 'auto');   
    }
 
}