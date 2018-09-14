import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { SendethComponent } from './sendeth.component';

const routes: Routes = [
  {
    path: '',
    component: SendethComponent,
    data: {
      title: 'Sendeth'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendethRoutingModule { }
