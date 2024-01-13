import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  productForm = new FormGroup({
    product_name: new FormControl(''),
    product_price: new FormControl(''),
    product_image: new FormControl(''),
    product_description: new FormControl(''),
  });

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  onSubmitForm() {
    console.log(this.productForm.value);
    // this.productsService.addProduct(this.productForm.value);
  }
}
