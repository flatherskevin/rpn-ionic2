import { Directive } from '@angular/core';
import { OperandComponent } from './operand.component';

@Directive({
    selector: '[multiplyOperand]'
})

export class MultiplyDirective extends OperandComponent {
    keyText = "\u2715";

    operation() {
        let xStack = Number(this.stacksIn[0]);
        let yStack = this.stacksIn[1];
        this.stacksIn[1] = xStack * yStack;
        this.stacksOut.emit(this.stacksIn.shift());
    }
}