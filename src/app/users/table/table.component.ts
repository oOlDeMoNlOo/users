import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {UsersService} from '../users.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../common/user';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

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

    constructor(public service: UsersService, public dialog: MatDialog) {
        this.dataSource = new MatTableDataSource();
        service.usersSubject.subscribe((next) => {
            this.dataSource.data = next;
        });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.dataSource.data = this.users;
    }

    openDialog(id: string, fullname: string, login: string): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '250px',
            data: {id, fullname, login}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.status) {
                this.service.deleteUser(result.id - 1);
            }
        });
    }
}
