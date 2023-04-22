import { SnackBarService } from './../../../services/uteis/snack-bar.service';
import { Product } from 'src/app/models/product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/protuct/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { TableDataSource } from './table-datasource';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-table-read',
  templateUrl: './table-read.component.html',
  styleUrls: ['./table-read.component.css']
})
export class TableReadComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Product>;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: TableDataSource;
  
  products:Product[]=[]
  displayedColumns = ['id', 'name','price','action'];

  constructor(
    private ProductService:ProductService,
    private snackBar:SnackBarService,
    public dialog: MatDialog
    ) { 

    this.dataSource = new TableDataSource();

  }

  ngOnInit(): void {
    this.update()
  }

  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator
    this.table.dataSource = this.dataSource
    this.dataSource.sort = this.sort;
  }

  update():void{
    this.ProductService.read().subscribe((products: Product[])=>{
      this.products = products
      this.dataSource.data = this.products
      this.paginator._changePageSize(this.paginator.pageSize);
    })
  }

  deleteProduct(id:string):void{
    this.ProductService.delete(id).subscribe(()=>{
      this.snackBar.SuccessMessage("Item deletado com sucesso!")
      this.update();
    })
  }

  confirm(id:string): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {title:'Alerta',message:"deseja realmente deletar este registro?"},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteProduct(id)
      }
    });
  }

}
