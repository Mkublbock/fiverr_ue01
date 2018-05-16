import { Injectable } from '@angular/core';

import '../models/arrow.model';
import '../models/device.model';
import { ObserveOnMessage } from 'rxjs/operators/observeOn';
import { forEach } from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';

@Injectable()
export class DiagramService {

  devices: Device<any>[] = [];
  arrows: Arrow[] = [];

  constructor(private router: Router) {
  }

  initDevices(func: (device: Device<any>) => void): void {
    // TODO execute func for each of the already existing devices
    for (const device of this.devices) {
      func(device);
    }
  }

  initArrows(func: (arrow: Arrow) => void): void {
    this.arrows.forEach(arrow => {
      func(arrow);
    });
  }

  afterDeviceAdd(device: Device<any>): void {
    // TODO add the device to some list
    this.devices.push(device);
  }

  afterDeviceDelete(device: Device<any>): void {
    const index = this.devices.indexOf(device, 0);
    if (index > -1) {
      this.devices.splice(index, 1);
    }
  }

  onDeviceDetails(device: Device<any>): void {
    // TODO navigate to the details view for the given device
    switch (device.control.type) {
      case 'enum': this.router.navigate(['/detailsenum/' + device.index]); break;
      case 'continuous': this.router.navigate(['/detailscont/' + device.index]); break;
      case 'boolean':  this.router.navigate(['/detailsbool/' + device.index]); break;
    }
  }

  afterArrowAdd(arrow: Arrow): void {
    this.arrows.push(arrow);
  }

  afterArrowDelete(arrow: Arrow): void {
    const index = this.arrows.indexOf(arrow, 0);
    if (index > -1) {
      this.arrows.splice(index, 1);
    }
  }
}
