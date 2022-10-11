import React from 'react'
import Tpcard from './tpcard'
import Tscard from './tscard'
import "./mynft.css"

function mynft() {
    return (
        <>
            <div className="mynftpage">


                <article>
                    <h1>OWNED</h1>
                </article>
                <div class="containernftt" >
                    <div class="rowtpcardttt">

                        <Tpcard />
                        <Tpcard />
                        <Tpcard />
                        <Tpcard />


                    </div>
                </div>
                <article id='smarg'>
                    <h1>SOLD</h1>
                </article>
                <div class="containernfts" >
                    <div class="rowtpcardttt">
                        <Tscard />
                        <Tscard />
                        <Tscard />
                        <Tscard />
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default mynft