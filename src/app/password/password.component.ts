import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  standalone: false,
})
export class PasswordComponent {
  length: number = 8;
  includeNumbers: boolean = false;
  includeSpecialChars: boolean = false;
  password: string = '';

  private alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numbers = '0123456789';
  private specialChars = '!@#$%^&*()_+';

  generatePassword() {
    let characters = this.alphabets;

    if (this.includeNumbers) {
      characters += this.numbers;
    }
    if (this.includeSpecialChars) {
      characters += this.specialChars;
    }

    this.password = Array.from({ length: this.length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
  }

  copyPassword() {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(() => {
        alert('Password copied to clipboard!');
      });
    }
  }
}
