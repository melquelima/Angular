import { SelecaoService } from 'src/app/services/selecao/selecao.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album, AlbumClass, picAlbum } from 'src/app/models/user.model';
import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() alb:Album={capa:"",nome:"",pics:[]}
  @Output() close = new EventEmitter();
  loading_del:boolean=false
  loading_image:boolean=false
  loading_update:boolean=false
  loading_list:boolean=false
  albClass:AlbumClass=new AlbumClass(this.alb)

  constructor(
    private selecaoService:SelecaoService,
    private snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.albClass =new AlbumClass(this.alb)
  }

  delete(){
    if(this.alb.nome){
      this.loading_del = true
      this.selecaoService.deleteAlbum(this.alb.nome).subscribe((response:string)=>{
        this.snackBar.SuccessMessage("Album deletado com sucesso!")
        this.close.emit(null);
        this.loading_del = false
      },err=>{
        this.snackBar.ErrorMessage(err.error)
        this.loading_del = false
      })
    }
  }

  checkedList(){
  
    this.loading_list = true
    this.selecaoService.selecteds(this.alb.nome).subscribe((response:picAlbum[])=>{
      var text = ""
      for(var i=0;i<response.length;i++){
        text += response[i].nome + "\n"
      }
      this.donwload(`${this.alb.nome}.txt`,text)
      this.snackBar.SuccessMessage("Seleção baixada com sucesso!")
      this.loading_list = false
    },err=>{
      this.snackBar.ErrorMessage(err.error)
      this.loading_list = false
    })
  }

  donwload(filename:string, data:string) {
    const blob = new Blob([data], {type: 'text/csv'});
    
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    
}


}
