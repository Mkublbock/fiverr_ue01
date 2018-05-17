import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DiagramService } from '../../../services/diagram.service';
import { AvailableDevice } from '../../../models/device.available';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-enumeration',
  templateUrl: './detail-enumeration.component.html',
  styleUrls: ['./detail-enumeration.component.css']
})
export class DetailEnumerationComponent {

  timeStamp;
  textareaRow = '';
  lastValue = 'Unfertig';
  selectValue;
  data: Object[];

  trueCount = 0;
  falseCount = 0;

  devices: any[];
  device;
  index: string;

  constructor(private diagramServce: DiagramService, private http: HttpClient, private router: Router) {
    this.devices = diagramServce.devices;
    this.index = this.router.url.slice(this.router.url.length - 1, this.router.url.length);
    this.device = this.devices[parseInt(this.index, 10) - 1];
    // console.log(this.device);
  }

  addData(value) {
    console.log(value);
    this.timeStamp = new Date();
    const time = this.timeStamp.getDate() + '.' + this.timeStamp.getMonth() + '.' + this.timeStamp.getFullYear()
      + ', ' + this.timeStamp.getHours() + ':' + this.timeStamp.getMinutes() + ':' + this.timeStamp.getSeconds() + ': ';
    if (this.lastValue !== value) {
      this.textareaRow += time + '' + this.lastValue + '  ->  ' + value + '\n';
      this.lastValue = value;
    }
    this.data = [{ 'name': 'true', 'value': this.trueCount }, { 'name': 'false', 'value': this.falseCount }];
  }

}
