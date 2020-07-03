import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-glass-category-main',
  templateUrl: './alive-glass-category-main.component.html',
  styleUrls: ['./alive-glass-category-main.component.scss']
})
export class AliveGlassCategoryMainComponent implements OnInit {
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
        title: 'Glass Category ID',
        type: 'number',
        editable: false,
      },
      product: {
        title: 'Glass Category Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {

    const data = [
      {
        id: 1,
        product: 'Glass',

      },
      {
        id: 2,
        product: 'Fiber',
      },
      {
        id: 3,
        product: 'Anti-Glare',
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
