import { Router } from '@angular/router';
import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Auth, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User={
    userName:'',
    password:''
  }
  loading:boolean=false;

  constructor( 
    private AuthService:AuthService,
    private SnackBarService:SnackBarService,
    private Router: Router
  ) { }

  ngOnInit(): void {
  }

  login():void{
    this.AuthService.login(this.user).subscribe((Auser:Auth)=>{
      window.localStorage.setItem('token',Auser.token)
      this.SnackBarService.SuccessMessage("Login efetuado com sucesso!")
      this.Router.navigate(['/'])
    },(err=>{
      if(err.status == 401){
        return this.SnackBarService.ErrorMessage("Login e/ou senha incorretos!");
      }
      console.log(err)
      this.SnackBarService.ErrorMessage(err.error);
    }))
    console.log(this.user)
  }
}
