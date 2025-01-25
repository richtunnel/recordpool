import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Card as MUI_Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./carousel-slider.css"; // The custom CSS for styles
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, style }) => {
  return (
    <MUI_Card sx={{ ...style, transition: "transform 1s, opacity 1s" }}>
      <CardMedia component="img" image={imageUrl} alt={title} sx={{ width: "400px", transition: "width 1s" }} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </MUI_Card>
  );
};

const Carousel: React.FC = () => {
  const items = [
    {
      title: "Card 1",
      description: "This is the description of Card 1.",
      imageUrl: "https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg",
    },
    {
      title: "Card 2",
      description: "This is the description of Card 2.",
      imageUrl: "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
    },
    {
      title: "Card 3",
      description: "This is the description of Card 3.",
      imageUrl: "https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg",
    },
    {
      title: "Card 4",
      description: "This is the description of Card 4.",
      imageUrl: "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg",
    },
    {
      title: "Card 5",
      description: "This is the description of Card 5.",
      imageUrl: "https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(3); // Default to the middle card

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ position: "relative", height: "400px", top: "50%", transform: "translateY(-50%)" }}>
      {items.map((item, index) => {
        const distance = index - selectedIndex;
        const cardStyle: React.CSSProperties = {
          position: "absolute",
          transition: "transform 1s, opacity 1s",
          left: `${50 + distance * 20}%`,
          transform: `translateX(-50%) ${distance === 0 ? "scale(1.05)" : distance === 1 || distance === -1 ? "scale(0.95)" : "scale(0.8)"}`,
          zIndex: distance === 0 ? 10 : distance === 1 || distance === -1 ? 5 : 1,
          opacity: distance === 0 ? 1 : 0.7,
        };

        return <Card key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} style={cardStyle} />;
      })}

      {/* Navigation buttons */}
      <Button onClick={handlePrev} sx={{ position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)", color: "white" }}>
        Prev
      </Button>
      <Button onClick={handleNext} sx={{ position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)", color: "white" }}>
        Next
      </Button>
    </Box>
  );
};

export default Carousel;
