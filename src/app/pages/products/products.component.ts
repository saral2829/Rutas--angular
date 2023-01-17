import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[
    {
      id:1,
      name:"Mu;eco",
      description:"tela de algodon, marca mattel",
      price:100
    },
    {
      id:2,
      name:"Xbox",
      description:"edicion 2022",
      price:1000
    }
  ]
  productId:string | null =null;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=> {
      this.productId=params.get('id')
      console.log(this.productId)
    })
  }

}
