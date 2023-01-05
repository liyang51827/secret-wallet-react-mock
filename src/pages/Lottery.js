import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Div from "../compnents/Div";
import { getWindowDimensions } from "../utils/GlobalFuns";
import Layout from "./Layout";
import '../scss/lottery.scss';
import { FaAngleDown,FaAngleUp } from 'react-icons/fa';
import Footer from "../compnents/Footer";
import BorderLine from "../compnents/BorderLine";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import FinanceLogo from '../assets/FinaceLogo.png';
import { Link } from "react-router-dom";

const Lottery = (props) => {
    const { path } = props;
    const [ windowSize, setWindowSize] = useState(getWindowDimensions());
    const [ collapse1, setCollapse1 ] = useState(false);
    const [ collapse2, setCollapse2 ] = useState(false);
    const [ roundTag, setRoundTag ] = useState(true);

    ChartJS.register(ArcElement, Tooltip, Legend);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const details = [
        {title: 'Match first 1', token: '478 SFW', val: '~$2,077'},
        {title: 'Match first 1', token: '478 SFW', val: '~$2,077'},
        {title: 'Match first 1', token: '478 SFW', val: '~$2,077'},
        {title: 'Match first 1', token: '478 SFW', val: '~$2,077'},
        {title: 'Match first 1', token: '478 SFW', val: '~$2,077'},
        {title: 'Match first 1', token: '478 SFW', val: '~$2,077'},
    ];

    const playSteps = [
        {title: 'Buy Tickets', desc: 'Prices are set when the round starts, equal to 5 USD in SFW per ticket.'},
        {title: 'Wait for the Draw', desc: 'There is one draw every day alternating between 0 AM UTC and 12 PM UTC.'},
        {title: 'Check for Prizes', desc: 'Once the round’s over, come back to the page and check to see if you’ve won!'},
    ];

    const prizeFounds = [
        {title: 'Ticket Purchases', desc: '100% of the SFW paid by people buying tickets that round goes back into the prize pools.'},
        {title: 'Rollover Prizes', desc: 'After every round, if nobody wins in one of the prize brackets, the unclaimed SFW for that bracket rolls over into the next round and are redistributed among the prize pools.'},
        {title: 'SFW Injections', desc: 'An average total of 35,000 SFW from the treasury is added to lottery rounds over the course of a week. This SFW is of course also included in rollovers! Read more in our guide to SFW Tokenomics'},
    ];

    const data = {
        labels: ['Matches first 1', 'Matches first 2', 'Matches first 3', 'Matches first 4', 'Matches first 5', 'Matches all 6'],
        datasets: [
          {
            label: '',
            data: [15, 15, 5, 20, 30, 10],
            backgroundColor: [
              'rgb(215, 80, 178)',
              'rgb(255, 227, 98)',
              'rgb(133, 197, 78)',
              'rgb(2, 142, 117)',
              'rgb(54, 232, 245)',
              'rgb(168, 129, 252)',
            ],
            borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            'rgba(255, 255, 255)',
            ],
            borderWidth: 1,
          },
        ],
    };

    const handleCollapse1 = (e) => {
        setCollapse1(!collapse1);
    }

    const handleCollapse2 = (e) => {
        setCollapse2(!collapse2);
    }

    const handleRoundTag = () => {
        setRoundTag(!roundTag);
    }

    return (
        <Layout path={path}>
            <Col className="lottery">
                <Div className={`${windowSize.width > 1121 ? 'container mt-4': ''}`}>
                    <Row className="d-flex justify-content-center">
                        <Col lg={10} md={10} sm={12}>
                            <Div className="buy-tickedts panel py-4 d-flex flex-column justify-content-center align-items-center">
                                <b className="mt-5"><h6 style={{ fontWeight: 900 }}>The SecretFinance Lottery</h6></b>
                                <h1 className="mt-2">$121.072</h1>
                                <b className="mt-2"><h6>in prizes!</h6></b>
                                <Button className="mb-4 mt-3 btn-buy-tickets">Buy Tickets</Button>
                            </Div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <h2 className="text-center text-white mt-4"><b>Get your tickets now !</b></h2>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={10} md={10} sm={12}>
                            <Div className='ticket-draw panel mt-4'>
                                <Div className='title d-flex justify-content-between align-items-center'>
                                    <h6 className="text-white"><b>Next Draw</b></h6><h6>#684 | Draw: Oct 12, 2022, 8:00 AM</h6>
                                </Div>
                                <Div className="desc mt-4">
                                    <Row>
                                        <Col lg={3} md={3} sm={12} className='d-flex align-items-center'>
                                            <h6><b>Prize Pot</b></h6>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <h2><b>~$122.045</b></h2>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col lg={3} md={3} sm={12} className='d-flex align-items-center'>
                                            <h6><b>Your tickets</b></h6>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <Button className="btn-buy-tickets">Buy Tickets</Button>
                                        </Col>
                                    </Row>
                                </Div>
                                <Div className={`details mt-4 ${collapse1 ? 'animation py-3' : ''}`}>
                                    <p className="text-center">Match the winning number in the same order to share prizes. Current prizes up for grabs:</p>
                                    <Row>
                                        {
                                            details.map((item, index) => {
                                                return (
                                                    <Col key={index} lg={3} md={3} sm={6} className='detail text-center'>
                                                        <p>{item.title}</p>
                                                        <h6>{item.token}</h6>
                                                        <p className="text-gray">{item.val}</p>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Div>
                                <Div className='footer mt-4 d-flex justify-content-center'>
                                    {!collapse1 ? <Button onClick={handleCollapse1}>Details <FaAngleDown /></Button> : <Button onClick={handleCollapse1}>Hide <FaAngleUp /></Button>}
                                    
                                </Div>
                            </Div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <h2 className="text-center text-white mt-4"><b>Finished Rounds</b></h2>
                        <Div className="text-center">
                            <Div className='round-tab'>
                                <Button className={`${roundTag ? 'active' : ''}`} onClick={handleRoundTag}>All History</Button>
                                <Button className={`${!roundTag ? 'active' : ''}`} onClick={handleRoundTag}>Your History</Button>
                            </Div>
                        </Div>
                    </Row>
                    {
                        roundTag ? 
                            <Row className="d-flex justify-content-center">
                                <Col lg={10} md={10} sm={12}>
                                    <Div className='ticket-draw panel mt-4'>
                                        <Div className='title d-flex justify-content-between align-items-center'>
                                            <Div>
                                                <h6 className="text-white"><b>Round</b></h6>
                                                <small>Drawn Oct 12, 2022, 8:00 PM</small>
                                            </Div>
                                            <h6>#684 | Draw: Oct 12, 2022, 8:00 AM</h6>
                                        </Div>
                                        <Div className="desc mt-4">
                                            <Row>
                                                <Col lg={3} md={3} sm={12} className='d-flex align-items-center'>
                                                    <h6><b>Prize Pot</b></h6>
                                                </Col>
                                                <Col lg={6} md={6} sm={12}>
                                                    <h2><b>~$122.045</b></h2>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col lg={3} md={3} sm={12} className='d-flex align-items-center'>
                                                    <h6><b>Your tickets</b></h6>
                                                </Col>
                                                <Col lg={6} md={6} sm={12}>
                                                    <Button className="btn-buy-tickets">Buy Tickets</Button>
                                                </Col>
                                            </Row>
                                        </Div>
                                        <Div className={`details mt-4 ${collapse2 ? 'animation py-3' : ''}`}>
                                            <p className="text-center">Match the winning number in the same order to share prizes. Current prizes up for grabs:</p>
                                            <Row>
                                                {
                                                    details.map((item, index) => {
                                                        return (
                                                            <Col key={index} lg={3} md={3} sm={6} className='detail text-center'>
                                                                <p>{item.title}</p>
                                                                <h6>{item.token}</h6>
                                                                <p className="text-gray">{item.val}</p>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Div>
                                        <Div className='footer mt-4 d-flex justify-content-center'>
                                            {!collapse2 ? <Button onClick={handleCollapse2}>Details <FaAngleDown /></Button> : <Button onClick={handleCollapse2}>Hide <FaAngleUp /></Button>}
                                            
                                        </Div>
                                    </Div>
                                </Col>
                            </Row>
                            :
                            <Row className="d-flex justify-content-center">
                                <Col lg={10} md={10} sm={12}>
                                    <Div className='ticket-draw panel mt-4'>
                                        <Div className='title d-flex justify-content-between align-items-center'>
                                            <Div>
                                                <h6 className="text-white"><b>Round</b></h6>
                                                <small>Drawn Oct 12, 2022, 8:00 PM</small>
                                            </Div>
                                            <h6>#684 | Draw: Oct 12, 2022, 8:00 AM</h6>
                                        </Div>
                                        <Div className="desc mt-4">
                                            <Row className="d-flex justify-content-center">
                                                <Col lg={4} md={4} sm={12}>
                                                    <Button className="btn-buy-tickets">Connect Wallet</Button>
                                                </Col>
                                            </Row>
                                        </Div>
                                        <Div className='footer mt-4 d-flex justify-content-center pt-3 text-gray'>
                                            Only showing data for Lottery V2
                                        </Div>
                                    </Div>
                                </Col>
                            </Row>
                    }
                    <Row className="mt-5">
                        <h2 className="text-center text-white mt-4"><b>How to Play</b></h2>
                    </Row>
                   <Row className="mt-4">
                    {
                        playSteps.map((item, index) => {
                            return (
                                <Col key={index} lg={4} md={4} sm={12} className='mt-2'>
                                    <Div className='panel'>
                                        <Div className='d-flex justify-content-end'>
                                            <small><b>STEP {index + 1}</b></small>
                                        </Div>
                                        <Div className='mt-3'>
                                            <h6 className="text-orange"><b>{item.title}</b></h6>
                                            <small className="text-gray mt-4">{item.desc}</small>
                                        </Div>
                                    </Div>
                                </Col>
                            )
                        })
                    }
                   </Row>
                   <BorderLine />
                   <Row className="mt-5">
                        <Col lg={8} md={8} sm={12}>
                            <h5><b className="text-orange">Prize Funds</b></h5>
                            <p className="text-gray mt-4">The prizes for each lottery round come from three sources:</p>
                            {
                                prizeFounds.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <h6 className=" mt-2"><b className="text-white">{item.title}</b></h6>
                                            <small className="text-gray"> ~ {item.desc}</small>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <Div className='panel text-white'>
                                <Pie data={data} />
                            </Div>
                        </Col>
                   </Row>
                   <BorderLine />
                   <Row className="mt-4">
                        <Col lg={6} md={6} sm={12} className={`d-flex mt-2 ${windowSize.width > 1121 ? 'justify-content-end' : 'justify-content-center'}`}>
                            <img src={FinanceLogo} alt="" width='150' height='150' />
                        </Col>
                        <Col lg={3} md={3} sm={12} className='d-flex align-items-center mt-2'>
                            <Div>
                                <h6><b className="text-white">Still got question?</b></h6>
                                <small className="text-white">Check our in-depth guide on <Link to="" className="text-orange">how to play the PancakeSwap lottery!</Link> </small>
                            </Div>
                        </Col>
                   </Row>
                </Div>
                <Footer />
            </Col>
        </Layout>
    )
}

export default Lottery;