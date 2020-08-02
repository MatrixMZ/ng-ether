import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EtherEvent, EtherService } from './ether.service';
import { trigger, style, animate, transition } from '@angular/animations';

export interface EtherPresenter extends EtherEvent {
  display: boolean;
}

@Component({
  selector: 'ether-notification',
  templateUrl: './ether.html',
  styleUrls: ['./ether.scss'],
  animations: [
    trigger('ether-notification', [
      transition(':enter', [
        style({ opacity: 0 , right: '-200px'}),
        animate('300ms ease-out', style({ opacity: 1, right: '0px' }))
      ]),
      transition(':leave', [
        style({ opacity: 1 , right: '0'}),
        animate('300ms ease-in', style({ opacity: 0, right: '-200px' }))
      ])
    ]),
  ]
})
export class EtherComponent implements OnInit {

  events: EtherPresenter[] = [];
  incomingEvent$: Observable<EtherEvent>;

  constructor(private ether: EtherService) {
  }

  ngOnInit(): void {
    this.incomingEvent$ = this.ether.event$;

    this.incomingEvent$.subscribe((eventData) => {
      const event: EtherPresenter = {...eventData, display: true};

      this.events.push(event);
      if (event.button) { return; }
      setTimeout(() => event.display = false, event.duration);
    });
  }

  resolveAction(event: EtherPresenter, action: () => void = () => {}): void {
    action();
    this.close(event);
  }

  destroy(event: EtherPresenter): void {
    if (event.display) { return; }
    this.events = this.events.filter((element) => element !== event);
  }

  close(event: EtherPresenter): void {
    event.display = false;
  }
}
