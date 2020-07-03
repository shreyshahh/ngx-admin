import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-frame-material-main',
  templateUrl: './alive-frame-material-main.component.html',
  styleUrls: ['./alive-frame-material-main.component.scss'],
})
export class AliveFrameMaterialMainComponent implements OnInit {
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
      id: {
        title: 'Frame Material ID',
        type: 'number',
        editable: false,
      },
      product: {
        title: 'Frame Material Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {

    const data = [
      {
        id: 1,
        product: 'Metal',

      },
      {
        id: 2,
        product: 'Plastic',

      },
      {
        id: 3,
        product: 'Rubber',
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
