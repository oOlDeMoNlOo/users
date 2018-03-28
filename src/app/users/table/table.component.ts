import {
    AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges,
    ViewChild
} from '@angular/core';
import {UsersService} from '../users.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../common/user';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnChanges {

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns = ['id', 'login', 'fam', 'fun'];
    @Input() users: any;
    dataSource: MatTableDataSource<User>;

    constructor(public service: UsersService) {
        this.dataSource = new MatTableDataSource();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.dataSource.data = this.users;
    }
}
