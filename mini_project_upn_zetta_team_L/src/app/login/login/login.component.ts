import { Component, OnInit } from '@angular/core';
export interface User {email : string , pass : string}
import {Form, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form : FormGroup 
  hide = true;
  constructor(private fb : FormBuilder ,private router : Router, private Service : LoginService   ) { 
    
    this.form = this.fb.group({
    
      email : [null ,[Validators.required , Validators.email]],
      pass : [null ,[Validators.required,Validators.min(8) ]]
     
    })

  }

  

  ngOnInit(): void {
  }

}
