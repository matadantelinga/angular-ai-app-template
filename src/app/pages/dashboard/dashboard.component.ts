import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  projects = [
    {
      name: 'Project name 1',
      type: 'Usecase Type',
    },
    {
      name: 'Project name 2',
      type: 'Usecase Type',
    },
    {
      name: 'Project name 3',
      type: 'Usecase Type',
    },
    {
      name: 'Project name 4',
      type: 'Usecase Type',
    },
    {
      name: 'Project name 5',
      type: 'Usecase Type',
    },
    {
      name: 'Project name 6',
      type: 'Usecase Type',
    },
  ];

  isAddProject: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleAddProject() {
    if (!this.isAddProject) {
      this.isAddProject = true;
    } else {
      this.isAddProject = false;
    }
  }
}
