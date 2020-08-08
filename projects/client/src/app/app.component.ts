import { EtherService } from './../../../ether/src/lib/ether.service';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private ether: EtherService) {
  }

  ngAfterViewInit(): void {
    this.dispatchMessage();
  }

  public dispatchMessage(): void {
    this.ether.launch({
      title: 'Notification',
      // message: 'Simple note.',
      // button: { label: 'Cancel', action: () => console.log('Action!') }
    });
  }

}
