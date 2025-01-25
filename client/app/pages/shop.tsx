import React from "react";
import { Link } from "@remix-run/react";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import { FaMusic } from "react-icons/fa";

const products = [
  { id: 1, name: "Album 1", description: "Album description", price: 9.99 },
  { id: 2, name: "Album 2", description: "Album description", price: 12.99 },
  { id: 3, name: "Album 3", description: "Album description", price: 15.99 },
];

const ShopPage = () => {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <FaMusic size={50} />
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Button variant="contained" color="primary" component={Link} to={`/product/${product.id}`}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShopPage;
