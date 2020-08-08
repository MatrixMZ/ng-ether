/**
 * @author Mateusz Ziobrowski
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EtherNotification, EtherService } from './ether.service';
import { trigger, style, animate, transition } from '@angular/animations';

/**
 * Extends notification to be albe to be displayed in html.
 * @extends {EtherNotification}
 */
export interface EtherNotificationPresenter extends EtherNotification {
  display: boolean;
}

/**
 * Creates a active list of notification that are appearing on the screen.
 * @implements {OnInit}
 */
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

  events: EtherNotificationPresenter[] = [];
  incomingNotification$: Observable<EtherNotification>;

  /**
   * Initializes ether notification service.
   * @param {EtherService} ether
   * @memberof EtherComponent
   */
  constructor(private ether: EtherService) {
  }

  /**
   * Subscribes ether service's attribute to listen for new incoming notifications.
   * If icoming notification does not include close button then sets closing timeout.
   *
   * @memberof EtherComponent
   */
  ngOnInit(): void {
    this.incomingNotification$ = this.ether.notification$;

    this.incomingNotification$.subscribe((eventData) => {
      const notification: EtherNotificationPresenter = {...eventData, display: true};

      this.events.push(notification);
      if (notification.button) { return; }
      setTimeout(() => {
        notification.completion();
        notification.display = false;
      }, notification.duration);
    });
  }

  /**
   * Executes action function that was declared for button and closes the notification after.
   *
   * @param {EtherNotificationPresenter} event
   * @param {() => void} [action = () => {}]
   * @returns {void}
   * @memberof EtherComponent
   */
  resolveAction(event: EtherNotificationPresenter, action: () => void = () => {}): void {
    action();
    this.close(event);
  }

  /**
   * Closes notification and clears up all disabled notifications after.
   *
   * @param {EtherNotificationPresenter} event
   * @returns {void}
   * @memberof EtherComponent
   */
  destroy(event: EtherNotificationPresenter): void {
    if (event.display) { return; }
    this.events = this.events.filter((element) => element !== event);
  }

  /**
   * Closes provided notification.
   *
   * @param {EtherNotificationPresenter} event
   * @returns {void}
   * @memberof EtherComponent
   */
  close(event: EtherNotificationPresenter): void {
    event.display = false;
  }
}
