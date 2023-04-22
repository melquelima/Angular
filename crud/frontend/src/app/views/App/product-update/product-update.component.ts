import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';
import { ProductService } from 'src/app/services/protuct/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/components/dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product={
    name:'',
    price:0
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: SnackBarService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.validateId()
  }
  
  validateId():void{
    const id =  this.route.snapshot.paramMap.get('id')
    if(id){
      this.productService.readById(id).subscribe((product:Product)=>{
        this.product = product
      },error=>{
        this.router.navigate(["/products"])
        this.snackBar.ErrorMessage(`Product id:${id} not found`)
      })
    }else{
      this.router.navigate(["/products"])
      this.snackBar.ErrorMessage(`Product id:${id} not found`)
    }
  }


  save():void{
    this.confirm()
  }

  updateProduct():void{
    this.productService.update(this.product).subscribe(()=>{
      this.snackBar.SuccessMessage("Produto alterado com sucesso!")
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

  confirm(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {title:'Alerta',message:"deseja realmente salvar as alterações?"},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateProduct()
      }
    });
  }

}
