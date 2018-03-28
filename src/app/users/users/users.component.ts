import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, Sort} from '@angular/material';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: any;

    constructor(public service: UsersService) {
    }


    ngOnInit() {
        this.full(1000);

    }

    full(count = 50) {
        this.users = new Array<any>();
        for (let i = 0; i < count; i++) {
            this.users.push({
                id: i,
                login: 'login ' + i,
                fam: 'surname ' + i,
                fun: {delete: false, edit: true, view: true}
            });
        }
    }
}
