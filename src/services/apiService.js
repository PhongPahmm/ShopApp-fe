import axios from "axios";

const getAllProducts = () => {
    return axios.get("http://localhost:8080/api/v1/product")
}
const getProductById = (productId, token) => {
    return axios.get(`http://localhost:8080/api/v1/product/${productId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    )
}
const addToFavorite = (userId, productId, token) => {
    return axios.post(`http://localhost:8080/api/v1/favorites/${userId}/${productId}`, {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
}
const deleteToFavorite = (userId, productId, token) => {
    return axios.post(`http://localhost:8080/api/v1/favorites/${userId}/${productId}`, {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
}
const getAllFavoritesByUserId = async (userId, token) => {
    return axios.get(`http://localhost:8080/api/v1/favorites/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

const login = (username, password) => {
    return axios.post('http://localhost:8080/api/v1/auth/log-in', { username, password })
}

export { getAllProducts, getProductById, addToFavorite, getAllFavoritesByUserId, login }