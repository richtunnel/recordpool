// server/src/cartSession/cart-session.model.ts
import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class CartSession extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  cartId: number;

  @Column
  sessionId: string;
}
