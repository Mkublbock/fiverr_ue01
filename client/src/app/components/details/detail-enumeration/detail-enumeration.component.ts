import {Component, OnInit, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DiagramService} from '../../../services/diagram.service';
import {AvailableDevice} from '../../../models/device.available';
import {HttpClient} from '@angular/common/http';
import {map, filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-enumeration',
  templateUrl: './detail-enumeration.component.html'
})
export class DetailEnumerationComponent {

  timeStamp;
  textareaRow = '';
  lastValue = 'Unfertig';
  selectValue;
  data: Object[];

  devices: any[];
  device;
  index: string;

  finishedCount: number = 0;
  unfinishedCount: number = 0;
  nearlyFinCount: number = 0;

  constructor(private diagramServce: DiagramService, private http: HttpClient, private router: Router) {
    this.devices = diagramServce.devices;
    this.index = this.router.url.slice(this.router.url.length - 1, this.router.url.length);
    this.device = this.devices[parseInt(this.index, 10) - 1];
    // console.log(this.device);
  }

  addData(value) {
    this.timeStamp = new Date();
    const time = this.timeStamp.getDate() + '.' + this.timeStamp.getMonth() + '.' + this.timeStamp.getFullYear()
      + ', ' + this.timeStamp.getHours() + ':' + this.timeStamp.getMinutes() + ':' + this.timeStamp.getSeconds() + ': ';
    if (this.lastValue !== value) {
      this.textareaRow += time + '' + this.lastValue + '  ->  ' + value + '\n';
      this.lastValue = value;

      //check the dropdown value and increment the values
      if (value === "Fertig") {
        this.finishedCount++;
      } else {
        if (value === "Unfertig") {
          this.unfinishedCount++;
        } else {
          this.nearlyFinCount++;
        }
      }

      this.data = [{"name": "Fertig", "value": this.finishedCount}, {
        "name": "Unfertig",
        "value": this.unfinishedCount
      }, {"name": "Teilweise Fertig", "value": this.nearlyFinCount}];
    }
  }

}
