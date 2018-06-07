import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CustomErrorStateMatcher } from '../core/CustomErrorStateMatcher.model';
import { AuthService } from '../core/auth/auth-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  siginForm: FormGroup;

  private matcher = new CustomErrorStateMatcher();
  constructor(private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.siginForm = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  public sendForm() {
    if (this.siginForm.valid) {
      if (this.authService.logIn(this.siginForm.get('user').value, this.siginForm.get('pwd').value)) {
        this.openSnackBar('Quem procura acha né homi?');
        this.router.navigate(['/home']);
      } else {
        this.openSnackBar('Oxi encontrei foi não! Tem certeza que está certo ai?');
      }
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500,
    });
  }
}
