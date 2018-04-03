import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {UsersService} from '../users.service';
import {Location} from '@angular/common';
import {User} from '../../common/user';
import {DeleteDialogComponent} from '../table/delete-dialog/delete-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-view-user',
    templateUrl: './view-user.component.html',
    styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {


    id: number;
    user: User;
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute, private service: UsersService, public location: Location,
                private router: Router, public dialog: MatDialog) {
        this.user = {};
        this.subscription = activateRoute.params.subscribe((params) => {
            this.id = params['id'];
            this.user = service.users.find((value) => {
                return value.id === Number(this.id);
            })
            if (!this.user) { router.navigate(['/users']); }
        });
    }

    openDialog(id: string, fullname: string, login: string): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '250px',
            data: {id, fullname, login}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.status) {
                this.service.deleteUser(result.id - 1);
                this.location.back();
            }
        });
    }

}
