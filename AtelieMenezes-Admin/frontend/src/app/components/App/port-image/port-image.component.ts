import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { PortPic } from './../../../models/user.model';
import { Component, ElementRef, EventEmitter,AfterViewInit, Input, OnInit, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-port-image',
  templateUrl: './port-image.component.html',
  styleUrls: ['./port-image.component.css']
})
export class PortImageComponent implements OnInit {
  loading_image:boolean=true
  loading_left:boolean=false
  loading_right:boolean=false
  loading_del:boolean=false
  loading_update:boolean=false
  @Output() left = new EventEmitter();
  @Output() right = new EventEmitter();
  @Output() close = new EventEmitter();
  @Input() portImage:PortPic={id_portfolio:0,imagem:"",order:0}
  @ViewChild('fileInput') file: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('image') input: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private portService:PortfolioService,
    private snackBar:SnackBarService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.waitimageLoads()
    //this.cdr.detectChanges();
  }

  onRight():void{
    this.right.emit(null);
  }

  // changeImage():void{
  //   if (!this.esp || !this.esp.id) return

  //   this.confirm("deseja atualizar a imagem?").subscribe((decision:boolean)=>{
  //     if(decision){
        
  //     }else{
  //       if(this.file && this.file.nativeElement.files){
  //         this.file.nativeElement.value = ''
  //       }
  //     }
  //   })
  // }

  waitimageLoads():void{
    if(this.input){
      const img = new Image();
      const bgStyle = getComputedStyle(this.input.nativeElement).backgroundImage
      const src = bgStyle.replace(/(^url\()|(\)$|[\"\'])/g, '');
      img.src = `https://imgur.com/${this.portImage.imagem}.jpg`
      img.onload =  ()=> {
        this.loading_image = false
      };
      img.onerror=()=>{
        this.loading_image = false
      }
    }
  }

  updateImage():void{
    if (this.file && this.file.nativeElement.files && this.portImage.id) {
      this.loading_update = true

      console.log(this.file.nativeElement.files[0])

      this.portService.updateImage(this.file.nativeElement.files[0],this.portImage.id_portfolio,this.portImage.id).subscribe((response:PortPic)=>{
        this.snackBar.SuccessMessage("Imagem alterada com sucesso!")
        this.loading_update = false
        this.loading_image = true
        this.portImage = response
        this.waitimageLoads()
      },(e)=>{ 
        this.snackBar.ErrorMessage(e.message)
        this.loading_update = false
        console.log(e)
      });
    }
  }

  orderToLeft(){
    if(this.portImage.id){
      this.loading_left = true
      this.portService.toLeft(this.portImage.id_portfolio,this.portImage.order).subscribe((response:string)=>{
        this.left.emit(null);
        this.loading_left = false
      },err=>{
        this.snackBar.ErrorMessage(err.message)
        this.loading_left = false
      })
    }
  }
  orderToRight(){
    if(this.portImage.id){
      this.loading_right = true
      this.portService.toRight(this.portImage.id_portfolio,this.portImage.order).subscribe((response:string)=>{
        this.right.emit(null);
        this.loading_right = false
      },err=>{
        this.snackBar.ErrorMessage(err.message)
        this.loading_right = false
      })
    }
  }

  portDeleteImage():void{
    if(this.portImage.id){
      this.loading_del = true
      this.portService.portDelImage(this.portImage.id_portfolio,this.portImage.id).subscribe((response:string)=>{
        this.loading_del = false
        this.close.emit(null);
      },err=>{
        this.snackBar.ErrorMessage(err.error)
        console.log(err)
        this.loading_del = false
      })
    }
  }

}
