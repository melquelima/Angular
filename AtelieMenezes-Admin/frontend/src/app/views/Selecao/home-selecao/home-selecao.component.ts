import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { Auth } from 'src/app/models/user.model';
import { AuthService } from './../../../services/auth/auth.service';
import { Album, picAlbum } from './../../../models/user.model';
import { SelecaoService } from './../../../services/selecao/selecao.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SelectedPip } from './selecteds-pipe';

@Component({
  selector: 'app-home-selecao',
  templateUrl: './home-selecao.component.html',
  styleUrls: ['./home-selecao.component.css']
})
export class HomeSelecaoComponent implements OnInit {
  loading:boolean=false
  loading_image:boolean=true
  album:Album={nome:"",capa:"",pics:[]}
  tabs = ['Todas', 'Selecionadas'];
  selected = new FormControl(0);

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
        console.log(alb)
      },err=>{
        this.router.navigate(["/selecao/notfound"])
      })
    }else{
      this.router.navigate(["/selecao/notfound"])
    }
  }

}


