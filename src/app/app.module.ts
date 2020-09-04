import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {PortalComponent} from './portal/portal.component';
import {ReceiptComponent} from './receipt/receipt.component';
import { NotFoundComponent } from './notfound/notfound.component';

// import { BankPortalService } from './service/bank-portal.service';

@NgModule({
  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,
    ConfirmComponent,
    PortalComponent,
    ReceiptComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: []
  
})
export class AppModule { }
