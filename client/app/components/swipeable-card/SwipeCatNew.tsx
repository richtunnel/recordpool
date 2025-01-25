import React, { useEffect, useState } from "react";
import { LoaderFunction } from "@remix-run/node";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import "../../styles/products.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img?: string;
}

const products: Product[] = [
  { id: 1, name: "Album 1", description: "Description of Album 1", price: 9.99, img: "assets/images/album-art/album-art-03.png" },
  { id: 2, name: "Album 2", description: "Description of Album 2", price: 12.99, img: "assets/images/album-art/album-art-04.png" },
  { id: 3, name: "Album 3", description: "Description of Album 3", price: 15.99, img: "assets/images/album-art/album-art.png" },
  { id: 4, name: "Album 5", description: "Description of Album 5", price: 20.99, img: "assets/images/album-art/album-art-03.png" },
  { id: 5, name: "Album 6", description: "Description of Album 6", price: 20.99, img: "assets/images/album-art/album-art-05.jpg" },
  { id: 6, name: "Album 7", description: "Description of Album 7", price: 20.99, img: "assets/images/album-art/album-art-01.jpg" },
  { id: 7, name: "Album 8", description: "Description of Album 8", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 8, name: "Album 9", description: "Description of Album 9", price: 20.99, img: "assets/images/album-art/album-art-04.png" },
  { id: 9, name: "Album 10", description: "Description of Album 10", price: 20.99, img: "assets/images/album-art/album-art-02.png" },
  { id: 10, name: "Album 11", description: "Description of Album 11", price: 20.99, img: "assets/images/album-art/album-art-03.png" },
  { id: 11, name: "Album 12", description: "Description of Album 12", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 12, name: "Album 13", description: "Description of Album 13", price: 20.99, img: "assets/images/album-art/album-art-02.png" },
];

export let loader: LoaderFunction = () => {
  return products;
};

const SwipeCatNew: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const handleMouseEnter = (id: number) => {
    const timer = setTimeout(() => {
      setHoveredCard(id);
    }, 3000); // 3 seconds hover delay

    // Store the timer reference for cleanup
    (window as any)[`hoverTimer_${id}`] = timer;
  };

  const handleMouseLeave = (id: number) => {
    clearTimeout((window as any)[`hoverTimer_${id}`]);
    setHoveredCard(null);
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
      <Slider {...settings}>
        {products.map((product) => (
          <div
            className={`product-card-container ${hoveredCard === product.id ? "expanded" : ""}`}
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={() => handleMouseLeave(product.id)}
          >
            <Card
              sx={{
                margin: "0 10px",
                transition: "transform 0.3s ease, height 0.3s ease",
                transform: hoveredCard === product.id ? "scale(1.1)" : "scale(1)",
                height: hoveredCard === product.id ? "400px" : "300px",
              }}
            >
              <CardMedia component="img" alt={product.name} height="200" image={product.img} sx={{ objectFit: "cover" }} />
              {hoveredCard === product.id && (
                <CardContent>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p style={{ marginBottom: "0.5rem" }}>${product.price}</p>
                  <Button variant="contained" fullWidth onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default SwipeCatNew;
