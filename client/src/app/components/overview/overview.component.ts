import { Component, OnInit } from '@angular/core';
import { AvailableDevice } from '../../models/device.available';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  devices: Observable<AvailableDevice[]>;

  constructor(private http: HttpClient) {
    this.devices = this.http.get<AvailableDevice[]>('http://localhost:8081/api/devices');
  }

  ngOnInit() {
    this.devices = this.http.get<AvailableDevice[]>('http://localhost:8081/api/devices');
    console.log(this.devices);
  }
}
