import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../services/api.service';
import { GlobalService } from '../../global.service';
import { ViewModel } from '../model/viewmodel';

@Component({
  selector: 'cpf-cnpj',
  template: `<div class='form-group' [formGroup]="vm.form">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" [(ngModel)]='tpCTRLcpfCnpj'  [value]='1' name='tpCTRLcpfCnpj' [ngModelOptions]="{standalone: true}">&nbsp;CPF ou &nbsp;
                    <input type="radio" [(ngModel)]='tpCTRLcpfCnpj' [value]='2' name='tpCTRLcpfCnpj' [ngModelOptions]="{standalone: true}">&nbsp;CNPJ?
                  </div>
                </div>
                <input *ngIf='tpCTRLcpfCnpj==1 || !tpCTRLcpfCnpj' type='text' class='form-control' [(ngModel)]='vm.model[fieldName]' name="{{fieldName}}" formControlName="{{fieldName}}" [textMask]='{mask: vm.masks.maskCPF}' required="{isRequired}"/>
                <input *ngIf='tpCTRLcpfCnpj==2' type='text' class='form-control' [(ngModel)]='vm.model[fieldName]' name="{{fieldName}}" formControlName="{{fieldName}}" [textMask]='{mask: vm.masks.maskCNPJ}' required="{isRequired}"/>
              </div>
            </div>`
})
export class CpfCnpjComponent implements OnInit {

  @Input() vm: ViewModel<any>
  tpCTRLcpfCnpj: number;
  @Input() fieldName: string;
  @Input() isRequired: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.tpCTRLcpfCnpj = 1;
  }

  


}
