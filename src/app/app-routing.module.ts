import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: '', component: PasswordComponent }, // Root route for PasswordComponent
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
