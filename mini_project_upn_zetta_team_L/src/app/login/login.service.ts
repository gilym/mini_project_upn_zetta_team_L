export interface User {email : string , pass : string}
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
    providedIn :'root'
})
export class LoginService{
   
public users$ :User [] = [
    {email : 'gilang@marinta.com' , pass : '12345678' },
    {email : 'dzaki@marinta.com' , pass : '321321321' },
    {email : 'diyah@marinta.com' , pass : '456456456' },
]


constructor(){
    
}
}