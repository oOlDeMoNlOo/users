import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import {User} from '../../common/user';
import {Location} from '@angular/common';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    form: FormGroup;
    hide = true;

    constructor(private service: UsersService, private router: Router, private location: Location) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'login': new FormControl(),
            'password': new FormControl(),
            'name': new FormControl(),
            'surname': new FormControl(),
            'patronymic': new FormControl(),
            'group': new FormControl(),
            'email': new FormControl(),
            'phonenumber': new FormControl(),
            'sex': new FormControl()
        });
    }

    onSubmit() {
        this.service.addUser(
            ({
                id: this.service.users.length,
                login: this.form.get('login').value,
                password: this.form.get('password').value,
                name: this.form.get('name').value,
                surname: this.form.get('surname').value,
                patronymic: this.form.get('patronymic').value,
                group: this.form.get('group').value,
                gender: this.form.get('gender').value,
                telephone: this.form.get('phonenumber').value,
                birthday: this.form.get('birthday').value,
                md5: this.form.get('password').value,
                email: this.form.get('email').value
            } as User));
        this.router.navigate(['users']);
    }
    backClicked() {
        this.location.back();
    }
}
