import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../services/api.service';
import { GlobalService } from '../../global.service';
import { ViewModel } from '../model/viewmodel';

@Component({
  selector: 'cep',
  template: `<div class="row" [formGroup]="vm.form">
  <section class="col-md-2">
    <div class='form-group'>
      <label>{{ vm.infos.cep.label }}</label>
      <input type='text' class='form-control' [(ngModel)]='vm.model.cep' name='cep' cepFinder (onfind)="onFindCep($event)" formControlName='cep' [textMask]="{mask: vm.masks.maskCEP}" required />      
    </div>
  </section>
  <section class="col-md-6">
    <div class='form-group busca-cep'>
      <span>
        <a href='http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm' target='_blank'>Não sei o meu CEP.</a>
      </span>
    </div>
  </section>
  <section class="col-md-6">
    <div class='form-group'>
      <label>{{ vm.infos.rua.label }}</label>
      <input type='text' class='form-control'[(ngModel)]='vm.model.rua' name='rua'  formControlName='rua' required />
    </div>
  </section>
  <section class="col-md-6">
    <div class='form-group'>
      <label>{{ vm.infos.bairro.label }}</label>
      <input type='text' class='form-control'[(ngModel)]='vm.model.bairro' name='bairro'  formControlName='bairro' required />
    </div>
  </section>
  <section class="col-md-2">
    <div class='form-group'>
      <label>{{ vm.infos.numero.label }}</label>
      <input type='text' class='form-control'[(ngModel)]='vm.model.numero' name='numero' maski='9999999999' formControlName='numero' required />
    </div>
  </section>
  <section class="col-md-6">
    <div class='form-group'>
      <label>{{ vm.infos.complemento.label }}</label>
      <input type='text' class='form-control'[(ngModel)]='vm.model.complemento' name='complemento'  formControlName='complemento'  />
    </div>
  </section>
  <section class="col-md-6">
    <div class='form-group'>
      <label>{{ vm.infos.cidade.label }}</label>
      <input type='text' class='form-control'[(ngModel)]='vm.model.cidade' name='cidade'  formControlName='cidade' required />
    </div>
  </section>
  <section class="col-md-1">
    <div class='form-group'>
      <label>{{ vm.infos.estado.label }}</label>
      <input type='text' class='form-control'[(ngModel)]='vm.model.estado' name='estado'  formControlName='estado' required />
    </div>
  </section>  
</div>`
})
export class CepComponent implements OnInit {

  @Input() vm: ViewModel<any>
  @Output() cepChange = new EventEmitter<any>();
  
  constructor() {
  }

  ngOnInit(): void {

  }

  onFindCep(data: any) {

    this.vm.model.rua = data.logradouro;
    this.vm.model.cidade = data.cidade;
    this.vm.model.estado = data.uf;
    this.vm.model.bairro = data.bairro;

    this.cepChange.emit(data);    
  }


}
