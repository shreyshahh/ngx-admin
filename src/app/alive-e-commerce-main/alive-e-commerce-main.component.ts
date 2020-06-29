import { Component } from '@angular/core';

import { MENU_ITEMS } from './alive-e-commerce-main-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['alive-e-commerce-main.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AliveECommerceMainComponent {

  menu = MENU_ITEMS;
}
