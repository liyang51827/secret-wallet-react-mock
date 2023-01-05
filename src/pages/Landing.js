import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Div from "../compnents/Div";
import Footer from "../compnents/Footer";
import { getWindowDimensions } from "../utils/GlobalFuns";
import Layout from "./Layout";
import FinanceLogo from '../assets/smartvault_plus.png';
import ChainflowLogo from '../assets/chainflow.png';
import KronosLogo from '../assets/kronos.png';
import DeltaLogo from '../assets/delta.png';
import NewfieldFundLogo from '../assets/newfieldfund.png'
import ZionLogo from '../assets/zion.png';
import VulkaniaLogo from '../assets/vulkania.png';
import FerrumLogo from '../assets/ferrum.svg';
import CyberfiLogo from '../assets/cyberfi.svg';
import UnificationLogo from '../assets/unification.png';
import LiquiddriverLogo from '../assets/liquiddriver.png';
import SpiritswapLogo from '../assets/spiritswap.png';
import MeetNftLogo from '../assets/meetnft.png';
import any_erc20Logo from '../assets/any_erc20.gif';
import BatchMintingLogo from '../assets/batch_distribution.png';
import LeftBeautyUnlockedLogo from '../assets/left_beauty_unlocked.png';
import NFTLogo from '../assets/NFTLogo.jpeg';
import '../scss/landing.scss';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaTelegram, FaTwitter, FaDiscord, FaMailBulk } from 'react-icons/fa';
import BorderLine from "../compnents/BorderLine";
import { Link } from "react-router-dom";
import AdvancedFeatures from "../compnents/AdvancedFeatures";
import TeamCard from "../compnents/TeamCard";


