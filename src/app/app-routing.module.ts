import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConfirmComponent} from './confirm/confirm.component';
import {PortalComponent} from './portal/portal.component';
import {ReceiptComponent} from './receipt/receipt.component';
import { NotFoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/portal',
    pathMatch:'full'

  },
 {
   path:'portal',
   component: PortalComponent  
 },
 {
   path:'confirm',
   component:ConfirmComponent
 },
 {
   path:'receipt',
   component:ReceiptComponent
 },
 {
   path:'**',
   component:NotFoundComponent
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

 