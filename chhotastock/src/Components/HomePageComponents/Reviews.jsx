import React from 'react'
import mahesh from "../../../src/Assets/HomePage/mahesh.png"
import sunita from "../../../src/Assets/HomePage/sunita.png"
import ramesh from "../../../src/Assets/HomePage/ramesh.png"
import piyush from "../../../src/Assets/HomePage/piyush.png"
import mahesh_last from "../../../src/Assets/HomePage/mahesh_last.png"

function Reviews() {
    return (
        <section>
            <div className='review-comp'>
                <div className='review-comp-top-div'>
                    <p>
                        Review From Early Adopters
                    </p>
                    <div className='register-users'>
                        <span >156k+</span>
                        <span >
                            Registered Users
                        </span>
                    </div>
                    <div className='worth-investing'>
                        <span >$1.5Mn+</span>
                        <span >
                            Worth investing done
                        </span>
                    </div>
                </div>

                <div className='review-cards-div'>
                    <div><img src={mahesh} alt="mahesh" width={"100%"} /></div>
                    <div><img src={sunita} alt="sunita" width={"100%"}/></div>
                    <div><img src={ramesh} alt="ramesh" width={"100%"}/></div>
                    <div><img src={piyush} alt="piyush" width={"100%"}/></div>
                    <div><img src={mahesh_last} alt="mahesh_last" width={"100%"}/></div>
                </div>
            </div>
        </section>
    )
}

export default Reviews