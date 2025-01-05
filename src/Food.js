import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function FoodAnalyzerPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
      setAnalysis(null); // Reset analysis on new upload
    }
  };

  const analyzeFood = () => {
    // Mock analysis results
    const mockAnalysis = {
      name: 'Pasta',
      calories: '350 kcal',
      protein: '12 g',
      fat: '8 g',
      carbs: '45 g',
    };
    setAnalysis(mockAnalysis);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'white', // White background
        padding: 3,
      }}
    >
      {/* Back Button */}
      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <IconButton
          onClick={() => navigate('/home')}
          sx={{ color: '#1976d2' }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Box>

      {/* Page Title */}
      <Typography
        variant="h4"
        component="div"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', sm: '2rem' },
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Food Analyzer
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 3,
          color: '#666',
        }}
      >
        Upload an image of your food to analyze its nutritional content.
      </Typography>

      {/* File Upload Section */}
      <Stack spacing={2} direction="column" alignItems="center">
        <Button
          variant="contained"
          component="label"
          sx={{
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#125ca1' },
          }}
          startIcon={<PhotoCamera />}
        >
          Upload Food Image
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageChange}
          />
        </Button>

        {/* Image Preview */}
        {selectedImage && (
          <Card
            sx={{
              maxWidth: 300,
              mt: 2,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={selectedImage}
              alt="Uploaded Food"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="body1" align="center">
                Your uploaded image preview.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Stack>

      {/* Analyze Button */}
      {selectedImage && (
        <Button
          variant="contained"
          color="success"
          sx={{
            mt: 3,
            paddingX: 3,
            paddingY: 1,
            fontSize: '1rem',
          }}
          onClick={analyzeFood}
        >
          Analyze Food
        </Button>
      )}

      {/* Analysis Results */}
      {analysis && (
        <Box sx={{ mt: 4, width: '100%', maxWidth: 600 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textAlign: 'center', fontWeight: 'bold' }}
          >
            Food Analysis Results
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: 'bold', bgcolor: '#f0f0f0' }}
                    align="center"
                  >
                    Nutrient
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: 'bold', bgcolor: '#f0f0f0' }}
                    align="center"
                  >
                    Value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">{analysis.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Calories</TableCell>
                  <TableCell align="center">{analysis.calories}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Protein</TableCell>
                  <TableCell align="center">{analysis.protein}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Fat</TableCell>
                  <TableCell align="center">{analysis.fat}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Carbs</TableCell>
                  <TableCell align="center">{analysis.carbs}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
}

export default FoodAnalyzerPage;
