import { Component, OnInit } from '@angular/core';
import {AvailableDevice} from "../../../models/device.available";

@Component({
  selector: 'app-detail-continuous',
  templateUrl: './detail-continuous.component.html'
})
export class DetailContinuousComponent implements OnInit {

  device: Object[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    }, {
  "name": "USA",
  "series": [
    {
      "name": "2010",
      "value": 7870000
    },
    {
      "name": "2011",
      "value": 8270000
    }
    ]
}
];

    constructor() { }

  ngOnInit() {
  }

}
