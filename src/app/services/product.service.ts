// react için axios veya fetch kullanırız, backenddeki dataya ulaşabiliyoruz
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44343/api/';
  
  //sanki classın içinde tanımlanmış gibi kullanabiliriz httpClient'i
  constructor(private httpClient: HttpClient) { }

  //C#'ta erişemiyorduk ama javascriptte httpClient'e erişebiliriz.
  //Gelen datayı ProductResponseModel'e map edecek.
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"//let: sadece bu blokta geçerli olur. C#, Java gibi.
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
}
