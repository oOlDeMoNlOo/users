import {
    Component,
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-label-date-editable',
    templateUrl: './label-editable.component.html',
    styleUrls: ['./label-editable.component.scss']
})
export class LabelEditableDateComponent {
    active: boolean;
    @Input() value: string;
    @Output() changeValue = new EventEmitter<Date>();
    constructor() {
    }

    focus() {
        this.active = true;
    }

    accept(value: any) {
        if (value !== this.value && value.trim()) {
            this.changeValue.emit(new Date(value));
        }
        this.active = false;
    }

    cancel() {
        this.active = false;
    }

}
