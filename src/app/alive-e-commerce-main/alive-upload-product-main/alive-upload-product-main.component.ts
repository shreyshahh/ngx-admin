import { Component, OnInit, ViewChild } from '@angular/core';
// import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-alive-upload-product-main',
  templateUrl: './alive-upload-product-main.component.html',
  styleUrls: ['./alive-upload-product-main.component.scss'],
})
export class AliveUploadProductMainComponent implements OnInit {

  options: string[];
  filteredOptions$: Observable<string[]>;
  @ViewChild('autoInput') input;
  constructor() { }

  ngOnInit(): void {
    this.options = ['Option 1', 'Option 2', 'Option 3'];
    this.filteredOptions$ = of(this.options);

}
private filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
}

getFilteredOptions(value: string): Observable<string[]> {
  return of(value).pipe(
    map(filterString => this.filter(filterString)),
  );
}

onChange() {
  this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
}

onSelectionChange($event) {
  this.filteredOptions$ = this.getFilteredOptions($event);
}
}
