import { Component, OnInit, Inject } from '@angular/core';
import { DeviceService } from '../../../services/device-service.service';
import { Observable } from 'rxjs/Observable';
import { DiagramService } from '../../../services/diagram.service';
import { AvailableDevice } from '../../../models/device.available';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-detail-boolean',
  templateUrl: './detail-boolean.component.html',
  styleUrls: ['./detail-boolean.component.css']
})
export class DetailBooleanComponent implements OnInit {


  devices: any[];

  constructor(private diagramServce: DiagramService, private http: HttpClient) {
    this.devices = diagramServce.devices;
    console.log(this.devices);
  }

  ngOnInit() {

  }

}
