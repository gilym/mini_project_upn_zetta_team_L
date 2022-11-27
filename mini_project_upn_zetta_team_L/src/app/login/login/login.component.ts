import { Component, OnInit } from '@angular/core';
export interface User {email : string , pass : string}
import {Form, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form : FormGroup 
  hide = true;
  public users : User[]=[]
  temp :any
  constructor(private fb : FormBuilder ,private router : Router, private Service : LoginService   ) { 
    this.users = this.Service.users$
    
    this.form = this.fb.group({
    
      email : [null ,[Validators.required , Validators.email]],
      pass : [null ,[Validators.required,Validators.min(8) ]]
     
    })
   console.log(this.users);
   
    

  

  }

  

  ngOnInit(): void {
  }

  login() : void{
    const val = this.form.value
    let cek = true
    
  for (let index = 0; index < this.users.length; index++) {
    if (val.email== this.users[index].email && val.pass== this.users[index].pass ) {
      console.log("login berhasil");    
      Swal.fire(
        'Good job!',
        'success'
      )
      cek = true
      
      setTimeout(() => {
       
        this.router.navigate(['..','home'])
      }, 1500)
      
      break
    }
    else{
      cek = false
    }
    
  }
  if(cek==false){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email atau password salah'
    })
  }

  }

  pindah() : void{
    this.router.navigate(['home'])
    console.log("pindah");
    
  }

}
