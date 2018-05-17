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
  device: AvailableDevice;
  index: string;
  data: Object[];

  trueCount: number = 0;
  falseCount: number = 0;

  textareaRow: string = '';
  lastCheckBoxValue: boolean = false;

  constructor(private diagramServce: DiagramService, private router: Router) {
    this.devices = diagramServce.devices;
    this.index = this.router.url.slice(this.router.url.length - 1, this.router.url.length);
    this.device = this.devices[parseInt(this.index, 10) - 1];
    console.log(this.device);
  }

  addData(checkBoxValue: boolean) {
    if (checkBoxValue && !this.lastCheckBoxValue) {
      this.trueCount++;
      this.textareaRow += "Aus -> An\n";
      this.lastCheckBoxValue = true;
    } else {
      if (!checkBoxValue && this.lastCheckBoxValue) {
        this.textareaRow += "An -> Aus\n";
        this.falseCount++;
        this.lastCheckBoxValue = false;
      }
    }

    this.data = [{"name": "true", "value": this.trueCount}, {"name": "false", "value": this.falseCount}];
  }
}
