import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
//import { GlobalService } from "app/global.service";
import { GlobalService } from '../../global.service';
import { ViewModel } from '../model/viewmodel';
import { ServiceBase } from '../services/service.base';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-footer',
    template: `
    <div class="gc-footer">
        <div class="container-fluid">
        <div class="row">
            <div class="col">
            Copyright ©Target Software 2017. Todos os direitos reservados.
            </div>
        </div>
        </div>
    </div>`
})
export class AppFooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
