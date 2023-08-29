import React from 'react'
import bulb from "../../../src/Assets/HomePage/bulb.png"
import report_first from "../../../src/Assets/HomePage/report_first.png"
import report_sec from "../../../src/Assets/HomePage/report_sec.png"
import report_third from "../../../src/Assets/HomePage/report_third.png"
import valueDeals from "../../../src/Assets/HomePage/valueDeals.png"
import evRevolution from "../../../src/Assets/HomePage/evRevolution.png"
import hiddenGems from "../../../src/Assets/HomePage/hiddenGems.png"
import hiddenGemsSec from "../../../src/Assets/HomePage/hiddenGemsSec.png"

function EssentialFeatures() {
    return (
        <section>
            <div className='essential-features-div'>
                <div className='essential-features-text'>
                    <div>Essential Features for the Super Trader in You - All in <span>One Platform</span></div>
                    <p>Save hours of research by using our readymade screens to find your next investment</p>
                    <div className='analytic-tools-div'>
                        <img src={bulb} alt="bulb" />
                        <div>30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES + STOCK PICKS & MUCH MORE</div>
                    </div>
                    <div className="get-started-btn-div">
                        <button>
                            Get started now
                        </button>
                        <div>See all features</div>
                    </div>
                </div>
                <div className='essential-features-img'>
                    <img src={report_first} alt="report_first" width={"100%"} />

                    <img src={report_sec} alt="report_sec" width={"100%"} />

                    <img src={report_third} alt="report_third" width={"100%"} />

                </div>
            </div>
            <div className='investing-simplified'>
                <div>STOCK INVESTING, SIMPLIFIED</div>
                <div>
                    Online trading and investing in the market
                    does not have to be boring.
                    <br/>
                    <br/>
                    While we adopt a technology-led approach in
                    building our product, we are keeping our users-investors
                    and traders even before that
                </div>
            </div>
            <div className='deals-div'>
                <div>
                    <img src={valueDeals} alt="valueDeals" width={"100%"}/>
                </div>
                <div>
                    <img src={evRevolution} alt="evRevolution" width={"100%"}/>
                </div>
                <div>
                    <img src={hiddenGems} alt="hiddenGems" width={"100%"}/>
                </div>
                <div>
                    <img src={hiddenGemsSec} alt="hiddenGemsSec" width={"100%"}/>
                </div>
            </div>
        </section>
    )
}

export default EssentialFeatures