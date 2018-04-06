import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {RoutingUsersModule} from './routing-users.module';
import {
    MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule, MatRadioModule,
    MatSortModule,
    MatTooltipModule
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {TableComponent} from './table/table.component';
import {AddUserComponent} from './add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DeleteDialogComponent} from './table/delete-dialog/delete-dialog.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {
    FocusDirective,
    LabelEditableTextComponent
} from './edit-user/label-editable-text/label-editable.component';
import {LabelEditableDateComponent} from './edit-user/label-editable-date/label-editable.component';
import {LabelEditableGenderComponent} from './edit-user/label-editable-gender/label-editable.component';

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
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        HttpClientModule,
        MatDialogModule,
        MatDividerModule,
        FormsModule
    ],
    declarations: [UsersComponent, TableComponent, AddUserComponent, DeleteDialogComponent, ViewUserComponent, EditUserComponent,
    LabelEditableTextComponent, FocusDirective, LabelEditableDateComponent, LabelEditableGenderComponent],
    entryComponents: [DeleteDialogComponent]
})
export class UsersModule {
}
