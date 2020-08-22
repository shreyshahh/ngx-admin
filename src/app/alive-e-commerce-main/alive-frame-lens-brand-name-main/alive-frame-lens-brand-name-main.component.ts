import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-alive-frame-lens-brand-name-main',
  templateUrl: './alive-frame-lens-brand-name-main.component.html',
  styleUrls: ['./alive-frame-lens-brand-name-main.component.scss']
})
export class AliveFrameLensBrandNameMainComponent implements OnInit {

  framebrand_source: LocalDataSource = new LocalDataSource();
  lensbrand_source: LocalDataSource = new LocalDataSource();
  constructor() {
    const framebrand_data = [
      {
        product: 'RayBan',
      },
      {
        product: 'Titan',
      },
      {
        product: 'Idee',
      },
    ];

    const lensbrand_data = [
      {
        product: 'Cryzal',
      },
      {
        product: 'ABC',
      },
      {
        product: 'XYZ',
      },
    ];
    this.lensbrand_source.load(lensbrand_data);
    this.framebrand_source.load(framebrand_data);
  }

  ngOnInit(): void {
  }
  framebrand_settings = {
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
        title: 'Frame Brands',
        type: 'string',
      },
    },
  };

  lensbrand_settings = {
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
        title: 'Lens Brands',
        type: 'string',
      },
    },
  };
  framebrand_onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  lensbrand_onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


}
