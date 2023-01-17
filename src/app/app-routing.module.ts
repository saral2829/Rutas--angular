import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes:Routes =[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
    
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'products',
    component:ProductsComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
