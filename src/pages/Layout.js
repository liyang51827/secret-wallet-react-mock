import {  Col, Button } from 'react-bootstrap';
import '../scss/profile.scss';
import { FaThLarge, FaBitcoin, FaRegGem, FaBuffer, FaShoppingCart, FaTelegramPlane, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../compnents/Header';
import { getWindowDimensions } from '../utils/GlobalFuns';
import { useState, useEffect } from 'react';
import Div from '../compnents/Div';
import '../scss/layout.scss';

const Layout = (props) => {
    const { children, path } = props;
    const [windowSize, setWindowSize] = useState(getWindowDimensions());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <Div className="main">
            <Header path={path} />
            <Col className="content">
                <Div className={`d-flex ${windowSize.width > 1121 ? 'container': `${path === 'vault' ? 'container' : path === 'lottery' ? 'container' : ''}`}`} style={{gap: '2rem'}}>
                    <Col className="left-navbar"> 
                        <Link to="/profile" className={`menu py-2 px-3 ${path === 'profile' ? 'active' : '' }`}>
                            <FaThLarge /> Profile
                        </Link>
                        <Link to="/staking" className={`menu py-2 px-3 ${path === 'staking' ? "active" : '' }`}>
                            <FaBuffer /> Staking
                        </Link>
                        <Link to="/vault" className={`menu py-2 px-3 ${path === 'vault' ? 'active' : '' }`}>
                            <FaBitcoin /> Vault
                        </Link>
                        <Link to="/lottery" className={`menu py-2 px-3 ${path === 'lottery' ? 'active' : '' }`}>
                            <FaRegGem /> Lottery
                        </Link>
                        <Link to="/presale" className={`menu py-2 px-3 ${path === 'presale' ? 'active' : '' }`}>
                            <FaShoppingCart /> Presale
                        </Link>
                        <Div className="social-media">
                            <Button className="text-white"><FaTelegramPlane /></Button>
                            <Button className="text-white"><FaYoutube /></Button>
                            <Button className="text-white"><FaTwitter /></Button>
                        </Div>
                    </Col>
                    { children }
                </Div>
            </Col>
        </Div>
    )
}

export default Layout;
