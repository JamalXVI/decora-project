import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({});
  }
  returnList() {
    this.router.navigate(['/home']);
  }
}
