import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { EtherEvent, EtherService } from './ether.service';
import { trigger, style, animate, transition } from '@angular/animations';

export interface EtherPresenter extends EtherEvent {
  display: boolean;
}

@Component({
  selector: 'ng-ether',
  templateUrl: './ether.html',
  styleUrls: ['./ether.scss'],
  animations: [
    trigger('ether', [
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

    this.incomingEvent$.subscribe((data) => {
      const element: EtherPresenter = {...data, display: true};
      setTimeout(() => element.display = false, element.duration);
      this.events.push(element);
    });
  }

  destroy(element: EtherPresenter): void {
    if (element.display) return;
    this.events = this.events.filter((item) => item !== element);
  }

  close(element: EtherEvent): void {

  }
}
