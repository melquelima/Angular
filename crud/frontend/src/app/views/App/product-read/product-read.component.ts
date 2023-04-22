import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate():void{
    this.router.navigate(['/products/create'])
  }

}
