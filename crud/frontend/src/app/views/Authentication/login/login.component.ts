import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User={
    name:'',
    password:''
  }
  loading:boolean=false;

  constructor(
    private userService:UsersService,
    private snackBar:SnackBarService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login():void{
    if(this.user.name.trim() === ""){
      return this.snackBar.ErrorMessage("Insira um usuario")
    }
    if(this.user.password.trim() === ''){
      return this.snackBar.ErrorMessage("Insira uma senha!")
    }

    this.loading = true

    this.userService.getByName(this.user.name).subscribe((users:User[])=>{
      this.loading = false
      if(users.length && users[0].password === this.user.password){
        window.localStorage.setItem("token","123")
        this.snackBar.SuccessMessage("HEHEHE FOI")
        this.router.navigate([""])
      }else{
        return this.snackBar.ErrorMessage("Login ou senha incorretos")
      }
      
    })
  }

}
