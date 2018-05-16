import {Component, OnInit, Inject} from '@angular/core';
import {DeviceService} from '../../../services/device.service';
import {Observable} from 'rxjs';
import {DiagramService} from '../../../services/diagram.service';
import {AvailableDevice} from '../../../models/device.available';
import {HttpClient} from '@angular/common/http';
import {map, filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-boolean',
  templateUrl: './detail-boolean.component.html'
})
export class DetailBooleanComponent {

  devices: any[];
  device;
  index: string;
  data: Object[] = [{"name":"true","value":0},{"name": "false", "value":0}];

  trueCount: number = 0;
  falseCount: number = 0;

  textareaRow: string[] = [];

  constructor(private diagramServce: DiagramService, private http: HttpClient, private router: Router) {
    this.devices = diagramServce.devices;
    this.index = this.router.url.slice(this.router.url.length - 1, this.router.url.length);
    this.device = this.devices[parseInt(this.index, 10) - 1];
    this.data = [{"name":"true","value":0},{"name": "false", "value":0}];
    console.log(this.device);
  }

  addData(checkBoxValue: boolean) {
    if (checkBoxValue) {
      this.trueCount++;
      this.textareaRow.push("Aus -> An");
    } else {
      this.textareaRow.push("An -> Aus");
      this.falseCount++;
    }
    console.log("asd");
    this.data = [{"name":"true","value":this.trueCount},{"name": "false", "value":this.falseCount}];
  }
}
