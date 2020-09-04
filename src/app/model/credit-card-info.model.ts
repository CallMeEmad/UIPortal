import * as Interface from "../interface/credit-card-info.interface";
export class CreditCardInfo implements Interface.CreditCardInfo{
  
    public  CardNumber : number 
    public  DestinationCardNumber : number;
    public  CVV2 : number;
    public  Amount:string;
    public  ExpireYear :number;
    public  ExpireMonth : number;
}