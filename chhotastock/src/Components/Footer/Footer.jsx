import React from 'react'
import "./footer.css"
import InvestPeLogo from "../../../src/Assets/HomePage/InvestPeLogo.png"
import playstore from "../../../src/Assets/HomePage/playstore.png"
import facebook from "../../../src/Assets/HomePage/facebook.png"
import youtube from "../../../src/Assets/HomePage/youtube.png"
import instagram from "../../../src/Assets/HomePage/instagram.png"
import twitter from "../../../src/Assets/HomePage/twitter.png"

function Footer() {
    return (
        <div className='footer-main-div'>
            <div className='footer'>
                <div className='footer-logo-div' style={{ marginLeft: "-55px" }}>
                    <img src={InvestPeLogo} alt="InvestPeLogo" width={"100%"} />
                    <p>INVEST TO PAY. INVEST TO SPEND</p>
                </div>

                <div className='footer-mid-div'>
                    <div>
                        <span className='footer-mid-div-heading'>Contact Us</span>
                        <div className='contact'>
                            <span>8089225625</span>
                            <span>contact@chotastock.com</span>
                        </div>
                    </div>
                    <div>
                        <span className='footer-mid-div-heading'>Company</span>
                        <div className='company'>
                            <span>About Us</span>
                            <span>Privacy policy</span>
                            <span>Terms and Conditions</span>
                        </div>
                    </div>
                    <div>
                        <span className='footer-mid-div-heading'>Quick Links</span>
                        <div className='quicklinks'>
                            <span>Home</span>
                            <span>Gateway</span>
                            <span>Blog</span>
                        </div>
                    </div>
                    <div>
                        <span className='footer-mid-div-heading'>Download the App Now!</span>
                        <div>
                            <img src={playstore} alt="playstore" />
                        </div>
                    </div>
                </div>

                <div className='social-links'>
                    <span>Find Us On</span>
                    <div className='social-icons'>
                        <div>
                            <img src={facebook} alt="fb" />
                        </div>
                        <div>
                            <img src={youtube} alt="yt" />
                        </div>
                        <div>
                            <img src={instagram} alt="insta" />
                        </div>
                        <div>
                            <img src={twitter} alt="twit" />
                        </div>
                    </div>
                </div>

                <div className='footer-bottom-div'>
                    <p>© 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.</p>
                    <div style={{ lineHeight: "1px" }}>
                        <p>Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes. </p>
                        <p>Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing</p>
                    </div>
                    <p>Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India</p>
                    <p>For any query / feedback / clarifications, email at contact@chhotastock.com</p>
                    <div style={{ lineHeight: "1px" }}>
                        <p>All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only facilitates investments</p>
                        <p>in such baskets, portfolios.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer