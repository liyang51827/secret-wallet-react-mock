import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import '../scss/modal.scss';
import Div from './Div';
import MetaMaskLogo from '../assets/metamask.png';
import WalletConnectLogo from '../assets/wallet-connect.svg';
import { WalletContext } from '../context/WallectConnectContext';

const ConnectModal = (props) => {
    const { connect, setConnect } = useContext(WalletContext);

    const handleConnect = () => {
        setConnect(!connect);
        props.onHide();
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Body className="show-grid">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h4>Connect a wallet</h4>
                    </Col>
                </Row>
    
                <Row className='mt-2'>
                    <Col onClick={handleConnect}>
                        <Div className="metamask-wallet" >
                            <img src={MetaMaskLogo} alt="" width="30" height='30' />
                            MetaMask
                        </Div>
                    </Col>
                </Row>

                <Row className=''>
                    <Col>
                        <Div className="metamask-wallet">
                            <img src={WalletConnectLogo} alt="" width="30" height='30' />
                            WalletConnect
                        </Div>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <h6>New to Ethereum?</h6>
                    <Link to="">Learn more about wallets</Link>
                </Row>
            </Container>
            </Modal.Body>
        </Modal>
    )
}

export default ConnectModal;