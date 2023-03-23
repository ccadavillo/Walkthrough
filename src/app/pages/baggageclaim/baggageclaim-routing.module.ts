import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaggageclaimPage } from './baggageclaim.page';

const routes: Routes = [
  {
    path: '',
    component: BaggageclaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaggageclaimPageRoutingModule {}
