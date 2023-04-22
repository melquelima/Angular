import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/protuct/product.service';
import { SnackBarService } from 'src/app/services/uteis/snack-bar.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:Product = {
    name:'',
    price:0
  }


  constructor(
    private productService: ProductService,
    private router:Router,
    private snackBar : SnackBarService) { }

  ngOnInit(): void {
    
  }

  createProduct():void{
    this.productService.create(this.product).subscribe(()=>{
      this.snackBar.SuccessMessage("Produto Salvo com sucesso!")
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
