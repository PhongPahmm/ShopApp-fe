import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom";
import imageHomePage from "../../assets/image.png"
import './HomePage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = (props) => {
    const navigate = useNavigate()

    return (
        <>
            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink to="/" className='navbar-brand'>Free Quizz</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                            <NavLink to="/product" className='nav-link'>Product</NavLink>
                        </Nav>
                        <Nav>
                            <button className='btn-login' onClick={() => navigate('/login')}>Log in</button>
                            <button className='btn-signup'>Sign up</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <div className="homepage-container">
                <div className="homepage-img">
                    <img src={imageHomePage}></img>
                </div>
                <div className="homepage-content">
                    <div className="title-1">Make forms
                        worth filling out</div>
                    <div className="title-2">Get more data—like signups, feedback,
                        and anything else—with forms designed to be refreshingly different.</div>
                    <div className="title-3">
                        <button onClick={() => { navigate('/') }}>Get's started. It's free</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage; 