import { Row,  Col, Button } from 'react-bootstrap';
import { FaRegCopy, FaArrowUp, FaQuestionCircle, FaRegFileAlt, FaRegEye } from 'react-icons/fa';
import { BsBoxArrowUpRight, BsLink45Deg, BsFillArrowUpRightCircleFill, BsArrowUpRight  } from 'react-icons/bs';
import Item from '../compnents/ProfileItem';
import UserLogo from '../assets/user.png';
import Div from '../compnents/Div';
import { getWindowDimensions } from '../utils/GlobalFuns';
import { useState, useEffect } from 'react';
import Layout from './Layout';
import { Sparklines, SparklinesLine  } from 'react-sparklines';
import Footer from '../compnents/Footer';

const Profile = (props) => {
    const { path } = props;
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

    const datas= [
        {title: "Patners", value: "13956", underVal: "13"},
        {title: "Team", value: "754158", underVal: "57"},
        {title: "Ratio", value: "1123%", underVal: "0 %"},
    ];

    const programs = [
        {title: "x3", value: "306815 BUSD", wraps: 12, image: "blue-blur.png", color: "blue"},
        {title: "x4", value: "373720 BUSD", wraps: 12, image: "purple-blur.png", color: "purple"},
        {title: "xXx", value: "158062.6 BUSD", wraps: 12, image: "pink-blur.png", color: "pink"},
        {title: "xGold", value: "144234 BUSD", wraps: 14, image: "gold-blur.png", color: "orange"},
    ];

    const members = [
        {title: "Members total", value: "755121", underVal: "2738"},
        {title: "Members received, BUSD", value: "71345207.88", underVal: "131727.1"},
    ]
    let innerHtml = programs.map((item, index) => {
        return (
            <Col lg={6} md={6} key={index} className="mt-5" style={{ height: "100%" }}>
                <Col className="item" style={{ backgroundImage: `url(${item.image})` }}>
                    <BsArrowUpRight className="btn-link" />
                    <Col className="d-flex justify-content-between align-items-center">
                        <h3>{item.title}</h3><h3>{item.value}</h3>
                    </Col>
                    <Col className="preview mt-4">
                        <Row>
                            <Col lg={5} md={12} className="wrap">
                                <Row>
                                    {[...Array(item.wraps)].map((x, i) =>
                                        <Col key={i} lg={4} className='wrap-dot'></Col>
                                    )}
                                </Row>
                            </Col>
                            <Col className="d-flex justify-content-end align-items-end">
                                <Button className={`px-4 py-2 btn-${item.color}`}>
                                    <span>Preview</span><BsFillArrowUpRightCircleFill/>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Col>
        )
    });


    return (
        <Layout path={path}>
            <Col className='profile'>
                <Div className={`${windowSize.width > 1121 ? 'container': ''}`}>
                    <Row>
                        <Col lg={6} sm={12} className='user-logo d-flex justify-content-center align-items-center py-4'>
                            <img src={UserLogo} alt="" width="120" height="120" />
                            <Col>
                                <h1>ID 1</h1>
                                <p>0x14DcBeA <FaRegCopy /></p>
                            </Col>
                        </Col>
                        <Col lg={6} sm={12} className="personal-signup py-4">
                            <Col className="px-5 py-3 item">
                                <Col className="link">
                                    <h3>Personal link</h3>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h2>secretfinance.com </h2>
                                        <p><FaRegCopy /></p>
                                    </div>
                                </Col>
                                <Col className="under">
                                    <Div><span>Not a member yet?</span><span> Sign up with this upline</span></Div>
                                    <Button className="py-0">Sign up</Button>
                                </Col>
                            </Col>
                        </Col>
                    </Row>
                    <Row className="current mt-4">
                        <Col lg={6} md={6} sm={12} className="">
                            <Col className='d-flex justify-content-between'>
                                {
                                    datas.map((item, index) => {
                                        return  <Item data={item} key={index} />
                                    })
                                }
                            </Col>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='d-flex'>
                            <Div className='d-flex item p-3 mb-5' style={{width: '100%'}}>
                                <Div>
                                    <p className='text-gray'>Profits <FaQuestionCircle /></p>
                                    <h3 >984 400 BUSD</h3>
                                    <Div className="d-flex align-items-center" style={{ gap: '0.5rem' }}><FaArrowUp /> 347.5 BUSD</Div>
                                </Div>
                                <Div className='d-flex' style={{flex: 1}}>
                                    <Sparklines data={[0, 5, 5, 10, 10, 8, 8, 20, 20]}>
                                        <SparklinesLine color="white" />
                                    </Sparklines>
                                </Div>
                            </Div>
                        </Col>
                    </Row>
                    <Col className='d-flex justify-content-start align-items-center mt-4 mt-5 mb-2 title-label'>
                        <h1>Referral Programs</h1>
                        <Button className="py-0"><FaQuestionCircle /> Info</Button>
                    </Col>
                    <Row className='programs'>
                        { innerHtml }
                    </Row>
                    <Col className='d-flex justify-content-start align-items-center mt-4 mt-5 mb-2 title-label'>
                        <h1 className="">Platform recent activity</h1>
                        <FaQuestionCircle style={{ color: 'white' }} />
                    </Col>
                    <Row className='activity'>
                        <Col lg={8} md={12}>
                            <Col className="activity-tbl">
                                <Col style={{ height: 700, overflow: 'hidden', overflowY: 'scroll' }}>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                    <Col className="tbl-row py-3">
                                        <Col className="left">
                                            <div className='d-flex justify-content-start'>
                                                <Col className="bg-green"><FaRegFileAlt /></Col>
                                                <span className="id px-3">ID 636009</span>
                                                <span className="id-bonus">+<span className='text-white'>5 BUSD</span> in<span className="text-blue">x4</span></span>
                                            </div>
                                        </Col>
                                        <Col className="right">
                                            <BsBoxArrowUpRight />
                                            <span>-19 hours</span>
                                        </Col>
                                    </Col>
                                </Col>
                                <Button className='btn-see-more py-3 mt-4'><FaRegEye /> See More</Button>
                            </Col>
                        </Col>
                        <Col lg={4} md={12} className="members">
                            {
                                members.map((item, index) => {
                                    return (
                                        <Item data={item} key={index} />
                                    )
                                })
                            }
                            <Col className="item contracts p-4">
                                <Col className="item-row py-2">Forsage BUSD Contracts</Col>
                                <Col className="item-row py-2">
                                    <Col className='text-gray'>x3/x4</Col>
                                    <Col className="history text-white"><span>0x5ac...D97</span><span><FaRegCopy /></span><span><BsLink45Deg /></span></Col>
                                </Col>
                                <Col className="item-row py-2">
                                    <Col className='text-gray'>xXx</Col>
                                    <Col className="history text-white"><span>0x5ac...D97</span><span><FaRegCopy /></span><span><BsLink45Deg /></span></Col>
                                </Col>
                                <Col className="item-row py-2">
                                    <Col className='text-gray'>xGold</Col>
                                    <Col className="history text-white"><span>0x5ac...D97</span><span><FaRegCopy /></span><span><BsLink45Deg /></span></Col>
                                </Col>
                                <h4 className="mt-1">Transactions made <FaQuestionCircle /></h4>
                                <h1 className='mt-3'>2875871</h1>
                                <Col className="d-flex justify-content-start align-items-center" style={{ borderBottom: '1px solid hsl(0deg 0% 100% / 10%)' }}>
                                    <h6><FaArrowUp /></h6><h5> 8075</h5>
                                </Col>
                                <h4 className="mt-1">Turnover, BUSD <FaQuestionCircle /></h4>
                                <h1 className='mt-3'>142690415.76</h1>
                                <Col className="d-flex justify-content-start align-items-center">
                                    <h6><FaArrowUp /></h6><h5> 263454.2</h5>
                                </Col>
                            </Col>
                        </Col>
                    </Row>
                    
                </Div>
                <Footer />
            </Col>
        </Layout>
    )
}

export default Profile;