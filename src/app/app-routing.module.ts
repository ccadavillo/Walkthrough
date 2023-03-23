import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ticketlobby',
    loadChildren: () => import('./pages/ticketlobby/ticketlobby.module').then( m => m.TicketlobbyPageModule)
  },
  {
    path: 'baggageclaim',
    loadChildren: () => import('./pages/baggageclaim/baggageclaim.module').then( m => m.BaggageclaimPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
