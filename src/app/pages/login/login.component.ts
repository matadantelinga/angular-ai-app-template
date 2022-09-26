import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbCarouselConfig],
})
export class LoginComponent implements OnInit {
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

  constructor(config: NgbCarouselConfig, private router: Router) {
    config.showNavigationArrows = false;
    config.interval = 3000;
  }

  ngOnInit(): void {}

  login() {
    this.router.navigateByUrl('dashboard');
  }
}
