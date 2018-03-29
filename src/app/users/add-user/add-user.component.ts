import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    form: FormGroup;
    hide = true;
    constructor(private service: UsersService, private router: Router) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'login': new FormControl(),
            'password': new FormControl(),
            'name': new FormControl(),
            'surname': new FormControl(),
            'patronymic': new FormControl(),
            'group': new FormControl(),
            'sex': new FormControl()
        });
    }

    onSubmit() {
        this.service.addUser(
            {
                login: this.form.get('login').value,
                password: this.form.get('password').value,
                name: this.form.get('name').value,
                surname: this.form.get('surname').value,
                patronymic: this.form.get('patronymic').value,
                group: this.form.get('group').value,
                sex: this.form.get('sex').value
            });
        this.router.navigate(['users']);
    }
}
