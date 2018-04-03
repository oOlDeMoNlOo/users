///<reference path="../../../node_modules/@angular/material/table/typings/table-data-source.d.ts"/>
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {User} from '../common/user';

@Injectable()
export class UsersService {

    users: Array<User>;
    usersSubject: Subject<any>;

    constructor(private http: HttpClient) {
        this.users = [];
        this.usersSubject = new Subject();
        this.full(50);
    }

    full(count = 50) {
        let i = 0;
        let us = new Array<any>()
        this.http.get(`https://randomuser.me/api?results=${count}`).subscribe((result) => {
            console.log(result['results'][0])
            for (const a  of result['results']) {
                i++;
                us.push({
                    id: i,
                    login: a['login']['username'],
                    name: this.firstUpper(a['name']['last']),
                    surname: this.firstUpper(a['name']['first']),
                    patronymic: this.firstUpper(a['name']['title']),
                    gender: a['gender'] !== 'female',
                    birthday: a['dob'],
                    telephone: a['cell'],
                    email: a['email'],
                    group: a['login']['salt'],
                    fun: {
                        delete: Math.round(new Date(a['registered']).getTime() / 1000) % 2,
                        edit: Math.round(new Date(a['registered']).getTime() / 3000) % 2,
                        view: Math.round(new Date(a['registered']).getTime() / 5000) % 2
                    }
                } as User);
            }
            this.users = us;
            us = null;
        });
    }

    addUser(user: any) {
        this.users.push({
            id: this.users.length,
            login: user.login,
            surname: user.surname,
            fun: {delete: true, edit: true, view: true}
        });
        this.usersSubject.next(this.users);
    }

    deleteUser(id: number) {
        this.users.splice(this.find(id), 1);
        this.usersSubject.next(this.users);
    }

    firstUpper(str: string) {
        str.slice(0, 1);
        str = str[0].toUpperCase() + str;
        return str;
    }

    find(id: number) {
        return this.users.findIndex((value, index) => value.id === id + 1);
    }
}
