import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-coupon-code-main',
  templateUrl: './alive-coupon-code-main.component.html',
  styleUrls: ['./alive-coupon-code-main.component.scss'],
})
export class AliveCouponCodeMainComponent implements OnInit {

  ngOnInit(): void {
  }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      code: {
        title: 'Coupon Code',
        type: 'String',
      },
      codeminamount: {
        title: 'Minimum Amount',
        type: 'number',
      },
      codeminproduct: {
        title: 'Minimum Product',
        type: 'number',
      },
      discountpercent: {
        title: 'Off Percentage',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {

    const data = [
      {
        code: 'B1G1',
        codeminamount: 0,
        codeminproduct: 2,
        discountpercent: 50 + '%',
      },
      {
        code: 'FLAT50',
        codeminamount: 0,
        codeminproduct: 3,
        discountpercent: 50 + '%',
      },
      {
        code: 'X2gbcky',
        codeminamount: 1000,
        codeminproduct: 0,
        discountpercent: 50 + '%',
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
