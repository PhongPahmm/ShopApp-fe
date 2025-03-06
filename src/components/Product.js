import React, { useEffect, useState } from "react";
import { addToFavorite, getAllProducts } from "../services/apiService";
import "./Product.scss";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const res = await getAllProducts();
        setProducts(res.data.data);
    };

    const handleBtnAddFavorite = async (productId) => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("accessToken");

        if (!userId || !token) {
            alert("You must be logged in to add favorites!");
            return;
        }

        try {
            const res = await addToFavorite(userId, productId, token);
            setFavorites([...favorites, productId]);
            alert("Added to favorites successfully!");
        } catch (error) {
            console.error("Failed to add to favorites:", error);
            alert("Failed to add to favorites. Please try again.");
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) => (
                    <div key={product.id} className="col">
                        <div className="card shadow-sm border-0">
                            <img
                                src={`http://localhost:8080/api/v1/uploads/${product.thumbnail}`}
                                className="card-img-top rounded"
                                alt={product.name}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">{product.name}</h5>
                                <p className="card-text text-primary fs-5">${product.price.toFixed(2)}</p>
                                <button className="btn btn-outline-primary me-2" onClick={() => handleBtnAddFavorite(product.id)}>❤ Add to Favorites</button>
                                <button className="btn btn-primary">🛒 Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;