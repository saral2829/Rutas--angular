import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    path: 'products/:id',
    component:ProductsComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',
    component:NotFoundComponent
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
