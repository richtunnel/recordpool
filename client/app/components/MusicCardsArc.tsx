import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import "./carosuel-records.css"; // Ensure the appropriate CSS file is linked

interface CardProps {
  title: string;
  img?: string;
  description: string;
  style?: React.CSSProperties; // Optional 'style' prop for inline styles
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, style, img }) => {
  return (
    <Paper
      sx={{
        ...style,
        padding: "20px",
        width: "250px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Paper>
  );
};

const CarouselComponent = () => {
  return (
    <Box className="carousel-container">
      {/* Arrow buttons */}
      {/* <Button
        className="arrow left-arrow"
        sx={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          color: "white",
        }}
      >
        {"<"}
      </Button> */}

      {/* Left card */}
      <div className="slider-container">
        <Card
          title="Card 1"
          description="Description of Card 1"
          style={{
            position: "absolute",
            left: "10%",
            top: "10%",
            transform: "rotate(-17deg) scale(0.95)",
          }}
          className="previous"
        />

        {/* Center card */}
        <Card
          title="Card 2"
          description="Description of Card 2"
          style={{
            position: "absolute",
            transform: "translateX(-50%) scale(1.05) rotate(0deg)",
            left: "50%",
            top: "0%",
          }}
          className="current"
        />

        {/* Right card */}
        <Card
          title="Card 3"
          description="Description of Card 3"
          style={{
            position: "absolute",
            right: "0%",
            top: "10%",
            transform: "rotate(17deg) scale(0.95)",
          }}
          className="next"
        />
      </div>

      {/* <Button
        className="arrow right-arrow"
        sx={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          color: "white",
        }}
      >
        {">"}
      </Button> */}
    </Box>
  );
};

export default CarouselComponent;
