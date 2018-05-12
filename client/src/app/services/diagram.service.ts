import {Injectable} from '@angular/core';

import '../models/arrow.model';
import '../models/device.model';
import {ObserveOnMessage} from "rxjs/operators/observeOn";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class DiagramService {

  devices: Device<any>[] = [];

  constructor(/* TODO inject other services or core classes if necessary */) {
  }

  initDevices(func: (device: Device<any>) => void): void {
    // TODO execute func for each of the already existing devices
    for (const device of this.devices) {
      func(device);
    }
  }

  initArrows(func: (arrow: Arrow) => void): void {
    // TODO execute func for each of the already existing arrows
  }

  afterDeviceAdd(device: Device<any>): void {
    // TODO add the device to some list
    this.devices.push(device);
  }

  afterDeviceDelete(device: Device<any>): void {
    // TODO remove the device from that list
  }

  onDeviceDetails(device: Device<any>): void {
    // TODO navigate to the details view for the given device
  }

  afterArrowAdd(arrow: Arrow): void {
    // TODO add the arrow to some list
  }

  afterArrowDelete(arrow: Arrow): void {
    // TODO remove the arrow from that list
  }
}
