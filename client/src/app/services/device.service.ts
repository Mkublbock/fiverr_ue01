import {Injectable , OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {AvailableDevice} from "../models/device.available";

@Injectable()
export class DeviceService implements OnInit{

  devices: AvailableDevice[] = [];

  constructor(private http:HttpClient) {

  }

  ngOnInit () {
    this.http.get<AvailableDevice[]>('http://localhost:8081/api/devices').subscribe(data => this.devices = data);
  }

  getDeviceData (index:number): AvailableDevice {
    return this.devices[index];
  }
}
