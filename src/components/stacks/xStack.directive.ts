import { Directive } from '@angular/core';
import { StackComponent } from './stack.component';

@Directive({
    selector: '[xStack]'
})

export class XStackDirective extends StackComponent{
    stackPosition: number = 0;
    keyText: string = "x";
}