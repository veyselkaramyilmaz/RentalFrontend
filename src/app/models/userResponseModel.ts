import { ResponseModel } from "./responseModule";
import { User } from "./user";

export interface UserResponseModel extends ResponseModel{
    data:User[]
}