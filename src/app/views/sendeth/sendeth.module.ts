import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import {HttpModule} from '@angular/http';

import { SendethComponent } from './sendeth.component';
import { SendethRoutingModule } from './sendeth-routing.module';
import { EthcontractService } from './ethcontract.service';

// import { EthcontractService } from './ethcontract.service';


@NgModule({
  imports: [
    FormsModule,
    SendethRoutingModule,
    // ChartsModule,
    // BsDropdownModule,
    // ButtonsModule.forRoot()
    // EthcontractService
  ],
  declarations: [SendethComponent]
  // providers: [EthcontractService]
})
export class SendethModule { }
