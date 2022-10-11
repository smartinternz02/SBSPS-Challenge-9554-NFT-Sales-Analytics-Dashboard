import React from 'react'
import "./dashboard.css"

function dashboard() {
  return (
   <>
   <div className="dashboardpage">

   <div className="cardrow">
    <div className="scard"></div>
    <div className="scard"></div>
    <div className="scard"></div>
    <div className="scard"></div>
   </div>
    <div className="first">
      <div className="profile">
      <div className="propic">
        <img src="/defaultdp.jpg" className='profdp' alt="" sizes="" srcset="" />
      </div>
      <div className="profdet">
        <h3> ddharmani3 </h3>
        <h5 style={{"color":"#858796"}}>#0369399</h5>
        <div className="dtags">
          <div className="dtagsr1">

          <div className="elliptag" id='et1'></div>
          <div className="elliptag" id='et2'></div>
          <div className="elliptag" id='et3'></div>
          </div>
          
          <div className="dtagsr2">

          <div className="elliptag" id='et4'></div>
          <div className="elliptag" id='et5'></div>
          </div>
        </div>
        
      </div>

      </div>
      <div className="stats">
        <div className="timedrop">

        <h6>Last Month</h6> <div className="droparr"><svg class="svgarr" width={"2rem"} fill='white'  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M625.813 512.24L326 212.426 368.426 170l321.027 321.026c11.716 11.716 11.716 30.711 0 42.427L368.426 854.479 326 812.053 625.813 512.24z"  /></svg></div>
        </div>
        <div className="dgraph">
          <div className="dchart">
            <div className="midcircle">
             

            </div>
          </div>
          <div className="gdetails">
             <h6><div className="clr" id='bclr'></div>Asstes</h6>
             <h6><div className="clr" id='yclr'></div>Investments</h6>
             <h6><div className="clr" id='rclr'></div>Total NFTs</h6>
             <h6><div className="clr" id='gclr'></div>Profits</h6>
          </div>
        </div>
      </div>
    </div>
    <div className="second">
      <div className="recenact">
          <h5>Recent Activities</h5>
          <div className="actiarea">
            <div className="acticard">
              <h5>Bought <a href=""> 2 NFTs </a> from lions collection</h5>
              <p>2 hours ago</p>
            </div>
            <div className="acticard"></div>
            <div className="acticard"></div>
            <div className="acticard"></div>

          </div>


      </div>
      <div className="nfgraph">
          <h5>Profile Growth</h5>
          <div className="grapharea">
            <img src="/nfgrowth.png"className='nfgro' alt="" />
          </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default dashboard