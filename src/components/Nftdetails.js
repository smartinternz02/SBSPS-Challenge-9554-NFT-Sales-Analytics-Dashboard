import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./nftdetail.css"

function Nftdetails() {
  return (
    <>
    <div className="ntppage">

      <div class="back-button" style={{"rotate":"90deg",width:"3rem","position":"relative",top:"1.5rem"}}>
      <svg class="svgarr" width={"3rem"}  fill='white' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M625.813 512.24L326 212.426 368.426 170l321.027 321.026c11.716 11.716 11.716 30.711 0 42.427L368.426 854.479 326 812.053 625.813 512.24z" /></svg>
</div>
<article>
  <h1>DELINEATING NFT</h1>
</article>
<div class="img">
  <div class="nft">
<div class="nftimage"><img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"   class="tt"   width="350px" height="400px" alt=""/>
</div>
</div>
<div class="stair">

<div class="t1">
<p class="tm">nft name here </p>
</div>
</div>
<div class="graph" >
    <img src="https://i.stack.imgur.com/nW1vp.png" alt="" class="graphimg"/>
</div>
</div>
<div class="price">
  <h4>$25</h4>
</div>
<Link to="analytic" >
<center><button class="noselect">See Analytics</button></center>
</Link>
<Outlet/>

    </div>
    </>
  )
}

export default Nftdetails