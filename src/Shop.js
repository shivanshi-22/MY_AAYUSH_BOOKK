// src/HealthStore.js

import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Dialog, DialogActions, DialogContent, Badge } from '@mui/material';

// Sample data (Removed insurance and policy products)
const products = [
  { id: 1, name: "Essential Vitamins", description: "Vital for maintaining overall health and immunity.", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Health Supplements", description: "Nutritional supplements to support wellness and fitness.", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Home Blood Pressure Monitor", description: "Easy-to-use device to monitor blood pressure at home.", price: "$40", image: "https://via.placeholder.com/150" },
];

const HealthStore = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Open product details dialog
  const handleDialogOpen = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  // Close product details dialog
  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  // Add product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Container sx={{ py: 6 }}>
      {/* Header Section */}
      <Typography variant="h3" gutterBottom align="center" sx={{ color: "#2c3e50", fontWeight: "bold", fontFamily: '"Roboto", sans-serif' }}>
        Health Product Store
      </Typography>

      

      {/* Introduction Section */}
      <Card sx={{ mb: 6, borderRadius: 3, background: 'linear-gradient(to right, #8e44ad, #3498db)', boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)" }}>
        <CardContent>
          <Typography variant="h6" color="white" sx={{ fontWeight: "bold" }}>
            Health Essentials
          </Typography>
          <Typography variant="body2" color="white" sx={{ mt: 2, lineHeight: 1.7 }}>
            Explore a range of essential health products and monitoring devices:
            <br/> - Nutritional supplements and vitamins
            <br/> - Health monitoring devices for home use
          </Typography>
        </CardContent>
      </Card>

      {/* Product List Section */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                backgroundColor: "#fff",
                '&:hover': {
                  transform: "scale(1.05)",
                  boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.2)",
                },
                '&:active': {
                  transform: "scale(1.02)",
                }
              }}
            >
              <CardContent sx={{ padding: 4, textAlign: "center" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }} />
                <Typography variant="h6" sx={{ color: "#34495e", fontWeight: "bold", fontSize: "1.2rem", lineHeight: 1.4, mt: 2 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ my: 2 }}>
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#e74c3c", fontWeight: "medium", fontSize: "1.1rem" }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", paddingBottom: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "8px 20px",
                    '&:hover': {
                      backgroundColor: "#2980b9",
                    }
                  }}
                  onClick={() => handleDialogOpen(product)}
                >
                  View Details
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "8px 20px",
                    marginLeft: 2,
                    '&:hover': {
                      backgroundColor: "#2980b9",
                    }
                  }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Product Details Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogContent sx={{ padding: 4 }}>
          {selectedProduct && (
            <>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2c3e50", mb: 2 }}>
                {selectedProduct.name}
              </Typography>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", borderRadius: "10px", marginBottom: "16px" }} />
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {selectedProduct.description}
              </Typography>
              <Typography variant="h6" sx={{ color: "#e74c3c", fontWeight: "bold", fontSize: "1.2rem" }}>
                {selectedProduct.price}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button variant="outlined" color="secondary" onClick={handleDialogClose} sx={{ textTransform: "none" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HealthStore;