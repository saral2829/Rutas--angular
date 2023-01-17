import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  productId:string | null =null;
  constructor( private route: ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=> {
      this.productId=params.get('id')
      console.log(this.productId)
    })

    console.log(this.productService.getAllProducts());
  }

 

}
