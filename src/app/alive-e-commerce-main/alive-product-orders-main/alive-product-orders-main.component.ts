import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserDetailsLinkComponent } from './user-details-link/user-details-link.component';
import { DeliveryStatusButtonComponent } from './delivery-status-button/delivery-status-button.component';



@Component({
  selector: 'ngx-alive-product-orders-main',
  templateUrl: './alive-product-orders-main.component.html',
  styleUrls: ['./alive-product-orders-main.component.scss'],
})
export class AliveProductOrdersMainComponent implements OnInit {

  ngOnInit() {

  }
  settings = {
    actions: {
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Order ID',
        type: 'number',
      },
      product: {
        title: 'Product Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      userDetails: {
        title: 'View User Details',
        type: 'custom',
        filter: false,
        renderComponent: UserDetailsLinkComponent,
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      paymentAmount: {
        title: 'Paid Amount',
        type: 'number',
      },
      paymentStatus: {
        title: 'Payment Status',
        type: 'string',
      },
      DeliveryStatus: {
        title: 'Delivery Status',
        type: 'custom',
        filter: 'false',
        renderComponent: DeliveryStatusButtonComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {

    const data = [
      {
        id: 1,
        product: 'frame1',
        username: 'Bret',
        address: 'ahmedabad',
        paymentAmount: 500,
        paymentStatus: 'COD',
      },
      {
        id: 2,
        product: 'frame2',
        username: 'John',
        address: 'surat',
        paymentAmount: 500,
        paymentStatus: 'Net Banking',
      },
    ];
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}



