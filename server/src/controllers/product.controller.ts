// server/src/product/product.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from '../services/product.services';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productService.findProductById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
}
