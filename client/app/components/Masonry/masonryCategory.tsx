import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item.img}?w=248&fit=crop&auto=format`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

// const itemData = [
//   {
//     img: "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
//     title: "This is the description of Card 1.",
//   },
//   {
//     img: "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
//     title: "Discovery - Daft Punk",
//   },
//   {
//     img: "https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg",
//     title: "Arrival - ABBA",
//   },
//   {
//     img: "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg",
//     title: "Sgt. Pepper’s Lonely Hearts Club Band - The Beatles",
//   },
//   {
//     img: "https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg",
//     title: "Random Access Memories - Daft Punk",
//   },
//   {
//     img: "https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg",
//     title: "The Marshall Mathers LP - Eminem",
//   },
// ];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
