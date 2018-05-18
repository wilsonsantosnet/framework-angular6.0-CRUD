import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { GlobalService, NotificationParameters } from '../../global.service';

@Component({
    selector: 'confirm-modal',
    template: `
              <div bsModal #_confirmModal="bs-modal" class="gc-modal modal fade" >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title">Confirmação</h3>
                    </div>
                    <div class="card">
                      <h5 class="card-block">
                        {{ vm.messageConfirmation }}
                      </h5>
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-default btn-default-app" type="button" (click)="onCancel()">Cancelar</button>
                      <button class="btn btn-success btn-success-app" type="button" (click)="onConfimationYes()">Sim</button>
                    </div>
                  </div>
                </div>
              </div>
            `
})
export class ConfirmModalComponent implements OnInit, OnDestroy {


    @ViewChild('_confirmModal') private _confirmModal: ModalDirective;

    vm: any;

    _openationConfimationYes: any;
    _operationService: any;
    _operationVM: any;
    _notificationEmitter: EventEmitter<NotificationParameters>;

    public config = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
    };

    constructor() {
        this.vm = {};
        this.vm.messageConfirmation = "Tem certeza que deseja executar essa operação?"
    }


    ngOnInit() {

        this._notificationEmitter = GlobalService.getOperationExecutedEmitter().subscribe((result: any) => {
            if (result.selector == "confirm-modal") {
                this.vm.messageConfirmation = result.message || this.vm.messageConfirmation;
                this.show();
                this._openationConfimationYes = result.operation;
                this._operationService = result.service;
                this._operationVM = result.vm;
            };
        })

    }

    show() {
        this._confirmModal.show();
    }

    onConfimationYes() {
        this._confirmModal.hide();

        this._openationConfimationYes(this._operationService, this._operationVM);
    }

    onCancel() {
        this._confirmModal.hide();
    }

    ngOnDestroy() {
        if (this._notificationEmitter)
            this._notificationEmitter.unsubscribe();
    }


}
