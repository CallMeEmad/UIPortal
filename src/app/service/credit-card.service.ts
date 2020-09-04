import { Injectable } from '@angular/core';
import * as Interface from "../interface/credit-card-info.interface"
import * as model from "../model/credit-card-info.model";


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor() { 
    this.CreditCardInfo  =new model.CreditCardInfo();
  }
  public CreditCardInfo : Interface.CreditCardInfo;

}
