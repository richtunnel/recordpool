import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  fullName!: string;

  @Column
  email!: string;

  @Column
  phone!: string;

  @Column
  password!: string;

  @Column
  cartId!: number;

  @Column
  cartSession!: string;

  @Column
  admin!: boolean;

  @Column
  mode!: string;
}
