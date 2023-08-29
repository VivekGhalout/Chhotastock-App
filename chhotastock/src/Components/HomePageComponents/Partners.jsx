import React from 'react'
import kotak from "../../../src/Assets/HomePage/kotak.png"
import liquiloans from "../../../src/Assets/HomePage/liquiloans.png"
import lendbox from "../../../src/Assets/HomePage/lendbox.png"
import amfi from "../../../src/Assets/HomePage/amfi.png"
import upstok from "../../../src/Assets/HomePage/upstok.png"
import angelOne from "../../../src/Assets/HomePage/angelOne.png"
import simply from "../../../src/Assets/HomePage/simply.png"
import jupiter from "../../../src/Assets/HomePage/jupiter.png"

function Partners() {
    return (
        <section>
            <div className='partners-copm'>
                <div className='broker-partners'>
                    <div>
                        Some partners who make InvestPe products possible —
                    </div>
                    <div className='broker-partners-img'>
                        <div>
                            <div>
                                <img src={kotak} alt="kotak" width={"100%"} />
                            </div>
                            <div>
                                <img src={angelOne} alt="angelOne" width={"100%"} />
                            </div>
                            <div>
                                <img src={upstok} alt="upstok" width={"100%"} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={amfi} alt="amfi" width={"50%"} />
                            </div>
                            <div>
                                <img src={lendbox} alt="lendbox" width={"90%"} />
                            </div>
                            <div>
                                <img src={liquiloans} alt="liquiloans" width={"95%"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='business-builder'>
                    <div className='business-builder-text'>
                        ...and a few of the businesses building some incredible solutions with InvestPe
                    </div>
                    <div className='business-builder-img'>
                        <div>
                            <img src={simply} alt="simply" width={"80%"}/>
                        </div>
                        <div>
                            <img src={jupiter} alt="jupiter" width={"80%"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Partners