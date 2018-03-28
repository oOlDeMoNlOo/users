import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UsersModule} from './users/users.module';
import {UsersService} from './users/users.service';
import { TableComponent } from './users/table/table.component';
import { AddUserComponent } from './users/add-user/add-user.component';

const routes: Routes = [{path: '', redirectTo: 'users', pathMatch: 'full'}];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        UsersModule
    ],
    bootstrap: [AppComponent],
    providers: [UsersService]
})
export class AppModule {
}
