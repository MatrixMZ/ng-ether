import { Component, OnInit } from '@angular/core';
import { Observable, Subject}  from 'rxjs';
import { EtherData, EtherService } from './ether.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'ng-ether',
  templateUrl: './ether.html',
  styleUrls: ['./ether.scss'],
  animations: [
    trigger('ether', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class EtherComponent implements OnInit {

  alertMessage$: Observable<EtherData>;
  close$ = new Subject<boolean>();

  constructor(private alertService: EtherService) {
  }

  ngOnInit() {
    this.alertMessage$ = this.alertService.alertMessage$;
    this.alertMessage$.subscribe((data) => {
      console.log(data);
    });
  }

  closeAlert(): void {
    this.close$.next();
  }
}
