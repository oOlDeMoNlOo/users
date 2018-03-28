import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    form: FormGroup

    constructor() {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'login': new FormControl()
    });
    }

}
