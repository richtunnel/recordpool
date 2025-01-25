// server/src/cart/cart.model.ts
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Cart extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  userId: number;

  @Column
  totalAmount: number;

  @Column
  status: string;
}
