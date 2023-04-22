import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';
import { UsersService } from './../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  user:User={
    name:'',
    password:''
  }
  confirm:string='';

  constructor(
    private userService:UsersService,
    private snackBar:SnackBarService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  createAccount():void{
    if(this.user.name.trim() === ""){
      return this.snackBar.ErrorMessage("Insira um usuario")
    }
    if(this.user.password != this.confirm || this.user.password.trim() === '' || this.confirm.trim() === ''){
      return this.snackBar.ErrorMessage("Senhas nao coincidem ou estão vazias!")
    }

    this.userService.getByName(this.user.name).subscribe((users:User[])=>{
      if(users.length){
        return this.snackBar.WarningMessage("Usuário já cadastrado!")
      }else{
        this.save()
      }
      console.log(users)
    })
  }

  save():void{
    this.userService.create(this.user).subscribe(()=>{
      this.snackBar.SuccessMessage("Usuario criado com sucesso")
      this.router.navigate(["/login"])
    })
  }

}
