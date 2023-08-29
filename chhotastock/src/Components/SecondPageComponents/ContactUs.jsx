import React from 'react'
import mutualfund from "../../../src/Assets/SecondPage/mutualfund.png"
import indianiquity from "../../../src/Assets/SecondPage/indianiquity.png"
import digitalgold from "../../../src/Assets/SecondPage/digitalgold.png"
import fd_logo from "../../../src/Assets/SecondPage/fd_logo.png"

function ContactUs() {
    return (
        <section style={{padding: "60px 0px" }}>
            <div className='contact-us-div'>
                <h1>How would you like to work with us?</h1>
                <p>Tell us more about yourself, and we’ll reach out to you as soon as possible.</p>
                <div>
                    <div className='contact-details'>
                        <div className='email'>
                            <label>Work email</label>
                            <input type="email" placeholder='abc@xyz.com' />
                        </div>

                        <div className='company-name'>
                            <label>Company Name</label>
                            <input type="text" />
                        </div>

                        <div className='company-name'>
                            <label>Mobile Number</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className='pro-category'>
                        <div className='pro-category-heading'>Which products are you interested in?</div>
                        <div className='pro-category-cards'>
                            <div className='category-card'>
                                <h3>Mutual Funds</h3>
                                <p>E2E infrastructure for mutual fund investing</p>
                                <div>
                                    <img src={mutualfund} alt="mutualfund" width={"100%"} />
                                </div>
                            </div>
                            <div className='category-card'>
                                <h3>Indian Equity</h3>
                                <p>Stock gateway & stock baskets</p>
                                <div>
                                    <img src={indianiquity} alt="indianiquity" width={"100%"} />
                                </div>
                            </div>
                            <div className='category-card'>
                                <h3>Digital Gold</h3>
                                <p>Buy & Sell digital gold hassle free</p>
                                <div>
                                    <img src={digitalgold} alt="digitalgold" width={"100%"} />
                                </div>
                            </div>
                            <div className='category-card'>
                                <h3>Fixed Deposits</h3>
                                <p>Book FDs in 1click w/o opening a bank ac</p>
                                <div>
                                    <img src={fd_logo} alt="fd_logo" width={"100%"} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button>
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs