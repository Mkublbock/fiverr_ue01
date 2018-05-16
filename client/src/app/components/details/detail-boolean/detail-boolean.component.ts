import { Component, OnInit, Inject } from '@angular/core';
import { DeviceService } from '../../../services/device.service';
import { Observable } from 'rxjs/Observable';
import { DiagramService } from '../../../services/diagram.service';
import { AvailableDevice } from '../../../models/device.available';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-detail-boolean',
  templateUrl: './detail-boolean.component.html'
})
export class DetailBooleanComponent implements OnInit {


  devices: Object[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ];

  constructor(private diagramServce: DiagramService, private http: HttpClient) {
    //this.devices = diagramServce.devices;
    //console.log(this.devices);
  }

  ngOnInit() {

  }

}
