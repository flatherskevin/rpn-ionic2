import {
	Component,
	Input,
	OnChanges
} from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'RPNStack',
	templateUrl: 'stack.component.html',
	styleUrls: ['stack.component.scss']
})

export class StackComponent implements OnChanges {
    stacksIn: string[];
    stackValue: string;
    stackPosition: number;
    keyText: string;

	@Input('stacksIn') stacksInRaw: any[];

	ngOnChanges(changes: SimpleChanges){
        this.stacksIn = this.stacksInRaw.map(String);
        this.stackValue = this.stacksIn[this.stackPosition];
	}
}