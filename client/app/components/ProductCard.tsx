import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

const addToCart = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);

  if (existingItemIndex >= 0) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to the cart!`);
};

const ProductCard = ({ product }: { product: Product }) => (
  <Card>
    <CardMedia component="img" alt={product.name} height="250" image={product.img} sx={{ objectFit: 'cover' }} />
    <CardContent>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body2" color="textSecondary">{product.description}</Typography>
      <Typography variant="h5">${product.price}</Typography>
      <Button className="mt-3 button-main" variant="contained" fullWidth onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
