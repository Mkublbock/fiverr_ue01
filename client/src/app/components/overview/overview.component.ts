import { Component, OnInit } from '@angular/core';
import { AvailableDevice } from '../../models/device.available';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/authservice';
import { DiagramService } from '../../services/diagram.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  devices: AvailableDevice[] = [];

  constructor(private http: HttpClient, private authService: AuthService, protected diagram: DiagramService) {
  }

  ngOnInit() {
    this.http.get<AvailableDevice[]>('http://localhost:8081/api/devices').subscribe(data => this.devices = data);
    console.log(this.devices);
  }
}
