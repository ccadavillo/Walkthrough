import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BaggageclaimPageRoutingModule } from './baggageclaim-routing.module';

import { BaggageclaimPage } from './baggageclaim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaggageclaimPageRoutingModule,
  ],
  declarations: [BaggageclaimPage]
})
export class BaggageclaimPageModule {}
