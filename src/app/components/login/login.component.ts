import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  defaultImageUrl: String = '/api/resources/img/default-avatar.png';
  githubImageUrl: String = '/api/resources/img/github-icon.png';

  constructor() { }

  ngOnInit(): void {
  }

}
