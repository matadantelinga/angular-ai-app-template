import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbCarouselConfig],
})
export class LoginComponent implements OnInit {
  inputType = 'password';

  slides = [
    {
      image: 'assets/loginslide.png',
      title: 'Keeping the overview',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
    },
    {
      image: 'assets/loginslide.png',
      title: 'Keeping the overview 2',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
    },
    {
      image: 'assets/loginslide.png',
      title: 'Keeping the overview 3',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
    },
  ];

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  get formControl() {
    return this.loginForm.controls;
  }

  constructor(
    config: NgbCarouselConfig,
    private router: Router,
    private fb: FormBuilder
  ) {
    config.showNavigationArrows = false;
    config.interval = 3000;
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.router.navigateByUrl('dashboard');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  showPassword() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
