import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { PortPic, Variavel } from './../../../models/user.model';
import { PortfolioService } from './../../../services/portfolio/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Portfolio } from 'src/app/models/user.model';
import { VarService } from 'src/app/services/vars/var-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);
  portfolios:Portfolio[]|undefined
  loading:boolean=false

  constructor(
    private portService:PortfolioService,
    private snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    this.portService.getPortfolios().subscribe((lista:Portfolio[])=>{
      this.portfolios = lista
    })
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  changeDesc(id_port:number,desc:string):void{
    this.portService.updateDesc(id_port,desc).subscribe((response:Variavel)=>{
      this.snackBar.SuccessMessage("Descrição atualizada com sucesso!")
    },(e)=>{ 
      this.snackBar.ErrorMessage(e.message)
      console.log(e)
    })
  }

  portAddEmptyImage(id_prt:number):void{
    this.loading = true
    this.portService.portAddEmptyImage(id_prt).subscribe((response:string)=>{
      this.refresh()
      this.loading = false
    },err=>{
      this.snackBar.ErrorMessage(err.error)
      this.loading = false
    })
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  orderToLeft(idx_prt:number,idx_pic:number){
    if(this.portfolios && idx_pic > 0){
      this.refresh()
    }
    
  }
  orderToRigth(idx_prt:number,idx_pic:number){
    if(this.portfolios){
      if(idx_pic != this.portfolios[idx_prt].pics.length-1){
        this.refresh()
      }
    }

  }

  array_move(arr: any[], old_index: number, new_index: number) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

}
