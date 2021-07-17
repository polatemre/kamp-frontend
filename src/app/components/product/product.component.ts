import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService: ProductService) {}

  // Component ilk açıldığında çalışan fonksiyon
  ngOnInit(): void {
    this.getProducts();
  }

  // Eğer yazdığımız servis ile ilgili component bazlı kurallar varsa subscribe'ı component'e geçiririz.
  // Ama yoksa subscribe'ı direk serviste yazarız.
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
