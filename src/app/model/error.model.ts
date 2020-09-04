import * as Interface from  "../interface/error.interface";

export class Error implements Interface.Error {
  
    public detail : string;
    public type : string;
    public title : string;
    public status : number;
    public instance : string;
    public errors : string[];
}