import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  imageUrl: string;
}
