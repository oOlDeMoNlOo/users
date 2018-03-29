import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, Sort} from '@angular/material';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


    constructor(public service: UsersService) {
    }


    ngOnInit() {
    }


}
