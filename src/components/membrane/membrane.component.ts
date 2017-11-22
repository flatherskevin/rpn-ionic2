import { 
    Component,
    OnChanges,
    Input,
    Output
} from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventEmitter } from '@angular/core/src/event_emitter';

import { OperandComponent } from '../buttons/operand/operand.component';
import { NumericComponent } from '../buttons/numeric/numeric.component';

@Component({
    selector: 'membrane',
    templateUrl: 'membrane.component.html',
    styleUrls: ['membrane.component.scss']
})

export class MembraneComponent implements OnChanges{

    @Input('stacksOut') stacksIn: any[];
    @Output('stacksIn') stacksOut: EventEmitter<any> = new EventEmitter();

    ngOnChanges(changes: SimpleChanges){
        this.stacksOut.emit(this.stacksIn);
    }
}