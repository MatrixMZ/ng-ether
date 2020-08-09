/**
 * @author Mateusz Ziobrowski <matrix.ziobrowski@gmail.com>
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Defines a color theme for ether element.
 *
 * @export
 */
export interface EtherTheme {
  primary: string;
  secondary?: string;
  text: string;
}

/**
 * Definies color scheme for ether elements.
 *
 * @export
 */
export class EtherDefaults {
  public static Default: EtherTheme = { primary: '#303030', text: '#ffffff'};
  public static Success: EtherTheme = { primary: 'green', text: '#ffffff'};
  public static Warning: EtherTheme = { primary: 'orange', text: '#ffffff'};
  public static Error: EtherTheme = { primary: 'red', text: '#ffffff'};
}

/**
 * Defines ether button with its action funciton and label.
 *
 * @export
 */
export interface EtherButton {
  label?: string;
  action?: () => void;
}

/**
 * Defines data templete for ether notification.
 *
 * @export
 */
export interface EtherNotification {
  title?: string;
  message?: string;
  theme?: EtherTheme;
  duration?: number;
  completion?: () => void;
  button?: EtherButton;
}

/**
 * Service provides a connection with EtherComponent
 * that displays notifications that are launched
 * from this service.
 *
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class EtherService {

  public notification$ = new Subject<EtherNotification>();

  /**
   * Creates new notification. With provided data that is optional.
   *
   * @param EtherNotification Custom notification data
   */
  public launch(custom?: EtherNotification): void {
    this.notification$.next({
      title: 'Notification',
      duration: 3000,
      theme: EtherDefaults.Default,
      completion: () => {},
      ...custom,
      button: custom.button ? { label: '&#x2715;', action: () => {}, ...custom.button } : null
    });
  }

}
