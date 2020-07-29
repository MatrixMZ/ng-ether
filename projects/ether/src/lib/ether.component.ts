import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { EtherData, EtherService } from './ether.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'ng-ether',
  templateUrl: './ether.html',
  styleUrls: ['./ether.scss'],
  animations: [
    trigger('ether', [
      transition(':enter', [
        style({ opacity: 0 , right: '-200px'}),
        animate('200ms ease-in', style({ opacity: 1, right: 0 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class EtherComponent implements OnInit {

  elements: EtherData[] = [];
  incomingData$: Observable<EtherData>;
  // close$ = new Subject<boolean>();

  constructor(private ether: EtherService) {
  }

  ngOnInit() {
    this.incomingData$ = this.ether.data$;

    this.incomingData$.subscribe((data) => {
      setTimeout(() => {  }, 3000);
      const element = data;
      setTimeout(() => {
        for (let item in this.elements) {
          if (item === element) {

          }
        }
       }, 3000);
      this.elements.push(data);
      console.log(data);
    });
  }

  close(element: EtherData): void {

  }
}
