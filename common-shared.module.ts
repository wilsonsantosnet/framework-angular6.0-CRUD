import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination'
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TagInputModule } from 'ngx-chips';
import { TextMaskModule } from 'angular2-text-mask';

import { DataSourceDirective } from './directives/select-datasource.directive';
import { MaskInputDirective } from './directives/mask-input.directive';
import { UnMaskDirective } from './directives/unmask.directive';
import { DateDirective } from './directives/date.directive';
import { DateTimeDirective } from './directives/date.time.directive';
import { BindCustomComponent } from './components/bind-custom.component';
import { MakeGridComponent } from './components/grid.component'
import { CepComponent } from '../common/components/cep.component';
import { TreeViewComponent } from '../common/components/tree-view.component';
import { NestabaleTreeComponent } from '../common/components/nestable-tree.component';
import { UploadCustomComponent } from '../common/components/upload-file.component';
import { MultiSelectComponent } from '../common/components/multiselect.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { MaskFormatPipe } from './pipes/mask.pipe';
import { EditorHtmlDiretive } from './directives/editor-html.directive';
import { TagCustomComponent } from '../common/components/tag.component';
import { DomElemetAppendDirective } from '../common/directives/dom-elemet-apped.directive';
import { CallerDiretive } from '../common/directives/caller.directive';
import { NestableDirective } from '../common/directives/nestable.directive';
import { MultiSelectFunnelComponent } from '../common/components/multiselect-funnel.component';
import { CepDirective } from "../common/directives/cep.directive";
import { LoadingOnSideComponent } from '../common/components/loading-on-side.component';
import { MakePaginationComponent } from './components/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    TextMaskModule,
    TagInputModule,
    TabsModule.forRoot(),
  ],
  declarations: [
    BindCustomComponent,
    MakePaginationComponent,
    DataSourceDirective,
    MaskInputDirective,
    UnMaskDirective,
    DateDirective,
    DateTimeDirective,
    CepDirective,
    EditorHtmlDiretive,
    DomElemetAppendDirective,
    MakeGridComponent,
    CepComponent,
    TreeViewComponent,
    NestabaleTreeComponent,
    UploadCustomComponent,
    MultiSelectComponent,
    MultiSelectFunnelComponent,
    DateFormatPipe,
    MaskFormatPipe,
    TagCustomComponent,
    CallerDiretive,
    NestableDirective,
    LoadingOnSideComponent
  ],
  providers: [
  ],
  exports: [
    BindCustomComponent,
    MakePaginationComponent,
    MakeGridComponent,
    CepComponent,
    CepDirective,
    TreeViewComponent,
    NestabaleTreeComponent,
    UploadCustomComponent,
    MultiSelectComponent,
    MultiSelectFunnelComponent,
    TagCustomComponent,
    DataSourceDirective,
    MaskInputDirective,
    UnMaskDirective,
    DateDirective,
    DateTimeDirective,
    EditorHtmlDiretive,
    DomElemetAppendDirective,
    CallerDiretive,
    NestableDirective,
    TextMaskModule,
    TagInputModule,
    TabsModule,
    LoadingOnSideComponent
  ]
})
export class CommonSharedModule {

}
