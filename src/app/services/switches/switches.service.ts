import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Device} from "../account/account.service";

@Injectable({providedIn: 'root'})
export class SwitchesService {

  constructor(private http: HttpClient) {
  }

  public sendSwitchUpdate(userId: String, device: Device): void {
    console.log(device);
    this.http.put("/api/accounts/" + userId + "/devices/" + device.id, device);
  }

}
