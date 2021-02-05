import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AccountService} from "../account/account.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private accountService: AccountService) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.accountService.getActiveAccount().subscribe(data => {
      if (data == null) {
        this.router.navigateByUrl('/').then();
        return false;
      }
    });
    return true;
  }

}
