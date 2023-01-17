import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  category:Category[]=[  
    {
      id:'1',
      name:'Electrónicos',
      description:'laptops, pc, celulares ',
      
    },
    {
      id:'2',
      name:'Videojuegos',
      description:'X-box, playStation, wii',
      
    }  ,
    {
      id:'3',
      name:'Audifonos',
      description:'parlantes, auriculares',
    
    } 

]


createCategory(category:Category){
  this.category.push(category)
}

getAllCategories(){
  return this.category;
}

getCategoryById(id:string){
  return this.category.find(category => category.id === id)
}
  constructor() { }
}
