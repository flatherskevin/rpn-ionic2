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
	selector: 'numericButton',
	templateUrl: 'numeric.component.html',
	styleUrls: ['numeric.component.scss']
})

export class NumericComponent extends AbstractButton implements OnChanges {
	stacksIn: string[];

    @Input('keyText') keyText: string;
	@Input('stacksIn') stacksInRaw: any[];
	@Output('stacksOut') stacksOut: EventEmitter<any> = new EventEmitter();

	ngOnChanges(changes: SimpleChanges){
		this.stacksIn = this.stacksInRaw.map(String);
	}

	keyEvent() {
		this.operation();
	}

	operation(){
		this.stacksIn[0] + this.keyText;
		this.stacksOut.emit(this.stacksIn);
    }
}