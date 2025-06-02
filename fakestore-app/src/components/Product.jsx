import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);     // State to store products
  const [loading, setLoading] = useState(true);     // Loading state
  const [error, setError] = useState(null);         // Error state

  // Fetch products when component mounts
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch products: ${error.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: '15px' }}
            role="status"
          />
          Loading Products...
        </h3>
      </Container>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h3 className="text-center mb-4">Product List</h3>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card style={{ width: '18rem', height: '100%' }}>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ objectFit: 'contain', height: '200px', padding: '1rem' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="mb-2">
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Button
                  as={Link}
                  to={`/product/${product.id}`}
                  variant="info"
                  className="mt-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;