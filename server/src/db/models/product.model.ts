// server/src/db/models/product.model.ts
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  product_name: string;

  @Column
  price: number;

  @Column
  description: string;

  @Column
  stock: number;
}
