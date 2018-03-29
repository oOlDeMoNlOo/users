///<reference path="../../../node_modules/@angular/material/table/typings/table-data-source.d.ts"/>
import {Injectable, OnInit} from '@angular/core';
import {User} from '../common/user';
import {MatPaginator, MatSort, MatTableDataSource, Sort} from '@angular/material';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService implements OnInit {

    users: any;


    constructor(private http: HttpClient) {
        this.users = [];
        this.full(500 );
    }

    ngOnInit() {
    }

    full(count = 50) {
        let i = 0;
        let us = new Array<any>();

        this.http.get(`https://randomuser.me/api?results=${count}`).subscribe((result) => {
            console.log(result['results'][0]);
            console.log(new Date(result['results'][0]['registered']).getTime())
            console.log(
                Math.round(new Date(result['results'][0]['registered']).getTime() / 1000) % 2,
                Math.round(new Date(result['results'][0]['registered']).getTime() / 3000) % 2,
                Math.round(new Date(result['results'][0]['registered']).getTime() / 5000) % 2
            );
            for (const a  of result['results']) {
                i++;
                us.push({
                    id: i,
                    login: a['login']['username'],
                    fam: this.f(a['name']['last']) + ' ' + this.f(a['name']['first']),
                    fun: {
                        delete: Math.round(new Date(a['registered']).getTime() / 1000) % 2,
                        edit: Math.round(new Date(a['registered']).getTime() / 3000) % 2,
                        view: Math.round(new Date(a['registered']).getTime() / 5000) % 2
                    }
                });
            }
            this.users = us;
            us = null;
        });
    }

    addUser(user: any) {
        this.users.push({
            id: this.users.length,
            login: user.login,
            fam: user.surname,
            fun: {delete: true, edit: true, view: true}
        });
    }

    deleteUser(id: number) {
        const a = this.users;
        a.splice(id, 1);
        this.users = a;
    }
    f(str: string) {
        str.slice(0, 1);
        str = str[0].toUpperCase() + str;
        return str;
    }
}
