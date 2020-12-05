import { Component } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = 'hello';
  update() {
    this.data = 'hi....';
  }

  constructor(ts: ServiceService) {
    ts.callmockAPI;
  }
}
