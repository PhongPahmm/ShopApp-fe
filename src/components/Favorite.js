import React, { useEffect, useState } from "react";
import { getAllFavoritesByUserId, getProductById } from "../services/apiService";
// import "./Favorite.scss";

const Favorite = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("accessToken");

        if (!userId || !token) {
            return;
        }

        const res = await getAllFavoritesByUserId(userId, token);
        const favoriteList = res.data.data || [];
        const productIds = [...new Set(favoriteList.map((item) => item.productId))];

        if (productIds.length === 0) {
            return;
        }

        const productRequests = productIds.map((id) => getProductById(id, token));
        const productResponses = await Promise.allSettled(productRequests);
        const products = productResponses
            .filter((response) => response.status === "fulfilled")
            .map((response) => response.value.data.data);

        setFavorites(products);
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Favorite Products</h2>
            {favorites.length === 0 ? (
                <p className="text-center text-muted">No favorite products yet.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {favorites.map((product) => (
                        <div key={product.id} className="col">
                            <div className="card shadow-sm border-warning">
                                <img
                                    src={`http://localhost:8080/api/v1/uploads/${product.thumbnail}`}
                                    className="card-img-top rounded"
                                    alt={product.name}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{product.name}</h5>
                                    <p className="card-text text-primary fs-5">${product.price.toFixed(2)}</p>
                                    <button className="btn btn-success mx-3">Buy</button>
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorite;
