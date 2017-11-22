import { Directive } from '@angular/core';
import { OperandComponent } from './operand.component';

@Directive({
	selector: '[enterOperand]'
})

export class EnterDirective extends OperandComponent {
	keyText = "Enter";

	operation() {
		this.stacksOut.emit(this.stacksIn.unshift(this.stacksIn[0]))
	}
}