import { Directive } from '@angular/core';
import { OperandComponent } from './operand.component';

@Directive({
    selector: '[plusOperand]'
})

export class PlusDirective extends OperandComponent {
    keyText = "\u002B";

    operation() {
        let xStack = this.stacksIn[0];
        let yStack = this.stacksIn[1];
        this.stacksIn[1] = xStack + yStack;
        this.stacksOut.emit(this.stacksIn.shift());
    }
}