import { Directive } from '@angular/core';
import { StackComponent } from './stack.component';

@Directive({
    selector: '[zStack]'
})

export class ZStackDirective extends StackComponent{
    stackPosition: number = 2;
    keyText: string = "z";
}