import { EtherService } from './../../../ether/src/lib/ether.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ether: EtherService) {
  }

  public dispatchMessage(): void {
    this.ether.launch({title: 'Notification', message: 'Simple note.'});
  }

}
