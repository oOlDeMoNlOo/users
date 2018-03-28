import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {RoutingUsersModule} from './routing-users.module';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSortModule,
    MatTooltipModule
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {TableComponent} from './table/table.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RoutingUsersModule,
        MatSortModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [UsersComponent, TableComponent, AddUserComponent]
})
export class UsersModule {
}
