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
    selector: 'app-label-gender-editable',
    templateUrl: './label-editable.component.html',
    styleUrls: ['./label-editable.component.scss']
})
export class LabelEditableGenderComponent {
    active: boolean;
    @Input() value: string;
    @Output() changeValue = new EventEmitter<boolean>();
    val: any;
    constructor() {
    }

    focus() {
        this.active = true;
        this.val = this.value;
    }

    accept() {
        if (this.val !== this.value) {
            this.changeValue.emit(this.val);
        }
        this.active = false;
    }

    cancel() {
        this.active = false;
    }

}
