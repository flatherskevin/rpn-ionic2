import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnChanges
} from '@angular/core';
import { AbstractButton } from '../AbstractButton';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'operandButton',
	templateUrl: 'operand.component.html',
	styleUrls: ['operand.component.scss']
})

export class OperandComponent extends AbstractButton implements OnChanges {
	keyText: string;
	stacksIn: number[];

	@Input('stacksIn') stacksInRaw: any[];
	@Output('stacksOut') stacksOut: EventEmitter<any> = new EventEmitter();

	ngOnChanges(changes: SimpleChanges){
		this.stacksIn = this.stacksInRaw.map(Number);
	}

	keyEvent() {
		this.operation();
	}

	operation(){}
}