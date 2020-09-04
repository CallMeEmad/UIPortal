import { Injectable } from '@angular/core';


import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreditCardService } from "./credit-card.service";

import * as ErrorInterface from '../interface/error.interface';
import * as ResponseInterface from '../interface/reponse.interface';

import * as ErrorModel from '../model/error.model';
import * as ResponseModel from '../model/response.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BankPortalService {

  mainUrl : string; 
  public constructor(private httpClient : HttpClient , private creditCard : CreditCardService){
      this.mainUrl = 'http://localhost:51390/api/BankPortal'
  }

  public Validate() : Observable<ResponseInterface.Response>  {

   
      let requestUrl : string = this.mainUrl + "/ReadyForTransfer";
      
      let data = 
      {
          CardNumber : this.creditCard.CreditCardInfo.CardNumber,
          DestinationCardNumber : this.creditCard.CreditCardInfo.DestinationCardNumber,
          CVV2 : this.creditCard.CreditCardInfo.CVV2,     
          ExpireMonth : this.creditCard.CreditCardInfo.ExpireMonth,
          ExpireYear : this.creditCard.CreditCardInfo.ExpireYear,
          Amount : this.creditCard.CreditCardInfo.Amount.toString()
      }

     return this.httpClient.post<ResponseInterface.Response>(requestUrl,data,httpOptions).pipe();
  }
}
