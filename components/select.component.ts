import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
//import { GlobalService } from "app/global.service";
import { GlobalService } from '../../global.service';
import { ViewModel } from '../model/viewmodel';
import { ServiceBase } from '../services/service.base';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'select-custom',
  template: `<select2 *ngIf="isDataComplete" [options]="options" [(ngModel)]="value" (onSelect)="onSelect($event)"></select2>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectCustomComponent),
    multi: true
  }]

})
export class SelectCustomComponent implements ControlValueAccessor, OnInit {

  @Input() dataitem: string;
  @Input() endpoint: string;
  @Input() datafilters: any;

  model: any
  onTouched: any;
  onChange: any;
  isDataComplete: boolean;
  options: any[];

  constructor(private serviceBase: ServiceBase, private api: ApiService<any>) {
    this.isDataComplete = false;
  }

  ngOnInit() {

    this.datasource();
    GlobalService.notification.subscribe((not) => {
      if (not.event == "create" || not.event == "edit") {
        this.datasource();
      }
      if (not.event == "change") {
        if (not.data.dataitem == this.dataitem)
          this.datasource(not.data.parentFilter);
      }
    });
  }



  //get accessor
  get value(): any {
    return this.model;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.model) {
      this.model = v;
      this.onChange(v);
    }
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.model) {
      this.model = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  datasource(parentFilter?: any) {

    if (this.options.length > 0)
      return;

    var filters = Object.assign(this.datafilters || {}, parentFilter || {});

    this.api.setResource(this.dataitem, this.endpoint).getDataitem(filters).subscribe((response) => {

      this.options = response.dataList.map((item, index) => {
        return {
          id: item.id,
          text: item.name
        };
      });
      this.isDataComplete = true;

    });

  }



}
