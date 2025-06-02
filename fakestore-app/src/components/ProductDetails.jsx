// Imports
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const ProductDetail = () => {
    // Extract product ID from API
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [cartMsg, setCartMsg] = useState("");

    // Fetch product data from API
    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(`Failed to fetch product: ${error.message}`);
                setLoading(false);
            });
    }, [productId]);

    // Handle delete (real DELETE request, but product won't actually be removed from API)
    const handleDelete = () => {
        axios.delete(`https://fakestoreapi.com/products/${productId}`)
            .then(() => setDeleted(true))
            .catch(error => setError(`Failed to delete product: ${error.message}`));
    };

    // Simulate add to cart
    const handleAddToCart = () => {
        setCartMsg("Product added to cart! (Simulation)");
        setTimeout(() => setCartMsg(""), 2000);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (deleted) return <div>Product removed successfully! (API mock)</div>;
    if (!product) return <div>No product found.</div>;

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto", border: "1px solid #ccc", padding: "1rem" }}>
            <img src={product.image} alt={product.title} style={{ maxWidth: 200 }} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button
                onClick={handleAddToCart}
                style={{ background: "green", color: "#fff", padding: "0.5rem 1rem", marginRight: "1rem" }}
            >
                Add to Cart
            </button>
            <button
                onClick={handleDelete}
                style={{ background: "red", color: "#fff", padding: "0.5rem 1rem" }}
            >
                Delete Product
            </button>
            {cartMsg && <div style={{ marginTop: "1rem", color: "green" }}>{cartMsg}</div>}
        </div>
    );
};

export default ProductDetail;