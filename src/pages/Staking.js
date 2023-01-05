import { Button, Col, Row, Tabs, Tab,Form } from 'react-bootstrap';
import Div from '../compnents/Div';
import { useState, useEffect } from 'react';
import Layout from "./Layout";
import { getWindowDimensions } from '../utils/GlobalFuns';
import '../scss/staking.scss';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormControl from '../compnents/FormControl';
import RangeSlider from 'react-bootstrap-range-slider';
import Footer from '../compnents/Footer';

const Staking = (props) => {
    const { path } = props;
    const [ value, setValue ] = useState(0);
    const [ collapse, setCollapse ] = useState(false);

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

    const handleCollapse = (e) => {
        setCollapse(!collapse);
        console.log('adsf');
    }

    return (
        <Layout path={path}>
            <Col className='staking'>
                <Div className={`${windowSize.width > 1121 ? 'container': ''}`}>
                    <Row className="py-4">
                        <h3 className='text-white text-center'><b style={{ fontWeight: '900' }}>Stake CRX to earn BNB</b></h3>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Div className="account panel text-white">
                                <h2 className='mb-4'>Account</h2>
                                <h6 className='mb-3'>Staking balance: 0 CRX</h6>
                                <h6>Staking rating: 0</h6>
                                <h6>Staking reward old: 0 WBNB</h6>
                                <h6>Staking reward: 0 WBNB</h6>
                                <Div className='deposits'>
                                    <h6 className='d-flex justify-content-between align-items-center title' onClick={handleCollapse}>
                                        <Div>Having issues while withdrawing old deposits?</Div>
                                        <FaArrowAltCircleDown />
                                    </h6>
                                    <Div className={`deposits-collapse ${collapse ? 'animation mt-4' : ''}`}>
                                        <p>Sometimes you can face an issue while withdrawing your CRX tokens.</p>
                                        <p>This issue depends on many factors, and it leads to wrong calculations of rewards. You can fix it by yourself or ask someone from 
                                            <Link to="">the team</Link> to do it.</p>
                                        <p>When you will click <Link to="">Apply a fix</Link> button, it will take <Link to="">0.0001 WBNB</Link> from your wallet and send it to staking contract to recalculate rewards. But first you need to approve WBNB to be spent.</p>
                                        <p>Your balance: 0 WBNB</p>
                                        <Link to="">Open WBNB in explorer.</Link>
                                        <Div className='mt-3'>
                                            <Button className='disable'>Apply a fix</Button>
                                            <Button>Approve WBNB</Button>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                            <Div className='withdraw panel text-white mt-3'>
                                <Tabs
                                    defaultActiveKey="deposit"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="deposit" title="Deposit">
                                        <Div className='mt-3'>
                                            <FormControl label="Amount" type="number" focus="amount" unit="CRX" />
                                            <p className='d-flex justify-content-end text-gray'>Your balance: 0 CRX</p>
                                            <Div className='days-slider'>
                                                <Form.Label className='text-gray'>Lock for (days)</Form.Label><br/>
                                                <RangeSlider
                                                    value={value}
                                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                                    max='84'
                                                />
                                            </Div>
                                            <Div className='d-flex justify-content-between text-gray'>
                                                <p>Min: 0</p>
                                                <p>Max: 84</p>
                                            </Div>
                                            <Div>
                                                <h6>New rating after deh6osit: 0. Rating increase is 0.</h6>
                                                <h6 className='text-gray'>Users can affect their staking score by increasing the staked amount and time lock h6eriod.</h6>
                                                <h6 className='text-gray'>- Minimum lock to increase is 15 days.</h6>
                                                <h6 className='text-gray'>- Minimum lock to increase is 15 days.</h6>
                                                <h6 className='text-gray'>It is not possible to withdraw CRX tokens from staking until the selected lock period is over.</h6>
                                                <h6 className='text-gray'>Otherwise for regular stakers, it is possible to withdraw at any point in time.</h6>
                                            </Div>
                                            <Div className='d-flex align-items-center mt-3'>
                                                <Form.Check 
                                                    type="switch"
                                                    id="custom-switch"
                                                    label="I read and accept"
                                                />
                                                <Link to="">Tems & Conditions</Link>
                                            </Div>
                                            <Div className='d-flex justify-content-around mt-3'>
                                                <Button>Approve</Button>
                                                <Button className='disable'>Deposit</Button>
                                            </Div>
                                        </Div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Withdraw (O)">
                                        <p className='text-gray'>If you withdraw your tokens from staking, your rating will decrease.</p>
                                        <p className='text-gray'>It is not possible to withdraw CRX tokens from staking until the selected lock period is over.</p>
                                        <p className='text-gray'>Otherwise for regular stakers, it is possible to withdraw at any point in time.</p>
                                        <p className='text-whtie text-center'>Nothing to withdraw</p>
                                    </Tab>
                                </Tabs>
                            </Div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Div className='summary panel'>
                                <h2>Summary</h2>
                                <Div className='d-flex justify-content-between mt-4'>
                                    <h6 className='text-gray'>Total locked</h6> <h6 className='text-white'>45332.5987 CRX</h6>
                                </Div>
                                <Div className='d-flex justify-content-between mt-1'>
                                    <h6 className='text-gray'>Total stakers</h6> <h6 className='text-white'>430</h6>
                                </Div>
                            </Div>
                            <Div className='transactions panel mt-3'>
                                <h2>Transactions</h2>
                                <Div className='mt-4'>
                                    <h6 className='text-center text-white'>No transactions</h6>
                                </Div>
                            </Div>
                            <Div className='stakers panel mt-3'>
                                <h2>Top 30 stakers</h2>
                                <Div className='d-flex justify-content-between mt-5 mb-2'>
                                    <h6 className='text-gray'>Address</h6> <h6 className='text-gray'>Staking Rating</h6>
                                </Div>
                                <Div className='d-flex justify-content-between mt-1'>
                                    <h6 className='text-white'>1.<Link to="" className='text-white'>0x2...27A</Link></h6><h6 className='text-white'>58728.2306</h6>
                                </Div>
                                <Div className='d-flex justify-content-between mt-1'>
                                    <h6 className='text-white'>1.<Link to="" className='text-white'>0x2...27A</Link></h6><h6 className='text-white'>58728.2306</h6>
                                </Div>
                            </Div>
                        </Col>
                    </Row>
                </Div>
                <Footer />
            </Col>
        </Layout>
    )
}

export default Staking;