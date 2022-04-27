import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
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

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'tickets',
    component: TicketListComponent,
  },
  {
    path: 'bookings',
    component: BookingsListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'search',
    component: SearchTicketsComponent,
  },
  {
    path: 'upload',
    component: TicketUploadComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
