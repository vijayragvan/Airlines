import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BookTicketComponent } from './pages/book-ticket/book-ticket.component';
import { BookingsListComponent } from './pages/bookings-list/bookings-list.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchTicketsComponent } from './pages/search-tickets/search-tickets.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketUploadComponent } from './pages/ticket-upload/ticket-upload.component';
import { ManageUsersComponent } from "./pages/manage-users/manage-users.component";
import { UserListComponent } from "./pages/manage-users/user-list/user-list.component";
import { UserAddComponent } from "./pages/manage-users/user-add/user-add.component";
import { UserDetailsComponent } from "./pages/manage-users/user-details/user-details.component";

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "help",
    component: HelpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tickets",
    component: TicketListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "bookings",
    component: BookingsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "search",
    component: SearchTicketsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "upload",
    component: TicketUploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bookNow',
    component: BookTicketComponent,
  },
  {
    path: "users",
    component: ManageUsersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: UserListComponent,
      },
      {
        path: "details",
        component: UserDetailsComponent,
      },
      {
        path: "add",
        component: UserAddComponent,
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
