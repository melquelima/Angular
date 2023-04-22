import { Router } from '@angular/router';
import { SelecaoService } from 'src/app/services/selecao/selecao.service';
import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';
import { ImgurServiceService } from 'src/app/services/imgur/imgur-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css']
})
export class AlbumAddComponent implements OnInit {
  @ViewChild('fileInput') file: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('inputFile') file2: ElementRef<HTMLInputElement> | undefined;
  loading:boolean = false
  loading_capa:boolean = false
  albImage:string=""
  images:any = ''
  progress:number=0
  nome:string=''
  subscribe:any
  senha:string=""
  
  constructor(
    private imgurService:ImgurServiceService,
    private snackBar:SnackBarService,
    private selecaoService:SelecaoService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  selectImages():void{
    if(this.file2 && this.file2.nativeElement.files){
      this.images = this.file2.nativeElement.files
    }
  }

  uploadImage():void{
    if(this.file && this.file.nativeElement.files){
      this.loading_capa=true
      this.imgurService.upload(this.file.nativeElement.files[0]).subscribe((response:any)=>{
        this.albImage = response["data"]["id"]
        this.waitimageLoads(this.albImage,"loading_capa")
      },err=>{
        this.loading_capa=false
        this.snackBar.ErrorMessage(err.error)
      })
    }
  }

  newAlbum():void{
    this.selecaoService.newAlbum(this.nome,this.senha,this.albImage,this.images).subscribe((a:string)=>{
      // console.log(a)
      this.waitAlbmLoads(a)
    },err=>{
      this.snackBar.ErrorMessage(err.error)
    })
  }


  waitAlbmLoads(id:string):void{
    console.log(id)
  
    this.subscribe = interval(1000).subscribe((func => {
      this.selecaoService.progress(id).subscribe((a:any)=>{
        console.log(a)
        this.progress = a.progress*100
        if(a.status != "PROCESSING"){
          this.subscribe.unsubscribe()
          this.progress = 0
        }
        if(a.status == "DONE"){
          this.snackBar.SuccessMessage("ALBUM CARREGADO COM SUCESSO!")
          this.router.navigate(["/albuns"])
        }
        if(a.status == "ERROR"){
          this.snackBar.ErrorMessage(a.message)
          this.subscribe.unsubscribe()
        }
      })
    }),err=>{
      this.snackBar.ErrorMessage(err.error)
      this.subscribe.unsubscribe()
    })

   

    


  }





  waitimageLoads(image:string,loading:string):void{

    const img = new Image();
    img.src = `https://imgur.com/${image}.jpg`
    img.onload =  ()=> {
      eval(`this.${loading} = false`)
    };
    img.onerror=()=>{
      eval(`this.${loading} = false`)
    }
    
  }

}
