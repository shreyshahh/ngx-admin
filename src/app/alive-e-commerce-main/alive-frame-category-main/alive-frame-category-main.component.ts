import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-frame-category-main',
  templateUrl: './alive-frame-category-main.component.html',
  styleUrls: ['./alive-frame-category-main.component.scss']
})
export class AliveFrameCategoryMainComponent implements OnInit {

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
        title: 'Frame Category ID',
        type: 'number',
        editable: false,
      },
      product: {
        title: 'Frame Category Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {

    const data = [
      {
        id: 1,
        product: 'Goggles',

      },
      {
        id: 2,
        product: 'Number Waala',

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
