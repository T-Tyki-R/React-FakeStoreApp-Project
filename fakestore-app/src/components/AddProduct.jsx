import { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: ""
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");
    try {
      const res = await axios.post("https://fakestoreapi.com/products", {
        title: form.title,
        price: form.price,
        description: form.description,
        category: form.category
      });
      setSuccessMsg(`Product "${res.data.title}" created!`);
      setForm({ title: "", price: "", description: "", category: "" });
    } catch (err) {
      setError("Failed to create product.");
    }
    setLoading(false);
  };

  return (
    <Container style={{ maxWidth: 500, marginTop: "2rem" }}>
      <h3 className="mb-4">Add New Product</h3>
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
        <Button variant="info" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Add Product"}
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;