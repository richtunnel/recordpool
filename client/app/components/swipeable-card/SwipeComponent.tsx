import React, { useEffect, useState } from "react";
import { LoaderFunction } from "@remix-run/node";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import "../../styles/products.css";

const SwipeComponent = ({ children }: { children: React.ReactNode }) => {
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

  if (!isClient) {
    return null;
  }

  return (
    <Container className="swipeable-card-list">
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

export default SwipeComponent;
