import { Container, Navbar, Nav, Form, Button, Col } from 'react-bootstrap';
import SecretLogo from '../assets/logo.png';
import { FaGripLines, FaTimes, FaThLarge, FaBitcoin, FaRegGem, FaBuffer, FaShoppingCart } from 'react-icons/fa';
import { getWindowDimensions } from '../utils/GlobalFuns';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { path } = props;
    const [windowSize, setWindowSize] = useState(getWindowDimensions());
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleHamburger = () => {
        setShow(!show);
    }

    return (
        <>
            {
                windowSize.width >= 1121 ? 
                    <Navbar fixed="top" className="py-2">
                        <Container className="d-header py-1 px-4">
                            <Navbar.Brand href="/">
                                <img src={SecretLogo} alt="" widthd="40" height="40" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center d-header-nav"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Form.Text className="previewID-text">Preview ID</Form.Text>
                                <Form className="d-flex previewID-input ml-5">
                                    <Form.Control
                                        type="search"
                                        className="px-3 py-2 mr-5"
                                        aria-label="Search"
                                    />
                                    <Button className='previewID-Go px-3 py-2'>Go</Button>
                                </Form>
                            </Nav>
                            <Button className="btn-connect-wallet px-4 py-3">Connect Wallet</Button>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> 
                    :
                    <Navbar fixed="top" className="py-2">
                            {
                                !show ? 
                                    <Container fluid className="d-header">
                                        <Navbar.Brand href="#">
                                            <img src={SecretLogo} alt="" widthd="40" height="40" />
                                        </Navbar.Brand>
                                        <Navbar.Toggle aria-controls="navbarScroll" />
                                        <Navbar.Collapse id="navbarScroll">
                                        <Nav
                                            className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center d-header-nav"
                                            style={{ maxHeight: '100px' }}
                                            navbarScroll
                                        >
                                            <Form.Text className="previewID-text">Preview ID</Form.Text>
                                        </Nav>
                                        <Button className="btn-hamburger" onClick={handleHamburger}><FaGripLines /></Button>
                                        </Navbar.Collapse>
                                    </Container>
                                    :
                                    <Container fluid className="d-header" style={{ height: "100vh", flexDirection: "column" }}>
                                        <Container className="d-flex hamburger-header py-1 px-4">
                                            <Navbar.Brand href="#">
                                                <img src={SecretLogo} alt="" widthd="40" height="40" />
                                            </Navbar.Brand>
                                            <Navbar.Toggle aria-controls="navbarScroll" />
                                            <Navbar.Collapse id="navbarScroll">
                                            <Nav
                                                className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center d-header-nav"
                                                style={{ maxHeight: '100px' }}
                                                navbarScroll
                                            >
                                                <Form.Text className="previewID-text" style={{ fontFamily: "'Finance', sans-serif", fontSize: '25px' }}>SFW</Form.Text>
                                            </Nav>
                                            <Button className="btn-hamburger" onClick={handleHamburger}><FaTimes /></Button>
                                            </Navbar.Collapse>
                                        </Container>
                                        <Container className="mt-5">
                                            <Col className="text-white mt-3">Preview ID 1</Col>
                                            <Col className="mt-3">
                                                <Form className="d-flex previewID-input ml-5">
                                                    <Form.Control
                                                        type="search"
                                                        className="px-3 py-2 mr-5"
                                                        aria-label="Search"
                                                    />
                                                    <Button className='previewID-Go px-3 py-2'>Go</Button>
                                                </Form>
                                            </Col>
                                            <Col className="mt-2 d-flex"><Button className="btn-exit btn-dark">Exit preview mode</Button></Col>
                                            <Col className="mt-5 menu-list">
                                                <Col className={`menu py-4 ${path === 'profile' ? 'active' : ''}`}>
                                                    <Link to="/profile"><FaThLarge /> Profile</Link>
                                                </Col>
                                                <Col className={`menu py-4 ${path === 'staking' ? 'active' : ''}`}>
                                                    <Link to="/"><FaBuffer /> Staking</Link>
                                                </Col>
                                                <Col className={`menu py-4 ${path === 'vault' ? 'active' : ''}`}>
                                                    <Link to="/vault"><FaBitcoin /> Vault</Link>
                                                </Col>
                                                <Col className={`menu py-4 ${path === 'lottery' ? 'active' : ''}`}>
                                                    <Link to="/"><FaRegGem /> Lottery</Link>
                                                </Col>
                                                <Col className={`menu py-4 ${path === 'presale' ? 'active' : ''}`}>
                                                    <Link to="/"><FaShoppingCart /> Presale</Link>
                                                </Col>
                                            </Col>
                                        </Container>
                                    </Container>
                            }
                    </Navbar>
            }
        </>
        

    )
}

export default Header;