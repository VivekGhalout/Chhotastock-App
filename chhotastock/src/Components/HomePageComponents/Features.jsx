import React from 'react'
import mmtrip_logo from "../../../src/Assets/HomePage/mmtrip_logo.png"
import bounce_logo from "../../../src/Assets/HomePage/bounce_logo.png"
import apple_logo from "../../../src/Assets/HomePage/apple_logo.png"
import myntra_logo from "../../../src/Assets/HomePage/myntra_logo.png"
import amazon_logo from "../../../src/Assets/HomePage/amazon_logo.png"
import croma_logo from "../../../src/Assets/HomePage/croma_logo.png"
import caratlane_logo from "../../../src/Assets/HomePage/caratlane_logo.png"
import easeMyTrip_logo from "../../../src/Assets/HomePage/easeMyTrip_logo.png"
import pepperfry_logo from "../../../src/Assets/HomePage/pepperfry_logo.png"
import bike_card from "../../../src/Assets/HomePage/bike_card.png"
import mobile_card from "../../../src/Assets/HomePage/mobile_card.png"
import laptop_card from "../../../src/Assets/HomePage/laptop_card.png"
import laptop from "../../../src/Assets/HomePage/laptop.png"

function Features() {
    return (
        <section className='features-comp'>
            <div className='features-comp-main-div'>

                <div className='feature-div-left'>
                    <p>FEATURES</p>
                    <h3>SAVE NOW. BUY LATER.<br />SIMPLE & REALISTIC </h3>
                    <h4>Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.</h4>
                    <div className="get-app-btn-div">
                        <button>
                            Get the App
                        </button>
                        <p>Learn More</p>
                    </div>
                </div>
                <div className='feature-div-right'>
                    <div className='company-icon-div'>
                        <div style={{ translate: "15px 175px" }}>
                            <img src={mmtrip_logo} alt="mmtrip_logo" width={"48px"} height={"48px"} />
                        </div>
                        <div style={{ translate: "0px 105px" }}>
                            <img src={bounce_logo} alt="bounce_logo" width={"80px"} height={"44px"} />
                        </div>
                        <div style={{ translate: "10px 30px" }}>
                            <img src={apple_logo} alt="apple_logo" width={"78px"} height={"78px"} />
                        </div>
                        <div style={{ translate: "15px 10px" }}>
                            <img src={myntra_logo} alt="myntra_logo" width={"100px"} height={"65px"} />
                        </div>
                        <div style={{ translate: "30px 10px" }}>
                            <img src={amazon_logo} alt="amazon_logo" width={"65px"} height={"62px"} />
                        </div>
                        <div style={{ translate: "75px 35px" }}>
                            <img src={croma_logo} alt="croma_logo" width={"95px"} height={"78px"} />
                        </div>
                        <div style={{ translate: "35px 120px" }}>
                            <img src={caratlane_logo} alt="caratlane_logo" width={"160px"} height={"50px"} />
                        </div>
                        <div style={{ translate: "-90px 185px" }}>
                            <img src={easeMyTrip_logo} alt="easeMyTrip_logo" width={"90px"} height={"40px"} />
                        </div>
                        <div style={{ translate: "-160px 260px" }}>
                            <img src={pepperfry_logo} alt="pepperfry_logo" width={"145px"} height={"30px"} />
                        </div>
                    </div>
                    <div className='cards-div'>
                        <div className='bike-card'>
                            <img src={bike_card} alt="bike_card" width={"100%"} />
                        </div>
                        <div className='laptop-card'>
                            <div style={{translate:"-25px 175px"}}>
                                <img src={laptop} alt="laptop" />
                            </div>
                            <div style={{width:"422px", height:"197px"}}>
                                <img src={laptop_card} alt="laptop_card" width={"100%"}/>
                            </div>
                        </div>
                        <div className='mobile-card'>
                            <img src={mobile_card} alt="mobile_card" width={"100%"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features