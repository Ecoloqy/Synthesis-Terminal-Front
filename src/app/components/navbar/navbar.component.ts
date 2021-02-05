import {Component, OnInit} from '@angular/core';
import {Account, AccountService} from "../../services/account/account.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  defaultImageUrl: String = '/api/resources/img/default-avatar.png';
  activeAvatarUrl: String = '/api/resources/img/default-avatar.png';
  username: String = '';
  account: Account;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getActiveAccount().subscribe(data => {
      this.account = data;
      if (data != null && data.avatarUrl != null) {
        this.activeAvatarUrl = data.avatarUrl;
        this.username = data.username;
      }
    });
  }

  isLogged() {
    return this.account != null;
  }

}
