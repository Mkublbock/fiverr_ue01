import {Component, OnInit, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DiagramService} from '../../../services/diagram.service';
import {AvailableDevice} from '../../../models/device.available';
import {HttpClient} from '@angular/common/http';
import {map, filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-continuous',
  templateUrl: './detail-continuous.component.html'
})
export class DetailContinuousComponent {

  timeStamp;
  textareaRow = '';
  devices: any[];
  device;
  index: string;

  lastValue = 0;

  data: any[] = [
    {
      "name": "Temparatur",
      "series": [
      ]
    }
  ];


  constructor(private diagramServce: DiagramService, private http: HttpClient, private router: Router) {
    this.devices = diagramServce.devices;
    this.index = this.router.url.slice(this.router.url.length - 1, this.router.url.length);
    this.device = this.devices[parseInt(this.index, 10) - 1];
  }

  addData(value:number) {
    if(value<=this.device.control.max&&value>=this.device.control.min){
      this.timeStamp = new Date();
      const time = this.timeStamp.getDate() + '.' + this.timeStamp.getMonth() + '.' + this.timeStamp.getFullYear()
        + ', ' + this.timeStamp.getHours() + ':' + this.timeStamp.getMinutes() + ':' + this.timeStamp.getSeconds() + ': ';
      if (this.lastValue !== value) {
        this.textareaRow += time + '' +  this.lastValue + '  ->  ' + value + '\n';
        this.lastValue = value;
      }
      this.data[0].series.push({"name": time, "value": value});
      this.data=[...this.data];
    }
  }
}
