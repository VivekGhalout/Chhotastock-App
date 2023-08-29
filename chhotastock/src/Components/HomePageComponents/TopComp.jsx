import React from 'react'
import stockticker from "../../../src/Assets/HomePage/stockticker.png"
import InvestPeLogo from "../../../src/Assets/HomePage/InvestPeLogo.png"
import topMobile from "../../../src/Assets/HomePage/topMobile.png"
import { useNavigate } from "react-router-dom";



function TopComp() {
    const navigate = useNavigate()

    return (
        <section>
            <div className='stock-tickers'>
                <img src={stockticker} alt="stockticker" width={"100%"} height={"100%"} />
            </div>

            <div className='navbar'>
                <div className='logo-div' onClick={() => {navigate('/')}}>
                    <img src={InvestPeLogo} alt="InvestPeLogo" width={"100%"} />
                    <p>INVEST TO PAY. INVEST TO SPEND</p>
                </div>
                <div className='search-bar'>
                    <input className="nosubmit" type="search" placeholder="Search stocks, ETFs, indices" />
                </div>
                <div className='login-btn' onClick={() => {navigate('/secondpage')}}>
                    <button>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.83472 16.9986H22.6681M22.6681 16.9986L17.7097 12.7486M22.6681 16.9986L17.7097 21.2486" stroke="#171E27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.7527 9.91668C12.7699 6.83538 12.9065 5.16668 13.9951 4.07814C15.2399 2.83334 17.2434 2.83334 21.2503 2.83334H22.6669C26.6738 2.83334 28.6774 2.83334 29.9221 4.07814C31.1669 5.32294 31.1669 7.3264 31.1669 11.3333V22.6667C31.1669 26.6736 31.1669 28.677 29.9221 29.9218C28.6774 31.1667 26.6738 31.1667 22.6669 31.1667H21.2503C17.2434 31.1667 15.2399 31.1667 13.9951 29.9218C12.9065 28.8333 12.7699 27.1646 12.7527 24.0833" stroke="#171E27" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        Login
                    </button>
                </div>
            </div>

            <div className='bottom-div'>
                <h1>Knowledge Based <br/>Investing & Trading</h1>
                <p>Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools</p>
                <div className='mobile-img-div'>
                    <img src={topMobile} alt="topMobile" width={"85%"}/>
                </div>
            </div>


        </section>
    )
}

export default TopComp