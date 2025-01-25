// server/src/orders/order.model.ts
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Order extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  cartId: number;

  @Column
  userId: number;

  @Column
  status: string;

  @Column
  totalAmount: number;
}
