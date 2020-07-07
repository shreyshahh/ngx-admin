import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-frame-category-main',
  templateUrl: './alive-frame-category-main.component.html',
  styleUrls: ['./alive-frame-category-main.component.scss'],
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
      product: {
        title: 'Frame Category Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  material_source: LocalDataSource = new LocalDataSource();
  shape_source: LocalDataSource = new LocalDataSource();

  constructor() {

    const data = [
      {
        product: 'Goggles',
      },
      {
        product: 'Number Waala',
      },
    ];
    this.source.load(data);

    const material_data = [
      {
        product: 'Metal',
      },
      {
        product: 'Plastic',
      },
      {
        product: 'Rubber',
      },
    ];
    this.material_source.load(material_data);

    const shape_data = [
      {
        product: 'Aviators',
      },
      {
        product: 'Round',
      },
      {
        product: 'WayFarers',
      },
    ];
    this.shape_source.load(shape_data);

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  // material frames smart table

  material_settings = {
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
      product: {
        title: 'Frame Material Name',
        type: 'string',
      },
    },
  };

  material_onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  // frame shape smart table data
  shape_settings = {
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
      product: {
        title: 'Frame Shape Category Name',
        type: 'string',
      },
    },
  };

  shape_onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
