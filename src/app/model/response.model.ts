import * as Interface from "../interface/reponse.interface";
import * as Implemention from "../model/error.model";

export class ResponseModel implements Interface.Response
{ 
    public errorModel : Implemention.Error;
    public data : string;
}