import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/user.model';
import { SelecaoService } from 'src/app/services/selecao/selecao.service';
import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';


@Component({
  selector: 'app-album-home',
  templateUrl: './album-home.component.html',
  styleUrls: ['./album-home.component.css']
})
export class AlbumHomeComponent implements OnInit {

  loading:boolean = false
  albuns:Album[]=[]

  constructor(
    private selecaoService:SelecaoService,
    private snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
    this.selecaoService.getAlbums().subscribe((albs:Album[])=>{
      this.albuns = albs
    },err=>{
      this.snackBar.ErrorMessage(err.error)
    })
  }

  save(filename:string, data:string) {
    const blob = new Blob([data], {type: 'text/csv'});
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;        
    document.body.appendChild(elem);
    elem.click();        
    document.body.removeChild(elem);
}

  delete():void{
    
  }



}


