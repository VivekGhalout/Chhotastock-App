import React from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import mid from "../../../src/Assets/SecondPage/mid.png"
import left from "../../../src/Assets/SecondPage/left.png"
import right from "../../../src/Assets/SecondPage/right.png"
import investstack_icon from "../../../src/Assets/SecondPage/investstack_icon.png"

function InvestStack() {
    return (
        <section>
            <div className='investstack-main-div'>
                <div className='investstack-texts'>
                    <div className='investstack-texts-left'>
                        <div>
                            INVESTMENT STACK
                        </div>
                        <div>
                            for India
                        </div>
                        <div>
                            Elevate Your Investment Strategy with Our <span style={{ color: "#28B570" }}>Comprehensive APIs</span>
                        </div>
                    </div>

                    <div className='investstack-texts-right'>
                        <div>
                            Launch financial services in a matter of days. Take your pick from our flexible APIs, SDKs, or ready-to-use screens.
                        </div>
                        <div>
                            See our products
                            <IoIosArrowDropdownCircle size={"30px"} color='gray' />
                        </div>
                        <button>
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className='investstack-cards'>
                    <div>
                        <div>
                            <img src={left} alt="left" width={"70%"} />
                            <div style={{translate: "30px -210px", transform: "rotate(-18deg)"}}>
                                <img src={investstack_icon} alt="investstack_icon" width={"10%"}/>
                                <div style={{fontSize:"37px", fontWeight:"400", marginTop:"0px"}}>Stocks</div>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={mid} alt="mid" width={"70%"} />
                            <div style={{translate: "40px -250px"}}>
                                <img src={investstack_icon} alt="investstack_icon" width={"15%"}/>
                                <p style={{fontSize:"37px", fontWeight:"400", marginTop:"0px"}}>Mutual Funds</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={right} alt="right" width={"70%"} />
                            <div style={{translate: "120px -80px", transform: "rotate(23deg)" }}>
                                <img src={investstack_icon} alt="investstack_icon" width={"10%"}/>
                                <p style={{fontSize:"36px", fontWeight:"400", marginTop:"0px"}}>Digital Gold</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InvestStack