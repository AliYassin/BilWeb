import { Injectable } from '@angular/core';
import {Product } from '../Products'
@Injectable()
export class ProductService {

  constructor() { }

  getProduct() {
    const Product: Product[] = [];
    return Product;
  }

}