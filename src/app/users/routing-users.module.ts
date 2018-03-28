import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
    {path: 'users', children: [
        {path: '', component: UsersComponent},
        {path: 'add', component: AddUserComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingUsersModule {
}