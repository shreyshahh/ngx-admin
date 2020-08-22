import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-frame-lens-material-main',
  templateUrl: './alive-frame-lens-material-main.component.html',
  styleUrls: ['./alive-frame-lens-material-main.component.scss']
})
export class AliveFrameLensMaterialMainComponent implements OnInit {

  material_source: LocalDataSource = new LocalDataSource();
  lens_source: LocalDataSource = new LocalDataSource();
  constructor() {
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

    const lens_data = [
      {
        product: 'Fiber',
      },
      {
        product: 'Glass',
      },
      {
        product: 'Plastic',
      },
    ];
    this.lens_source.load(lens_data);
    this.material_source.load(material_data);
  }

  ngOnInit(): void {
  }
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
        title: 'Frame Material',
        type: 'string',
      },
    },
  };

  lens_settings = {
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
        title: 'Lens Material',
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

  lens_onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
