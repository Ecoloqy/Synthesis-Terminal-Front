import {Component, OnInit} from '@angular/core';
import {Account, AccountService} from "../../services/account/account.service";

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
      if (this.account != null) {
        this.activeAvatarUrl = this.account.avatarUrl;
        this.username = this.account.username;
      }
    });
  }

  isLogged(): boolean {
    return this.account != null;
  }

}
