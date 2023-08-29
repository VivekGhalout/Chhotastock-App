import React from 'react'
import connectHand from "../../../src/Assets/SecondPage/connectHand.png"

function ConnectPlatform() {
    return (
        <section style={{ padding: "40px 0px"}}>
            <div className='connect-platform-div'>
                <div className='connect-platform-div-left'>
                    <div>
                        Connect your platform finances now with InvestPe Gateway
                    </div>
                    <div>
                        We help brokers, wealth managers, fund managers & other businesses / startups server their customers better with our suite of modern digital investment stack
                    </div>
                    <button>
                        Try Investpe Now
                    </button>
                </div>

                <div className='connect-platform-div-right'>
                    <img src={connectHand} alt="connectHand"  width={"100%"}/>
                </div>
            </div>
        </section>

    )
}

export default ConnectPlatform