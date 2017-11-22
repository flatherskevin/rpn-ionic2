import { Directive } from '@angular/core';
import { OperandComponent } from './operand.component';

@Directive({
    selector: '[divideOperand]'
})

export class DivideDirective extends OperandComponent {
    keyText = "\u00F7";

    operation() {
        let xStack = this.stacksIn[0];
        let yStack = this.stacksIn[1];
        this.stacksIn[1] = xStack / yStack;
        this.stacksOut.emit(this.stacksIn.shift());
    }
}