import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  modalState?: boolean;
  search?: string;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogBoxComponent, dialogConfig);
  }
}
