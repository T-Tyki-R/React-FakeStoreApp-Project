import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";

const EditProduct = () => {
  const { productId } = useParams();
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: ""
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  // Fetch existing product data
  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        setForm({
          title: res.data.title,
          price: res.data.price,
          description: res.data.description,
          category: res.data.category
        });
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product data.");
        setLoading(false);
      });
  }, [productId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError("");
    setSuccessMsg("");
    try {
      await axios.put(`https://fakestoreapi.com/products/${productId}`, {
        title: form.title,
        price: form.price,
        description: form.description,
        category: form.category
      });
      setSuccessMsg("Product updated successfully! (API mock)");
    } catch {
      setError("Failed to update product.");
    }
    setUpdating(false);
  };

  if (loading) return <Container style={{ marginTop: "2rem" }}>Loading...</Container>;

  return (
    <Container style={{ maxWidth: 500, marginTop: "2rem" }}>
      <h3 className="mb-4">Edit Product</h3>
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className ="bg-secondary border-0" type="submit" disabled={updating}>
          {updating ? "Updating..." : "Update Product"}
        </Button>
      </Form>
    </Container>
  );
};

export default EditProduct;