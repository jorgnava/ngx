import { ElementRef, AfterViewChecked } from '@angular/core';
import { Platform } from '@ionic/angular';
export declare class IonInputDirective implements AfterViewChecked {
    private el;
    private platform;
    private input;
    constructor(el: ElementRef, platform: Platform);
    ngAfterViewChecked(): void;
    private fixScrollAndCaret;
}
