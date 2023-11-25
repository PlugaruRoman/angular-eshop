import { createAction, props } from '@ngrx/store';
import { Product } from '../models/products';

export const getProducts = createAction(
  '[Products] Get Products',
  props<Product>()
);

export const getProduct = createAction(
  '[Products] Get Product',
  props<Product>()
);
