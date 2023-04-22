import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelecaoService } from 'src/app/services/selecao/selecao.service';
import { Album } from 'src/app/models/user.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {
  album:Album={nome:"",capa:"",pics:[]}
  loading:boolean = false
  selected = new FormControl(0);
  
  constructor(
    private route:ActivatedRoute,
    private selecaoService:SelecaoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.encontraAlbum()
  }

  encontraAlbum():void{
    const alb = this.route.snapshot.paramMap.get('alb')
    if(alb){
      this.selecaoService.getAlbum(alb).subscribe((alb:Album)=>{
        this.album = alb
        // this.image?.nativeElement
        // this.waitimageLoads()
      },err=>{
        this.router.navigate(["/albuns/notfound"])
      })
    }else{
      this.router.navigate(["/albuns/notfound"])
    }
  }

}
