import React, { useEffect, useState, useRef } from "react";
import { LoaderFunction } from "@remix-run/node";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import "../styles/products.css";
import SwipeCatNew from "~/components/swipeable-card/SwipeCatNew";
import SwipeComponent from "~/components/swipeable-card/SwipeComponent";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { IoAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import AudioPlayer from "../components/Audio/AudioPlayer";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img?: string;
}

interface Track {
  title: string;
  artist: string;
  audioSrc?: string;
  image?: string;
  color?: string;
}

const tracks: Track[] = [
  {
    title: "Cali",
    artist: "Wataboi",
    color: "#00aeb0",
  },
  {
    title: "50",
    artist: "tobylane",
    color: "#ffb77a",
  },
  {
    title: "I Wonder",
    artist: "DreamHeaven",
    color: "#5f9fff",
  },
];

const products: Product[] = [
  { id: 1, name: "Album 1", description: "Description of Album 1", price: 9.99, img: "assets/images/album-art/album-art.png" },
  { id: 2, name: "Album 2", description: "Description of Album 2", price: 12.99, img: "assets/images/album-art/album-art.png" },
  { id: 3, name: "Album 3", description: "Description of Album 3", price: 15.99, img: "assets/images/album-art/album-art-01.jpg" },
  { id: 4, name: "Album 5", description: "Description of Album 5", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 5, name: "Album 6", description: "Description of Album 6", price: 20.99, img: "assets/images/album-art/album-art-04.png" },
  { id: 6, name: "Album 7", description: "Description of Album 7", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 7, name: "Album 8", description: "Description of Album 8", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 8, name: "Album 9", description: "Description of Album 9", price: 20.99, img: "assets/images/album-art/album-art-04.png" },
  { id: 9, name: "Album 10", description: "Description of Album 10", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 10, name: "Album 11", description: "Description of Album 11", price: 20.99, img: "assets/images/album-art/album-art-03.png" },
  { id: 11, name: "Album 12", description: "Description of Album 12", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 12, name: "Album 13", description: "Description of Album 13", price: 20.99, img: "assets/images/album-art/album-art.png" },
];

const productsTwo: Product[] = [
  { id: 13, name: "Album 13", description: "Description of Album 13", price: 9.99, img: "assets/images/album-art/album-art-02.png" },
  { id: 14, name: "Album 14", description: "Description of Album 14", price: 12.99, img: "assets/images/album-art/album-art-01.jpg" },
  { id: 15, name: "Album 15", description: "Description of Album 15", price: 15.99, img: "assets/images/album-art/album-art-05.jpg" },
  { id: 15, name: "Album 16", description: "Description of Album 16", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 17, name: "Album 17", description: "Description of Album 17", price: 20.99, img: "assets/images/album-art/album-art-04.png" },
  { id: 18, name: "Album 18", description: "Description of Album 18", price: 20.99, img: "assets/images/album-art/album-art-03.png" },
  { id: 19, name: "Album 19", description: "Description of Album 17", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 20, name: "Album 20", description: "Description of Album 17", price: 20.99, img: "assets/images/album-art/album-art-04.png" },
  { id: 21, name: "Album 21", description: "Description of Album 17", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 22, name: "Album 22", description: "Description of Album 17", price: 20.99, img: "assets/images/album-art/album-art-03.png" },
  { id: 23, name: "Album 17", description: "Description of Album 17", price: 20.99, img: "assets/images/album-art/album-art.png" },
  { id: 24, name: "Album 17", description: "Description of Album 17", price: 20.99, img: "assets/images/album-art/album-art.png" },
];

export let loader: LoaderFunction = () => {
  return products;
};

const SwipeableCardList: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const theme = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: false, // Show pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Number of slides to scroll
    draggable: true, // Enable mouse drag for horizontal scrolling
    arrows: true, // Show arrows for navigation
    swipe: true, // Enable swipe gestures
    touchMove: true, // Allow touch interaction
    nextArrow: <FaChevronRight color="#fff" />,
    prevArrow: <FaChevronLeft color="#fff" />,
    responsive: [
      {
        breakpoint: 1024, // For screen sizes <= 1024px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // For screen sizes <= 768px
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseEnter = (id: number) => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredCard(id);
    }, 625);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current); // Clear timeout if mouse leaves early
    }
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
      <h2 className="text-white h3" style={{ marginBottom: "1rem" }}>
        Premium cuts by AJ
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            className={`product-card-container ${hoveredCard === product.id ? "expanded motion" : ""}`}
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Card
              className="product-cards"
              sx={{
                margin: "0 10px",
              }}
            >
              <CardMedia component="img" alt={product.name} height="200" image={product.img} sx={{ objectFit: "cover" }} />
              <div className={`product-desc ${hoveredCard === product.id ? "visible" : "hidden"}`}>
                {/* <p className="scaled-font-lg">{product.name}</p>
                <p className="scaled-font-md">{product.description}</p>
                <p className="scaled-font-md">{product.price}</p> */}

                <Card className="product-subdesc-card" style={{ display: "flex" }}>
                  <Box className="product-sub-box" style={{ display: "flex", flexDirection: "column", maxWidth: "83%" }}>
                    <CardContent style={{ flex: "1 0 auto" }}>
                      <div className="scaled-font-lg">{product.name}</div>
                      <div className="scaled-font-sm">{product.description}</div>
                      <div className="scaled-font-sm">${product.price}</div>
                    </CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                      <div className="play-icon-wrapper">
                        <div>
                          {/* <IconButton aria-label="play/pause">
                            <FaPlayCircle style={{ height: "20px", width: "20px" }} />
                          </IconButton> */}

                          <AudioPlayer tracks={tracks} />
                        </div>
                      </div>
                    </Box>
                  </Box>
                  <div className="product-action-div d-flex flex-column">
                    <IoAdd className="product-desc-add-icon" />
                    <FaHeart className="product-desc-heart-icon" />
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      <br />
      <hr />
      <h2 className="text-white h3" style={{ marginBottom: "1rem" }}>
        Hip Hop
      </h2>
      <SwipeCatNew />
      <br />
      <hr />
      <h2 className="text-white h3" style={{ marginBottom: "1rem" }}>
        Pop Culture
      </h2>
      <SwipeComponent>
        {productsTwo.map((product) => (
          <div
            className={`product-card-container ${hoveredCard === product.id ? "expanded motion" : ""}`}
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Card
              sx={{
                margin: "0 10px",
              }}
            >
              <div
                data-name={product.name}
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {hoveredCard === product.id && (
                  <div style={{ background: "darkgray", position: "absolute", bottom: "0", zIndex: "999999" }}>
                    <p>This is a test Desc!!</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        ))}
      </SwipeComponent>
    </Container>
  );
};

export default SwipeableCardList;
