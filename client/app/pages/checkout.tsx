import { useEffect, useState, useRef } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, TextField, Divider } from "@mui/material";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import { IoTrashOutline } from "react-icons/io5";
import "../styles/cart.css";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  qty: number;
  img: string;
}

// const cart = [
//     { id: 1, name: "Album 1", description: "Description of Album 1", price: 9.99, img: "assets/images/album-art/album-art.png", qty: 1 },
//     { id: 2, name: "Album 2", description: "Description of Album 2", price: 12.99, img: "assets/images/album-art/album-art.png", qty: 1 },
//     { id: 3, name: "Album 3", description: "Description of Album 3", price: 15.99, img: "assets/images/album-art/album-art.png", qty: 1 },
//     { id: 3, name: "Album 4", description: "Description of Album 4", price: 20.99, img: "assets/images/album-art/album-art.png", qty: 1 },

//   ];

//   export let loader: LoaderFunction = () => {
//     return  cart ;
//   };

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  console.log(JSON.stringify(cart));

  //   // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Recalculate total price whenever the cart updates
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleRemove = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleChangeQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cart.map((item) => (item.id === id ? { ...item, qty: newQuantity } : item));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box className="main-cart" sx={{ padding: "2rem", margin: "auto" }}>
      <h2 className="h2 mb-2">Shopping Bag</h2>
      <small style={{ color: "#878787" }}>{cart.length} items in your bag.</small>
      <Container className="position-relative mt-2">
        {cart.map((item) => (
          <Row className="cart-table-rows" key={item.id}>
            <Col md={12} lg={4} className="cart-rows cart-cols">
              <Box className="cart-img-thumbnail" sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img src={item.img} alt={item.name} width={50} />
                <Box>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography className="cart-item-desc" variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Col>
            <Col className="cart-cols" md={12} lg={4}>
              ${item.price.toFixed(2)}
            </Col>
            <Col className="qty-table-cell cart-rows cart-cols" style={{ display: "flex" }} md={12} lg={4}>
              <Box className="cart-qty-box" sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <IconButton onClick={() => handleChangeQuantity(item.id, Math.max(1, item.qty - 1))}>
                  <IoIosRemoveCircle />
                </IconButton>
                <TextField
                  className="cart-qty-field"
                  value={item.qty || 0}
                  onChange={(e) => handleChangeQuantity(item.id, Math.max(1, Number(e.target.value)))}
                  type="number"
                  size="small"
                  inputProps={{
                    min: 1,
                    style: { textAlign: "center", width: "3rem", background: "transparent", borderWidth: "thin", margin: "0 5px", borderRadius: "10px" },
                  }}
                />
                <IconButton onClick={() => handleChangeQuantity(item.id, item.qty + 1)}>
                  <IoIosAdd />
                </IconButton>
                <div className="d-flex ml-5">
                  <span>
                    <button onClick={() => handleRemove(item.id)}>
                      <IoTrashOutline color="#ff8989" />
                    </button>
                  </span>
                </div>
              </Box>
            </Col>
          </Row>
        ))}
      </Container>
      <br />
      <br />
      <Divider sx={{ my: 2 }} />
      <Box className="cart-box-total" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography className="h4 font-bold" variant="h3">
          Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Button className="custom-button-cart">Complete Purchase</Button>
      </Box>
    </Box>
  );
}
