import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Http, RequestOptions } from '@angular/http';

declare var $: any;

@Directive({
    selector: '[nestable]',
    providers: [NgModel]
})

export class NestableDirective implements OnInit {

    @Input("nestable") data: any;
    @Output() change = new EventEmitter<any>();

    constructor(private el: ElementRef, private ngModel: NgModel, public http: Http) {
        this.data = [];
    }

    ngOnInit() {

        var element = $(this.el.nativeElement);

        $.each(this.data, (index: any, item: any) => {
            $(element).find(".root").append(this.buildItem(item));
        });

        $(element).nestable({
            group: 1
        }).on('change', (e: any) => {
            var element = e.length ? e : $(e.target);
            this.change.emit(element.nestable('serialize'));
        });
    }

  
    buildItem(item: any) {

        
        let html = "<li class='dd-item' data-id='" + item.id + "' data-aditional='" + JSON.stringify(item.dataAditional) + "'>";
        html += "<div class='dd-handle'>" + item.name + "</div>";

        if (item.children) {
            html += "<ol class='dd-list'>";
            $.each(item.children, (index: any, children: any) => {
                html += this.buildItem(children);
            });
            html += "</ol>";
        }

        html += "</li>";

        return html;
    }

}
