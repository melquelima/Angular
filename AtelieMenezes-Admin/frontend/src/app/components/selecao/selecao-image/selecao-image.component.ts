import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { SelecaoService } from 'src/app/services/selecao/selecao.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { picAlbum } from 'src/app/models/user.model';

@Component({
  selector: 'app-selecao-image',
  templateUrl: './selecao-image.component.html',
  styleUrls: ['./selecao-image.component.css']
})
export class SelecaoImageComponent implements OnInit {
  @ViewChild('picture') pic: ElementRef<HTMLInputElement> | undefined;
  @Input() image:picAlbum={id_album:0,imagem:"",checked:false,nome:""}
  @Input() show:boolean=true
  loading_image:boolean=true
  loading_status:boolean=false

  constructor(
    private selecaoService:SelecaoService,
    private snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
    console.log(this.image.checked)
    this.waitimageLoads()
    this.pic?.nativeElement
  }

   check(val:boolean):void{
    if(this.image.id){
      this.loading_status = true
      this.selecaoService.checkImage(this.image.id_album,this.image.id,val).subscribe(a=>{
        this.loading_status = false
        this.image.checked = val
        if (val){
          this.snackBar.SuccessMessage("Imagem selecionada!")
        }else{
          this.snackBar.WarningMessage("Imagem retirada da selecao!")
        }
      },err=>{
        this.loading_status = false
        this.snackBar.ErrorMessage(err.error)
      })
    }
  }


  waitimageLoads():void{
    const img = new Image();
      img.src = `https://imgur.com/${this.image.imagem}.jpg`
      img.onload =  ()=> {
        this.loading_image = false
      };
      img.onerror=()=>{
        this.loading_image = false
      }
    }
}
