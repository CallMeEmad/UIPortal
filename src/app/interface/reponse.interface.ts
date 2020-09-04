import * as Interface from "../interface/error.interface";
export interface Response
{ 
   errorModel : Interface.Error;
   data : string;
}