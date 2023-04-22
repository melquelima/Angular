import { VarService } from './../../../services/vars/var-service.service';
import { Especialidade, Variavel } from './../../../models/user.model';
import { EspecialidadesService } from './../../../services/especialidades/especialidades.service';
import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { ImgurServiceService } from './../../../services/imgur/imgur-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {
  images:Especialidade[]|undefined
  loading:boolean   = false
  vr:Variavel={name:'',value:''}

  constructor(
    private snackBar:SnackBarService,
    private EspecService:EspecialidadesService,
    private varService:VarService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.EspecService.getAll().subscribe((spec:Especialidade[])=>{
      this.images = spec
      console.log(spec)
    })
    this.varService.getVar("especialidadesDesc").subscribe((vr:Variavel)=>{
      this.vr = vr
    })
  }

  changeDesc():void{
    this.varService.updateVar(this.vr).subscribe((response:Variavel)=>{
      this.vr = response
      this.snackBar.SuccessMessage("Descrição atualizada com sucesso!")
    },(e)=>{ 
      this.snackBar.ErrorMessage(e.message)
      console.log(e)
    })
  }

  addSpec():void{
    this.loading = true
    this.EspecService.add().subscribe((spec:Especialidade)=>{
      this.snackBar.SuccessMessage("Especialidade adcionada com sucesso!")
      this.images?.push(spec)
      this.loading = false
    },(e)=>{ 
      this.snackBar.ErrorMessage(e.message)
      console.log(e)
      this.loading = false
    })
  }

  onClose(el:Especialidade){
    if(this.images){
      this.images = this.images.filter(function(ele){ 
        return ele.id != el.id; 
      });
    }
  
    console.log(this.images)
  }

  confirm(message:string):Observable<boolean> {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {title:'Alerta',message:message},
    });

    return dialogRef.afterClosed()
  }

}
