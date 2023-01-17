import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Product[]=[  
      {
        id:'1',
        name:'laptop',
        description:'Equipo tech ',
        price:100,
      },
      {
        id:'2',
        name:'Xbox',
        description:'edicion 2022',
        price:2000,
      }  ,
      {
        id:'3',
        name:'celular',
        description:'Samsung',
        price:1500
      } 

  ]
  constructor() { }

  createProduct(product:Product){
    this.products.push(product)
  }

  getAllProducts(){
    return this.products;
  }

  getProductById(id:string){
    return this.products.find(product => product.id === id)
  }
}
