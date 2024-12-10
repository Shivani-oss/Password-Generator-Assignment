import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent, // Register PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Import the routing module
  ],
  providers: [],
  bootstrap: [AppComponent], // Keep AppComponent as bootstrap
})
export class AppModule {}
