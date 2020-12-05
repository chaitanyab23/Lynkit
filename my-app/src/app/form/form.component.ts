import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registrationForm = new FormGroup({
    fullName: new FormControl('', Validators.minLength(3)),
    email: new FormControl('', Validators.email),
    mobileNumber: new FormControl('', [
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    password: new FormControl(
      '',
      Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
    ),
    confirmPassword: new FormControl(
      '',
      Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
    ),
  });

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
