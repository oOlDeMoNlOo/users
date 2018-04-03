import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ViewUserComponent} from './view-user/view-user.component';

const routes: Routes = [
    {
        path: 'users', children: [
        {path: '', component: UsersComponent},
        {path: 'add', component: AddUserComponent},
        {path: 'view/:id', component: ViewUserComponent}
    ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingUsersModule {
}
