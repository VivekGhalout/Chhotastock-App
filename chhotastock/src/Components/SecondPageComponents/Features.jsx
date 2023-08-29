import React from 'react'
import protection from "../../../src/Assets/SecondPage/protection.png"
import tracking from "../../../src/Assets/SecondPage/tracking.png"
import flexibility from "../../../src/Assets/SecondPage/flexibility.png"
import easiness from "../../../src/Assets/SecondPage/easiness.png"

function Features() {
    return (
        <section style={{ marginTop: "-50px" }}>
            <div className='sec-comp-features'>

                <div className='sec-feature-div-left'>
                    <p>FEATURES</p>
                    <h3>Launch the most Engaging<br /> Invest-Tech Solutions</h3>
                    <h4>We offer a suite of B2B Invest-tech solutions, that are cost-effective way to offer an engaging investment experience to your customers, with a faster time to market</h4>
                    <div className="sec-get-started">
                        <button>
                            Get Started
                        </button>
                        <p>Learn More</p>
                    </div>
                </div>
                <div className='sec-feature-div-right'>
                    <div>
                        <div className='protection'>
                            <div>Protection</div>
                            <div>
                                <img src={protection} alt="protection" width={"100%"} />
                            </div>
                            <div>
                                Data protection guarentees
                            </div>
                        </div>

                        <div className='tracking'>
                            <div>Tracking</div>
                            <div>
                                <img src={tracking} alt="tracking" width={"100%"} />
                            </div>
                            <div>
                                Track all your users’ financial transactions
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flexibility'>
                            <div>Flexibility</div>
                            <div>
                                <img src={flexibility} alt="flexibility" width={"100%"} />
                            </div>
                            <div>
                                Custom made for your requirements
                            </div>
                        </div>

                        <div className='easiness'>
                            <div>Easiness</div>
                            <div>
                                <img src={easiness} alt="easiness" width={"100%"} />
                            </div>
                            <div>
                                Go-to market in less than 7 days
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Features