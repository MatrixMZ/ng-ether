import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface EtherStyle {
  color: string;
  title: string;
}

export class EtherDefaults {
  public static Default: EtherStyle = { color: '#303030', title: 'Success' };
  public static Success: EtherStyle = { color: 'green', title: 'Success' };
  public static Warning: EtherStyle = { color: 'orange', title: 'Warning' };
  public static Error: EtherStyle = { color: 'Red', title: 'Error' };
}

export class EtherDefaultButtons {
  public static Close: EtherStyle = { color: '#303030', title: 'Success' };
  public static Success: EtherStyle = { color: 'green', title: 'Success' };
  public static Warning: EtherStyle = { color: 'orange', title: 'Warning' };
  public static Error: EtherStyle = { color: 'Red', title: 'Error' };
}



export interface EtherButton {
  label?: string;
  color?: string;
  action?: () => void;
}

export interface EtherEvent {
  style?: EtherStyle;
  title?: string;
  message?: string;
  color?: string;
  duration?: number;
  completion?: () => void;
  button?: EtherButton;
}


@Injectable({
  providedIn: 'root'
})
export class EtherService {

  public event$ = new Subject<EtherEvent>();

  public launch(custom?: EtherEvent): void {
    const params: EtherEvent = {
      style: EtherDefaults.Default,
      title: 'Notification',
      message: 'Blah, balh, balh!',
      color: '#303030',
      duration: 3000,
      completion: () => {},
      button: { label: '&#x2715;', color: 'white', action: () => {} }
    };
    this.event$.next({ ...params, ...custom });
  }

}
