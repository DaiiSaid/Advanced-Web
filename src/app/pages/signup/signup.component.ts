import { ApplicationRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router:Router
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Add other form fields as needed
    });
  }

  ngOnInit() {}

  onSubmit() {
    // if (this.signupForm.invalid) {
    //   return;
    // }

    // const userData = this.signupForm.value;
    // this.signupService.signup(userData).subscribe(
    //   (response) => {
    //     console.log('Signup successful:', response);
    //     // Perform any additional actions after successful signup
    //   },
    //   (error) => {
    //     console.log('Error occurred during signup:', error);
    //     // Handle signup error
    //   }
    // );
    const value = this.signupForm.value
    this.signupService.signup(value).subscribe(response => {
      console.log(response);
      alert("Succesfull");
  this.router.navigate(['/login']);
  //   })
  // }
  // this.router.navigate(['/login']);
})}
  }
