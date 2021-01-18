import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService} from '../../servicios/api/api.service';

import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm =new FormGroup({
      correoElectronico : new FormControl('',Validators.required),
      clave : new FormControl('',Validators.required)
  })
  constructor( private api:ApiService, private router:Router){}

  errorStatus:boolean= false;
  errorMsj:any = "";

  ngOnInit(): void{
  }

  onLogin(form:LoginI){
    //console.log(form);
    this.api.loginByEmail(form).subscribe(data =>{
      //console.log(data);  
      let dataResponse:ResponseI = data;
      if(dataResponse.ok){
        localStorage.setItem("token",dataResponse.token);
        this.router.navigate(['inicioAlumno'])
      }else{
        this.errorStatus =true;
        this.errorMsj = dataResponse.errores;
        
      }
    })
    
  }
}
