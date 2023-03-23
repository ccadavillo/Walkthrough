import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketlobbyPage } from './ticketlobby.page';

const routes: Routes = [
  {
    path: '',
    component: TicketlobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketlobbyPageRoutingModule {}
