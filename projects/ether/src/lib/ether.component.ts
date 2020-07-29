import { Component, OnInit } from '@angular/core';
import { Observable, Subject}  from 'rxjs';
import { EtherData, EtherService } from './ether.service';

@Component({
  selector: 'ng-ether',
  template: `
    <div class="alert" *ngIf="(alertMessage$ | async) as alertMessage" [ngStyle]="{background: alertMessage.color}">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.title }}!</strong> {{ alertMessage.message }}
    </div>
  `,
  styles: [
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
