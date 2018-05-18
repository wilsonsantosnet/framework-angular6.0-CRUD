import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GlobalService } from '../../global.service';
import { ApiService } from '../services/api.service';
import { ViewModel } from '../model/viewmodel';

@Component({
    selector: 'make-pagination',
    template: `
        <pagination 
           (pageChanged)="onPageChanged($event)" 
            [itemsPerPage]="vm.summary.pageSize" 
            [totalItems]="vm.summary.total" 
            [maxSize]="5"
            previousText="Anterior"
            nextText="Próximo">
        </pagination>

        <div class="pull-right">
            <h4>
                Total de registros: <span class="label label-primary">{{ vm.summary.total }}</span>
            </h4>
        </div>
    `,
})
export class MakePaginationComponent {

    @Input() vm: ViewModel<any>
    @Output() pageChanged = new EventEmitter<any>();

    initialPage: number;

    constructor() {

        this.initialPage = 1;
    }

    onPageChanged(e: any) {

        this.pageChanged.emit({
            PageIndex: e.page,
            PageSize: e.itemsPerPage,
        })
    }

}
