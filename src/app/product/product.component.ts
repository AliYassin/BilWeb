import { Component, OnInit } from '@angular/core';
import {Product} from '../Products'
import { ProductService } from "../Services/product.service";


@Component({
  selector: 'app-item',
  templateUrl: './main.html',
  styleUrls: ['./style.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[] = []
  totalPrice: number;
  constructor( private dataSerive: ProductService) { 
    this.products = dataSerive.getProduct();
    this.totalPrice = 0;
  }

  ngOnInit() {
  }
  
  addProduct(productName: string, price: number,count: number){
    if(productName=="" || String(price)=="" || String(count)=="")
      alert("Please enter all the information")
    else if(parseInt(productName)>=0)
      alert("please product name must be a string of character")
    else if(price <= 0 )
     alert("please price must be positive")
    else if(count <=0 )
     alert("please count must be positive")
    else 
    this.products.push(new Product(productName, price,count));
    
  }

  calculatePrice ()
  {
    this.totalPrice = 0;
    this.products.forEach(element => {
    this.totalPrice = Number(this.totalPrice) +Number(element.count)*Number(element.price);
    });
    return this.totalPrice;
  }
    
   removeProduct(product: Product) {
    this.products = this.products.filter(  t => t !== product);
  }

}