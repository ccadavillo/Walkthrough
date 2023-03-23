import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketlobbyPageRoutingModule } from './ticketlobby-routing.module';

import { TicketlobbyPage } from './ticketlobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketlobbyPageRoutingModule
  ],
  declarations: [TicketlobbyPage]
})
export class TicketlobbyPageModule {}
