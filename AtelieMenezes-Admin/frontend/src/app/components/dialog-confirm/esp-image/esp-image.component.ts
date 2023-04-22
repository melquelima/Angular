import { Observable } from 'rxjs';
import { EspecialidadesService } from './../../../services/especialidades/especialidades.service';
import { Especialidade } from './../../../models/user.model';
import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, ChangeDetectorRef, Output, EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgurServiceService } from 'src/app/services/imgur/imgur-service.service';
import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';
import { DialogConfirmComponent } from '../../dialog-confirm/dialog-confirm.component';
import {MDCRipple} from '@material/ripple';

@Component({
  selector: 'app-esp-image',
  templateUrl: './esp-image.component.html',
  styleUrls: ['./esp-image.component.css']
})
export class EspImageComponent implements OnInit {
  // @Input() src: string="";
  @Input() esp: Especialidade={nome:"",url:"",imagem:""};
  @Output() close = new EventEmitter();
  @ViewChild('image') input: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('fileInput') file: ElementRef<HTMLInputElement> | undefined;

  loading:boolean   = true
  loading2:boolean  = false
  loading3:boolean  = false
  loading4:boolean  = false
  old_title:string  = ""
  old_url:string    = ""

  constructor(
    private imgurService:ImgurServiceService,
    private snackBar:SnackBarService,
    public dialog: MatDialog,
    private especService:EspecialidadesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    
  }

  delete() {
    this.confirm("deseja deletar essa especialidade?").subscribe((decision:boolean)=>{
      if(decision){
        this.loading4 = true
        this.especService.delete(this.esp).subscribe((el:Especialidade)=>{
          this.snackBar.SuccessMessage("Especialdiade deletada com sucesso")
          this.close.emit(null);
          this.loading4 = false
        })
      }
    },err=>{
      this.snackBar.ErrorMessage("Erro ao deletar esta especialidade!")
      this.loading4 = false
    })


    
  }

  ngAfterViewInit() {
    if(this.input && this.esp){
      this.input.nativeElement.style.backgroundImage = this.esp.imagem
      this.old_title = this.esp.nome
      this.old_url = this.esp.url
    }
    this.waitimageLoads()
    this.cdr.detectChanges();
  }

  waitimageLoads():void{
    if(this.input){
      const img = new Image();
      const bgStyle = getComputedStyle(this.input.nativeElement).backgroundImage
      const src = bgStyle.replace(/(^url\()|(\)$|[\"\'])/g, '');
      img.src = src;
      img.onload =  ()=> {
        this.loading = false
      };
      img.onerror=()=>{
        this.loading = false
      }
    }
  }

  changeImage():void{
    if (!this.esp || !this.esp.id) return

    this.confirm("deseja atualizar a imagem?").subscribe((decision:boolean)=>{
      if(decision){
        if (this.file && this.file.nativeElement.files && this.esp.id) {
          this.loading2 = true

          console.log(this.file.nativeElement.files[0])

          this.especService.updateImage(this.file.nativeElement.files[0],this.esp.id).subscribe((response:Especialidade)=>{
            this.snackBar.SuccessMessage("Imagem alterada com sucesso!")
            this.loading2 = false
            this.loading = true
            this.esp = response
            this.waitimageLoads()
          },(e)=>{ 
            this.snackBar.ErrorMessage(e.message)
            this.loading2 = false
            console.log(e)
          });
        }
      }else{
        if(this.file && this.file.nativeElement.files){
          this.file.nativeElement.value = ''
        }
      }
    })

    

     
    // reader.readAsArrayBuffer(inputNode.files[0]);
    
  }


  changeTitle():void{

    this.confirm("deseja atualizar os dados?").subscribe((decision:boolean)=>{
      if(decision){
        this.loading3 = true
        this.especService.update(this.esp).subscribe((response:Especialidade)=>{
          this.esp = response
          this.old_title = response.nome
          this.old_url = response.url
          this.loading3 = false
        },(e)=>{ 
          this.snackBar.ErrorMessage(e.message)
          this.loading3 = false
          this.esp.nome = this.old_title
          this.esp.url = this.old_url
          console.log(e)
        })
      }else{
        this.esp.nome = this.old_title
        this.esp.url = this.old_url
      }
    })

   
  }

  confirm(message:string):Observable<boolean> {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {title:'Alerta',message:message},
    });

    return dialogRef.afterClosed()
  }
}
