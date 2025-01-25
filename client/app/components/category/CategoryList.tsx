import React, { useEffect, useState } from "react";
import { LoaderFunction } from "@remix-run/node";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import "../styles/products.css";
import SwipeCatNew from "../swipeable-card/SwipeCatNew";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img?: string;
}

const products: Product[] = [
  { id: 1, name: "Album 1", description: "Description of Album 1", price: 9.99, img: "assets/images/album-art/album-art.png" },
  { id: 2, name: "Album 2", description: "Description of Album 2", price: 12.99, img: "assets/images/album-art/album-art.png" },
  { id: 3, name: "Album 3", description: "Description of Album 3", price: 15.99, img: "assets/images/album-art/album-art.png" },
  { id: 4, name: "Album 5", description: "Description of Album 5", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 5, name: "Album 6", description: "Description of Album 6", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 6, name: "Album 7", description: "Description of Album 7", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 7, name: "Album 8", description: "Description of Album 8", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 8, name: "Album 9", description: "Description of Album 9", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 9, name: "Album 10", description: "Description of Album 10", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 10, name: "Album 11", description: "Description of Album 11", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 11, name: "Album 12", description: "Description of Album 12", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 12, name: "Album 13", description: "Description of Album 13", price: 20.99, img: "assets/images/album-art/album-art.png" },
];

export let loader: LoaderFunction = () => {
  return products;
};

const SwipeableCardList: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Number of slides to scroll
    draggable: true, // Enable mouse drag for horizontal scrolling
    arrows: true, // Show arrows for navigation
    swipe: true, // Enable swipe gestures
    touchMove: true, // Allow touch interaction
    responsive: [
      {
        breakpoint: 1024, // For screen sizes <= 1024px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // For screen sizes <= 768px
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const addToCart = (product: Product) => {
    const cart = JSON.parse(window.localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    window.localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${product.name} added to the cart!`);
  };

  if (!isClient) {
    return null;
  }

  return (
    <Container className="swipeable-card-list">
      <h2 className="text-white h3" style={{ marginBottom: "1rem" }}>
        Gymcore
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="product-card-container" key={product.id}>
            <Card sx={{ margin: "0 10px" }}>
              <CardMedia component="img" alt={product.name} height="200" image={product.img} sx={{ objectFit: "cover" }} />
              <CardContent>
                <h6>{product.name}</h6>
                <p style={{ marginBottom: "0.25rem", color: "darkgray" }}>{product.description}</p>
                <h5 style={{ marginBottom: "0.25rem", fontSize: "0.875rem" }}>${product.price}</h5>
                <Button variant="contained" fullWidth onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
      <h2 className="text-white h3" style={{ marginBottom: "1rem" }}>
        Pop
      </h2>

      <SwipeCatNew />
    </Container>
  );
};

export default SwipeableCardList;
