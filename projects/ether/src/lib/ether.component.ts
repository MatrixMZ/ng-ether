import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { EtherData, EtherService } from './ether.service';
import { trigger, style, animate, transition } from '@angular/animations';

export interface EtherPresenter extends EtherData {
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
        animate('200ms ease-in', style({ opacity: 1, right: '0px' }))
      ]),
      transition(':leave', [
        style({ opacity: 1 , right: '0'}),
        animate('400ms ease-out', style({ opacity: 0, right: '-200px' }))
      ])
    ]),
  ]
})
export class EtherComponent implements OnInit {

  elements: EtherPresenter[] = [];
  incomingData$: Observable<EtherData>;

  constructor(private ether: EtherService) {
  }

  ngOnInit(): void {
    this.incomingData$ = this.ether.data$;

    this.incomingData$.subscribe((data) => {
      const element: EtherPresenter = {...data, display: true};
      setTimeout(() => element.display = false, element.duration);
      this.elements.push(element);
    });
  }

  close(element: EtherData): void {

  }
}
