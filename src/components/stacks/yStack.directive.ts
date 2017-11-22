import { Directive } from '@angular/core';
import { StackComponent } from './stack.component';

@Directive({
    selector: '[yStack]'
})

export class YStackDirective extends StackComponent{
    stackPosition: number = 1;
    keyText: string = "y";
}