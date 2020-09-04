import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

 import { BankPortalService } from "../service/bank-portal.service";
 import { CreditCardService } from "../service/credit-card.service";
 import * as models from "../model/response.model";


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private service : BankPortalService , public creditCard : CreditCardService, public router: Router) {

    this.messages = [
      'رقم هفتم شماره کارتها باید عدد 3 باشد',
      'کد اعتبار سنجی باید 3 یا 4 رقم باشد',
      'ماه انقضا باید 2 رقمی و عددی معتبر باشد (0 تا 12)',
      'سال انقضا باید 2 رقمی و عددی معتبر باشد و نباید از سال جاری کمتر باشد',
      'مبلغ انتقال باید حداقل 10 هزار تومان و حداکثر 3 میلیون تومان باشد'];
  }
  ngOnInit(): void {}

  public messages: string[];
  public errorMessages : string[];

  
  public MoneyTransfer(): void {
 
    this.service.Validate().
    subscribe(result =>{
      var response = result;
 
      if (response.errorModel.errors?.length>0){
        this.errorMessages = response.errorModel.errors;
        console.log(this.errorMessages.length);
      }else{
        this.router.navigate(['/confirm']);
      }
    },
    error=>{
      console.log(error);
    }
    ,
    ()=>{
      console.log("complete");
    }
    ); 

  }

   public FadeOutError (errorIndex : number) : void {
     this.errorMessages.splice(errorIndex,1);
   }
}
