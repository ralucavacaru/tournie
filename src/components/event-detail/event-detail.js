var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(renderer) {
        this.renderer = renderer;
    }
    EventDetailComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', 'auto');
    };
    __decorate([
        ViewChild('expandWrapper', { read: ElementRef }),
        __metadata("design:type", Object)
    ], EventDetailComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Input('expanded'),
        __metadata("design:type", Object)
    ], EventDetailComponent.prototype, "expanded", void 0);
    __decorate([
        Input('expandHeight'),
        __metadata("design:type", Object)
    ], EventDetailComponent.prototype, "expandHeight", void 0);
    EventDetailComponent = __decorate([
        Component({
            selector: 'event-detail',
            templateUrl: 'event-detail.html'
        }),
        __metadata("design:paramtypes", [Renderer])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
export { EventDetailComponent };
//# sourceMappingURL=event-detail.js.map