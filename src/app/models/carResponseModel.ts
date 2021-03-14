import { Car } from "./car";
import { ResponseModel } from "./responseModule";


export interface CarResponseModel extends ResponseModel{
    data:Car[],
    
}