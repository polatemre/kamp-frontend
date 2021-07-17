// react için axios veya fetch kullanırız, backenddeki dataya ulaşabiliyoruz
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44343/api/products/getall';
  
  //sanki classın içinde tanımlanmış gibi kullanabiliriz httpClient'i
  constructor(private httpClient: HttpClient) { }

  //C#'ta erişemiyorduk ama javascriptte httpClient'e erişebiliriz.
  //Gelen datayı ProductResponseModel'e map edecek.
  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
  }
}
