import { Component, ElementRef, Input, OnInit, EventEmitter, Output } from '@angular/core';

declare var $: any;

@Component({
    selector: 'nestabale-tree',
    template: `
    <div class="dd" [id]="id" [nestable]="data" (change)="onChangeNestabale($event)">
      <ol class="dd-list root" >
      </ol>
    </div>`
})
export class NestabaleTreeComponent implements OnInit {

    @Input() data: any[];
    @Input() id: any;
    @Output() change = new EventEmitter<any>();

    constructor(private el: ElementRef) {

    }

    ngOnInit() {

    }

    onChangeNestabale(e: any) {
        this.change.emit(e);
    }



}