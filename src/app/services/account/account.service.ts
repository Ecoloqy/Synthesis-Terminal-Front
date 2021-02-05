import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  public getActiveAccount(): Observable<Account> {
    return this.http.get<Account>("/api/me");
  }

  public logOut(): void {
    this.http.get<Account>("/api/logout");
  }

}

export interface Address {
  id: number;
  country: string;
  city: string;
  street: string;
  zipCode: string;
}

export interface Pin {
  id: number;
  pinId: number;
  switchName: string;
  switchStatus: boolean;
  sensorValue: number;
  pinType: string;
}

export interface Device {
  id: string;
  name: string;
  modified: boolean;
  deviceActivated: boolean;
  pins: Pin[];
}

export interface Account {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  providerId: number;
  provider: string;
  userRole: string;
  subscription: boolean;
  address: Address;
  devices: Device[];
}
