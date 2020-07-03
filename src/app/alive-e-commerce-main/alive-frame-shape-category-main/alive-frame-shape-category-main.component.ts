import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-frame-shape-category-main',
  templateUrl: './alive-frame-shape-category-main.component.html',
  styleUrls: ['./alive-frame-shape-category-main.component.scss'],
})
export class AliveFrameShapeCategoryMainComponent implements OnInit {

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
        title: 'Frame Shape Category ID',
        type: 'number',
        editable: false,
      },
      product: {
        title: 'Frame Shape Category Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {

    const data = [
      {
        id: 1,
        product: 'Aviators',

      },
      {
        id: 2,
        product: 'Round',
      },
      {
        id: 3,
        product: 'WayFarers',
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
