import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { Auth } from 'src/app/models/user.model';
import { AuthService } from './../../../services/auth/auth.service';
import { Album } from './../../../models/user.model';
import { SelecaoService } from './../../../services/selecao/selecao.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-selecao',
  templateUrl: './login-selecao.component.html',
  styleUrls: ['./login-selecao.component.css']
})
export class LoginSelecaoComponent implements OnInit {
  @ViewChild('image') image: ElementRef<HTMLInputElement> | undefined;
  loading:boolean=false
  loading_image:boolean=true
  album:Album={nome:"",capa:"",pics:[]}
  password:string=""


  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private selecaoService:SelecaoService,
    private authService:AuthService,
    private snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
    this.encontraAlbum()
  }

  encontraAlbum():void{
    const alb = this.route.snapshot.paramMap.get('alb')
    if(alb){
      this.selecaoService.getAlbum(alb).subscribe((alb:Album)=>{
        this.album = alb
        this.image?.nativeElement
        this.waitimageLoads()
      },err=>{
        this.router.navigate(["/selecao/notfound"])
      })
    }else{
      this.router.navigate(["/selecao/notfound"])
    }
  }

  login():void{
    this.loading = true
    this.authService.loginAlbum(this.album.nome,this.password).subscribe((response:Auth)=>{
      this.loading = false
      window.localStorage.setItem('token',response.token)
      this.snackBar.SuccessMessage("Login efetuado com sucesso!")
      this.router.navigate([`/selecao/${this.album.nome}`])
    },err=>{
      this.loading = false
      if(err.status == 401){
        return this.snackBar.ErrorMessage("Login e/ou senha incorretos!");
      }
      this.snackBar.ErrorMessage(err.message);
    })


  }



  waitimageLoads():void{
    if(this.image){
      const img = new Image();
      img.src = `https://imgur.com/${this.album.capa}.jpg`
      img.onload =  ()=> {
        this.loading_image = false
      };
      img.onerror=()=>{
        this.loading_image = false
      }
    }
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
