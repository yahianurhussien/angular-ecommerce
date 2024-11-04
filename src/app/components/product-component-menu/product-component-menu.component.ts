import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-component-menu',
  templateUrl: './product-component-menu.component.html',
  styleUrls: ['./product-component-menu.component.css']
})
export class ProductComponentMenuComponent implements OnInit {

  productCategories: ProductCategory[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }
  listProductCategories() {
   this.productService.getProductCategories().subscribe(
         data => {
      console.log('Product categories='+ JSON.stringify(data));
      this.productCategories = data;
    }
   );
  }

}
