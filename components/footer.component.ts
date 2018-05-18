import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="gc-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            Copyright ©SmartSecretary 2017. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>`,

})
export class FooterComponent  implements OnInit {
    
    constructor () { }   


    ngOnInit() {

    }

}
