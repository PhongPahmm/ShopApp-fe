import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { FaSpinner } from "react-icons/fa";
import { login } from '../../services/apiService';
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const res = await login(username, password);
            console.log('API Response:', res);

            if (res.data.code === 0 && res.data.data.token) {
                localStorage.setItem("userId", res.data.data.userId);
                localStorage.setItem('accessToken', res.data.data.token);
                alert('Login successful!');
                navigate('/');
            } else {
                alert(res.data.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);

            if (error.response) {
                alert(error.response.data.message || 'Login failed. Please check your credentials.');
            } else {
                alert('Network error. Please check your backend connection.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button className="btn-signup" onClick={() => navigate('/register')}>Sign Up</button>
            </div>
            <div className="title col-4 mx-auto">Quizz</div>
            <div className="welcome col-4 mx-auto">Who is this?</div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="forgot-password">Forgot password?</div>
                <div>
                    <button
                        className="btn-submit"
                        onClick={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading && <FaSpinner className="loader-icon" />}
                        <span>Login</span>
                    </button>
                </div>
                <div className="back" onClick={() => navigate('/')}>Back to homepage</div>
            </div>
        </div>
    )
}

export default Login;