const Landing = (props) => {
    const { path } = props;
    const [ windowSize, setWindowSize] = useState(getWindowDimensions());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const beauty_unlocked_datas = [
        {title: 'Time Lock', desc: 'Time Locks are a powerful way to lock away transferable value. These are locks that unlock after a period of time has passed, permitting the value within to be withdrawn only following the passing of that period.'},
        {title: 'Value Lock', desc: 'Create interesting incentive structures with Value Locks. Maybe you’d like to specify vesting terms to unlock after a token exceeds a certain value.'},
        {title: 'Address Lock', desc: 'Unlock the full power of Revest Smart Vaults when you use Address Locks. Use address locks created by the community or create one of your own for your specific use case.'}
    ];

    const features = [
        {style: 'row-reverse', title: 'Fractionalizable', sub_title: 'Split Your FNFT', desc: 'Because your ERC-20 tokens are able to be fractionalized, so is your smart vault.Your smart vaults can be split, without affecting the lock. Now you are free to go ahead and sell just a small piece of your original lock without effecting the rest!',img: "./images/fractionalizable.png"},
        {style: 'row', title: 'Multiple Deposits',sub_title: 'Keep on Depositing', desc: "Want to add more tokens to a locked Smart Vault? No problem. By default Smart Vaults are able to accept additional deposits even after they are locked!Due to Revest Smart Vault's impressive composability, you also have the ability to disallow additional deposits after minting. The choice is yours.", img: './images/NFTLogo.jpeg'},
        {style: 'row', title: 'Tradeable', sub_title: 'Trade on an NFT Marketplace', desc: 'Buy and sell Smart Vaults on the open market. Sell a Smart Vault on OpenSea, EcoFi, or other NFT marketplace. Buying and selling of locked liquidity allows for speculation of the underlying asset.', img: './images/opensea.png'},
        {style: 'row-reverse', title: 'Trusted', sub_title: 'Your Funds Are Safe', desc: "Revest Smart Vaults are trusted to stay locked until the unlock conditions are met. Just as importantly, Revest Smart Vaults are trusted to be able to be unlocked once the unlock conditions are met.", img: './images/trusted.gif'},
        {style: 'row', title: 'Fully Audited', sub_title: 'Audited by Solidity Finance', desc: 'Revest Finance has recieved the full seal of approval by Solidity Auditors, one of the top audit firms around the world.', img: "./images/solidity_finance.png"},
        {style: 'row-reverse', title: 'Simple UI', sub_title: 'Intuiting Smart Vault Creation', desc: "Too often DeFi software is obscured behind complex interfaces that stifle mass adoption. Revest changes that with a simple and intuitive User Interface.Powerful tools become simple to use with Revest Finance.", img: './images/simple_ui.png'},
        {style: 'row-reverse', title: 'Metamask Support', sub_title: 'Easy Wallet Integration', desc: 'Connect your wallet, your way, with MetaMask. Industry standard and easy to use. MetaMask is the link between your wallet and Revest.', img: './images/metamask (1).png'},
        {style: 'row', title: 'Ethereum Blockchain', sub_title: 'Recognisable', desc: 'Revest is launching on the Ethereum Blockchain, leading the way in the next generation of decentralized finance.', img: './images/eth-min.png'}
    ];

    const team_cards = [
        {name: 'Rob Montgomery', job: 'CEO', desc: 'BTC early adopter, Solidity dev, and Founder of Revest.', avatar: './avatars/TPPBLBU2Y-U010552QPFH-5c0fd36c9e80-512.jpg'},
        {name: 'Andany', job: 'Operations', desc: 'Generalist, researcher extraordinaire. Aspiring Philosopher.', avatar: './avatars/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'},
        {name: 'Josh', job: 'Senior Solidity Dev', desc: 'Debate scholar, Cybersecurity expert.', avatar: './avatars/arta.jpg'},
        {name: 'Adam', job: 'Director of Sales and Strategic Partnerships', desc: '17 years experience with roots in door to door; then commodity sales, and contract negotiation. Crypto old guard.', avatar: './avatars/charlie-green-3JmfENcL24M-unsplash.jpg'},
        {name: 'Benko', job: 'Communications Director', desc: 'Ex TradFi, Prop Trader Background, Start-up native.', avatar: './avatars/sergi.jpg'}
    ];

    return (
        <Layout path={path}>
            <Col className="landing">
                <Div className={`${windowSize.width > 1121 ? 'container mt-4': ''}`}>
                    <Row className="sfw-finance">
                        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                            <Div>
                                <h5 className="text-gray"><b>Your Secure Smart Vaults</b></h5>
                                <h1 className="mt-4"><b className="text-white">Secret Finance</b></h1>
                                <h5 className="text-gray mt-5">Mint Smart Vaults, stake RVST, NFTs, make illiquid positions liquid and much more!</h5>
                                <Div className='mt-4 d-flex gap-4'>
                                    <Button>LAUNCH APP <BsBoxArrowUpRight /></Button>
                                    <Button className="secondery-btn">JOIN TELEGRAM <BsBoxArrowUpRight /></Button>
                                </Div>
                            </Div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img src={FinanceLogo} alt="" width="400" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <h1 className="text-white text-center"><b>Our Partners</b></h1>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={3} md={3} sm={12}>
                            <BorderLine />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="our-partners" lg={12} md={12} sm={12}>
                            <img src={ChainflowLogo} alt="" className="filter" />
                            <img src={KronosLogo} alt="" className="filter" />
                            <img src={DeltaLogo} alt="" />
                            <img src={NewfieldFundLogo} alt="" />
                            <img src={ZionLogo} alt="" />
                            <img src={VulkaniaLogo} alt="" />
                            <img src={FerrumLogo} alt="" />
                            <img src={CyberfiLogo} alt="" />
                            <img src={UnificationLogo} alt="" />
                            <img src={LiquiddriverLogo} alt="" />
                            <img src={SpiritswapLogo} alt="" />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <h1 className="text-orange text-center mt-3"><b>$1,839,568.89</b></h1>
                        <h1 className="text-white text-center mt-3"><b>Total Value Locked</b></h1>
                        <h5 className="text-white text-center mt-5 mb-5"><b>Inside Revest FNFTs</b></h5>
                        <h3 className="text-white text-center mt-5"><b style={{ fontFamily: 'Montserrat'}}>A WORLDWIDE COMMUNITY</b></h3>
                        <Col lg={6} md={6} sm={12} className='community'>
                            <Link to="">
                                <h1 className="text-white"><FaTelegram style={{ color: '#41baf5' }} /></h1><h5 className="text-gray">4,700+</h5>
                            </Link>
                            <Link to="">
                                <h1 className="text-white"><FaTwitter style={{ background: '#1da1f3'}} /></h1><h5 className="text-gray">33,800+</h5>
                            </Link>
                            <Link to="">
                                <h1 className="text-white"><FaDiscord style={{ background: '#5662f6'}} /></h1><h5 className="text-gray">1,700+</h5>
                            </Link>
                            <Link to="">
                                <h1 className="text-white"><FaMailBulk style={{ background: '#1da1f3'}} /></h1><h5 className="text-gray">5,000+</h5>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8} md={8} sm={12} className='details-row d-flex'>
                            <h5 className="text-white">What do inheritance, insurance, and the ability to separate yield from principal have in common?</h5>
                            <h5 className="text-white">They are all applications of the blockchain that with existing on-chain tools aren't feasible.</h5>
                        </Col>
                        <h3 className="text-white text-center mt-4 mb-5">Revest changes that.</h3>
                    </Row>
                    <Row className="mt-5 mb-5">
                        <h1 className="text-white text-center mt-5"><b>Meet the Revest SmartVault</b></h1>
                        <h6 className="text-orange text-center mt-3"><b>Introducing SmartVaults - Powered by FNFT technology.</b></h6>
                        <img src={MeetNftLogo} alt="" />
                    </Row>
                    <Row className="mt-5 mb-5">
                        <h1 className="text-white text-center mt-5"><b>3 Composable Lock Types. Infinite Possibilites.</b></h1>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center mt-5">
                            <img src={LeftBeautyUnlockedLogo} alt="" width="350" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            {
                                beauty_unlocked_datas.map((item, index) => {
                                    return (
                                        <Div className="mt-5" key={index}>
                                            <h2><span className="border-bottom-2 text-white">{ item.title }</span></h2>
                                            <p className="text-gray mt-4">{ item.desc }</p>
                                        </Div>            
                                    )
                                })
                            }
                            
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Div className="mt-5">
                                <h2><span className="border-bottom-2 text-white">Lock Any ERC-20</span></h2>
                                <p className="text-gray mt-4">ERC-20s are the standard token type of the Ethereum blockchain, and now you can lock any ERC-20 in Revest Smart Vaults. Whether it be Chainlink, Dai, Wrapped Bitcoin, or any other token, it is fully compatible with Revest Smart Vaults.</p>
                            </Div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center mt-5">
                            <img src={any_erc20Logo} alt="" width="350" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <h1 className="text-white text-center mt-5"><b>Real World Use Cases</b></h1>
                        <h6 className="text-orange text-center mt-3"><b>Token Vesting, Time Controlled Unlocks, Inheritance, Endowments, Charitable Donations, and so much more.</b></h6>
                    </Row>
                    <Row className="mt-5 mb-5 d-flex justify-content-center">
                        <Col lg={8} md={8} sm={12} className="text-center mt-5">
                            <h2><span className="border-bottom-2 text-white">Team Vesting</span></h2>
                            <p className="text-gray mt-4">A pre-rolled solution to team vesting. Revest Smart Vaults put powerful Vesting structures at your fingertips. Instantly create simple Time Locks or create advanced incentives structures using a combination of Time and Value locks.</p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center mt-5">
                            <img src={BatchMintingLogo} alt="" width="350" />
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
                            <Div className="mt-5">
                                <h2><span className="border-bottom-2 text-white">Batch Minting</span></h2>
                                <p className="text-gray mt-4">When minting a new Smart Vault, you are not limited to a single vault creation.<br/><br />Maybe you are creating a dozen different Smart Vaults for a team. Maybe you are creating one hundred.</p>
                            </Div>
                        </Col>
                        <Col lg={8} md={8} sm={12} className="text-center mt-4">
                            <h2><span className="border-bottom-2 text-white">Batch Distribution</span></h2>
                            <p className="text-gray mt-4">Quickly and easily distribute Smart Vaults across an entire team. Rather than minting 50 Smart Vaults to your wallet and then sending each off individually, save time and gas by minting the Smart Vaults directly into the recipient’s wallet!<br/><br/>You can save even more time by copying and pasting a CSV of addresses and amounts to make the batch distribution process even smoother!</p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-5">
                        <h1 className="text-white text-center mt-5"><b>Advanced Features</b></h1>
                        <h6 className="text-orange text-center"><b>Revest takes locks to the next level, view some of the advanced features below.</b></h6>
                    </Row>
                    {
                        features.map((item, index) => {
                            return (
                                <AdvancedFeatures key={index} style={{flexDirection: item.style}} title={item.title} sub_title={item.sub_title} desc={item.desc} >
                                    <img src={item.img} alt="" width="350" />
                                </AdvancedFeatures>
                            )
                        })
                    }
                    <Row className="mt-5">
                        <h1 className="text-white text-center mt-5"><b>Revest Finance Team</b></h1>
                        <h6 className="text-orange text-center"><b>Meet the team behind the FNFT.</b></h6>
                    </Row>
                    <Row className="mt-4">
                        {
                            team_cards.map((item, index) => {
                                return (
                                    <TeamCard key={index} name={item.name} job={item.job} desc={item.desc} avatar={item.avatar} />
                                )
                            })
                        }
                    </Row>
                    <Row className="mt-5">
                        <h1 className="text-white text-center mb-5"><b className=" py-3 border-bottom-2">Audits</b></h1>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center mt-5">
                            <img src={NFTLogo} alt="" width="200" />
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center mt-5">
                            <img src={BatchMintingLogo} alt="" width="200" />
                        </Col>
                    </Row>
                </Div>
                <Footer />
            </Col>
        </Layout>
    )
}
export default Landing;