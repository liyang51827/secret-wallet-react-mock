import { Row, Col, Button } from 'react-bootstrap';
import Layout from "./Layout";
import '../scss/vault.scss';
import Div from '../compnents/Div';
import ConnectModal from '../compnents/ConnectModal';
import { getWindowDimensions } from '../utils/GlobalFuns';
import { useEffect, useState } from 'react';
import { FaLock, FaArrowLeft } from 'react-icons/fa';
import { useContext } from 'react';
import { WalletContext } from '../context/WallectConnectContext';
import DatePicker from "react-datepicker";
import FormControl from '../compnents/FormControl';
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../compnents/Footer';

const Vault = (props) => {
    const { connect } = useContext(WalletContext);
    const [ modalShow, setModalShow] = useState(false);
    const { path } = props;
    const [ windowSize, setWindowSize] = useState(getWindowDimensions());
    const [ addressCorrect, setAddressCorrect] = useState(false);
    const [ approve, setApprove] = useState(false);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    
    const validationHex = (e) =>{
        if (!e.target.value) {
            setAddressCorrect(false);
        } else {
            setAddressCorrect(true);
        }
    }

    const handleApprove = () => {
        setApprove(!approve);
    }

    return (
        <Layout path={path}>
            <Col className="vault">
                <Div className={`${windowSize.width > 1121 ? 'container mt-4': ''}`}>
                    <Row className={`${connect ? '' : 'hidden' }`}>
                        <Col lg={12} md={12} sm={12}>
                            <Div className="py-4 connect-wallet-panel">
                                <h3 className="text-center text-white">New Lock</h3>
                                <Div className="mt-5 text-center">
                                    <Button onClick={() => setModalShow(true)}>Connect Wallet</Button>
                                </Div>
                            </Div>
                        </Col>
                    </Row>
                    {
                        approve ? 
                            <Div >
                                <Row>
                                    <Div className="panel lockToken mt-3">
                                        <FaArrowLeft onClick={handleApprove}/>
                                        <h3 className='text-white text-center'>Lock token</h3>
                                        <Row className='mt-4'>
                                            <Col className='amount'>
                                                <FormControl label="Lock tokens amount" type="number" focus="amount" unit="CRX" />
                                            </Col>
                                        </Row>
                                        <h5 className='mt-4'>Unlocks</h5>
                                        <Unlock />
                                        <Unlock />
                                        <Unlock />
                                        <Row className="mt-3">
                                            <Col className='d-flex justify-content-end'>
                                                <span style={{ color: '#fb7844', cursor: 'pointer'}}>+ Add new unlock item</span>
                                            </Col>
                                        </Row>
                                        <Row className='mt-3'>
                                            <Col>
                                                <Button className='btn-approve'>Approve CRX</Button>
                                            </Col>
                                        </Row>
                                    </Div>
                                </Row>
                            </Div>
                            :
                            <Div className={`${!connect ? '' : 'hidden' }`}>
                                <Row>
                                    <Div className="lockTokensCard">
                                        Lock LP Tokens 
                                        <FaLock />
                                    </Div>
                                </Row>
                                <Row>
                                    <Div className="newLock panel">
                                        <h4 className='text-center mt-4'>New token Lock</h4>
                                        <Div className="mt-4 enterToken">
                                            <label htmlFor='address'>Enter the token address you would like to lock</label>
                                            <input type="text" id="address" onChange={validationHex} />
                                            <p className="text-center">e.g 0x97a30C692eCe9C317235d48287d23d358170FC40</p>
                                            <Div className={`continue ${addressCorrect ? '' : 'hidden'}`}>
                                                <h5 className='text-center text-white'><b>Token found</b></h5>
                                                <h6 className='text-center text-white mt-3'>User locks amount: 0</h6>
                                                <Button className="mt-4" onClick={handleApprove}>Continue</Button>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Row>
                                <Row className={`mt-3`}>
                                    <Div className="history panel">
                                        <h3 className='mt-4'>Your tokens (0)</h3>
                                        <table className='mt-4'>
                                            <thead>
                                                <tr>
                                                    <th>Token</th>
                                                    <th>Balance</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </Div>
                                </Row>
                            </Div>
                    }
                    
                </Div>
                <Footer />
            </Col>
            <ConnectModal show={modalShow} onHide={() => setModalShow(false)} />
        </Layout>
    )
}

const Unlock = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Row className="mt-2">
            <Col lg={6} md={6} sm={12} className="mt-2">
                <Row>
                    <Col lg={6} md={6} sm={6}><FormControl label="Unlock percent" type="number" focus="percent" unit="%" /></Col>
                    <Col lg={6} md={6} sm={6}><FormControl label="Unlock amount" type="number" focus="amount" unit="CRX" /></Col>
                </Row>
            </Col>
            <Col lg={6} md={6} sm={12} className="d-flex unlockDate mt-2">
                <label>Unlock date</label>
                <Div className="d-flex">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <Button className='btn-del'>x</Button>
                </Div>
            </Col>
        </Row>
    )
}

export default Vault;