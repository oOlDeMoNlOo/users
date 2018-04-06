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
    selector: 'app-label-text-editable',
    templateUrl: './label-editable.component.html',
    styleUrls: ['./label-editable.component.scss']
})
export class LabelEditableTextComponent {
    active: boolean;
    @Input() value: string;
    @Output() changeValue = new EventEmitter<string>();
    @ViewChild('val') val: any;

    constructor() {
    }

    focus() {
        this.active = true;
    }

    accept(value: string) {
        if (value !== this.value && value.trim()) {
            this.changeValue.emit(value);
        }
        this.active = false;
    }

    cancel() {
        this.active = false;
    }
}

@Directive({
    selector: '[appFocus]'
})
export class FocusDirective implements OnInit {
    constructor(public renderer: Renderer, public elementRef: ElementRef) {
    }

    ngOnInit() {
        this.renderer.invokeElementMethod(
            this.elementRef.nativeElement, 'focus', []);
    }
}
