import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import stockticker from "../../../src/Assets/SecondPage/stockticker.png"
import InvestPeLogo from "../../../src/Assets/HomePage/InvestPeLogo.png"
import mutualfund from "../../../src/Assets/SecondPage/mutualfund.png"
import indianiquity from "../../../src/Assets/SecondPage/indianiquity.png"
import digitalgold from "../../../src/Assets/SecondPage/digitalgold.png"
import fd_logo from "../../../src/Assets/SecondPage/fd_logo.png"
import market_research from "../../../src/Assets/SecondPage/market_research.png"
import historical from "../../../src/Assets/SecondPage/historical.png"
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    return (
        <div>
            <div className='stock-tickers'>
                <img src={stockticker} alt="stockticker" width={"100%"} height={"100%"} />
            </div>
            <div className='sec-comp-nav-main'>
                <div className='sec-comp-navbar'>
                    <div className='sec-comp-navbar-left'>
                        <div className='sec-comp-logo-div' onClick={() => {navigate('/')}}>
                            <img src={InvestPeLogo} alt="InvestPeLogo" width={"100%"} />
                            <p>INVEST TO PAY. INVEST TO SPEND</p>
                        </div>
                        <div className='gateway-div'>
                            <span>Gateway</span>
                            <svg width="19" height="19" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="11.5" r="11.5" fill="#F05656" />
                            </svg>

                        </div>
                    </div>

                    <div className='sec-comp-navbar-right'>
                        <div class="dropdown">
                            <button class="dropbtn">Products
                                <RiArrowDropDownLine size={"50px"} />
                            </button>
                            <div class="dropdown-content">

                                <div class="row">
                                    <div class="column">
                                        <h3>INVESTMENTS</h3>
                                        <div className='dropdown-row'>
                                            <div>
                                                <img src={mutualfund} alt="mutualfund" width={"100%"} />
                                            </div>
                                            <div className='heading'>
                                                Mutual Funds
                                                <p>E2E infrastructure for mutual fund investing</p>
                                            </div>
                                        </div>
                                        <div className='dropdown-row'>
                                            <div>
                                                <img src={indianiquity} alt="indianiquity" width={"100%"} />
                                            </div>
                                            <div className='heading'>
                                                Indian Equity
                                                <p>Ready-made stock baskets with major broker integrations</p>
                                            </div>
                                        </div>
                                        <div className='dropdown-row'>
                                            <div>
                                                <img src={digitalgold} alt="digitalgold" width={"100%"} />
                                            </div>
                                            <div className='heading'>
                                                Digital Gold
                                                <p>Allow your users to buy & sell digital gold</p>
                                            </div>
                                        </div>
                                        <div className='dropdown-row'>
                                            <div>
                                                <img src={fd_logo} alt="fd_logo" width={"100%"} />
                                            </div>
                                            <div className='heading'>
                                                Fixed Deposits
                                                <p>Book FDs in one-click without opening a bank account</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <h3>DATA</h3>
                                        <div className='dropdown-row'>
                                            <div>
                                                <img src={market_research} alt="market_research" width={"100%"} />
                                            </div>
                                            <div className='heading'>
                                                Market Research
                                                <p>Deep-tech stock research & analysis</p>
                                            </div>
                                        </div>
                                        <div className='dropdown-row'>
                                            <div>
                                                <img src={historical} alt="historical" width={"100%"} />
                                            </div>
                                            <div className='heading'>
                                                Historical Performance
                                                <p>Multi timeframe historical data for stocks, mutual funds & digital gold</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sec-comp-aboutus'>
                            AboutUs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar