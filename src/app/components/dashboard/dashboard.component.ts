import {Component, OnInit} from '@angular/core';
import {Account, AccountService, Device} from "../../services/account/account.service";
import {SwitchesService} from "../../services/switches/switches.service";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: Account;
  devices: Device[];

  constructor(private accountService: AccountService, private switchesService: SwitchesService) {
  }

  ngOnInit(): void {
    this.accountService.getActiveAccount().subscribe(data => {
      this.account = data;
      if (this.account != null) {
        this.devices = data.devices;
      }
    });
  }

  switchButton(deviceId: String, pinId: number): void {
    this.devices.forEach(device => {
      if (device.id === deviceId) {
        device.modified = true;
        device.pins.forEach(pin => {
          if (pin.id === pinId) {
            pin.switchStatus = true;
          }
        })
      }
      this.switchesService.sendSwitchUpdate(this.account.id, device);
    })
  }

  onButton(deviceId: String, pinId: number): void {
    this.devices.forEach(device => {
      if (device.id === deviceId) {
        device.modified = true;
        device.pins.forEach(pin => {
          if (pin.id === pinId) {
            pin.switchStatus = true;
          }
        })
      }
      this.switchesService.sendSwitchUpdate(this.account.id, device);
    })
  }

  offButton(deviceId: String, pinId: number): void {
    this.devices.forEach(device => {
      if (device.id === deviceId) {
        device.modified = true;
        device.pins.forEach(pin => {
          if (pin.id === pinId) {
            pin.switchStatus = false;
          }
        })
      }
      this.switchesService.sendSwitchUpdate(this.account.id, device);
    })
  }

}
