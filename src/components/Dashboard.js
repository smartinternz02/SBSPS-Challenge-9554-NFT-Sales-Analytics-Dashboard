import React from 'react'
import { Chart } from "react-google-charts";
import { InfinitySpin } from 'react-loader-spinner';
import { useEffect,useState } from 'react';

import "./dashboard.css"


function Dashboard() {

  const [trans, setTrans] = useState([]); 

  
  var fetchnft = async() => {
    var arr=[];

    const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}};
    // const addresses=["0xBd3531dA5CF5857e7CfAA92426877b022e612cf8","0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7","0x1A92f7381B9F03921564a437210bB9396471050C","0x2acAb3DEa77832C09420663b0E1cB386031bA17B","0x60E4d786628Fea6478F785A6d7e704777c86a7c6","0x9372b371196751dd2F603729Ae8D8014BbeB07f6","0x8630cDEaA26D042f0F9242ca30229b425E7f243f","0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"];
   
    const address = "0x1A92f7381B9F03921564a437210bB9396471050C";
    const tokenid=7934;
        const urlt=`https://api.reservoir.tools/transfers/v2?token=`+address+`%3A`+tokenid+`&limit=20`
    // const urlp=`https://api.reservoir.tools/tokens/v5?collection=`+address+`&sortBy=floorAskPrice&limit=10&includeTopBid=false&includeAttributes=false`;

 await fetch(urlt, options)
  .then(response => response.json())
  .then(response=>response.transfers)
  .then(response => {
    response.forEach(ele => {
      var d = new Date(ele.timestamp*1000);
       ele.price&&arr.push([new Date(d.getFullYear(),d.getMonth()+1, d.getDate()),ele.price])
      
    });
  }
  
  )
  .catch(err => console.error(err));
  setTrans([...trans,...arr]);
}
console.log(trans);



     useEffect(() => {
        fetchnft();
    },[]);

  return (
    <>

      <div className="dashboardpage">

        <div className="cardrow">
          <div className="scard" id='sc1'>
            <div className="carddet">
            <h3>Total NFTs</h3>

            </div>
            <div className="svg">

            <svg xmlns="http://www.w3.org/2000/svg"width={"7rem"} style={{"position":"relative",left:"3rem",bottom:"1rem"}} fill="rgba(0, 0, 0, 0.22)" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"  viewBox="0 0 512 474.47"><path d="m261.96 88.8 130.36 69.1c3.61 2.09 5.89 6.02 5.89 10.2v138.28c.02 2.29-.65 4.45-1.81 6.28-1.13 1.81-2.77 3.3-4.72 4.28l-129.81 68.79a11.695 11.695 0 0 1-5.96 1.55c-2.09-.02-4.12-.58-5.86-1.6l-130.36-69.1c-1.85-1.07-3.3-2.57-4.3-4.3l-.2-.39c-.91-1.71-1.39-3.61-1.39-5.51V168.1a11.6 11.6 0 0 1 1.8-6.28 11.96 11.96 0 0 1 4.72-4.28l129.82-68.8c1.86-1.06 3.92-1.56 5.96-1.55 2.09.03 4.12.58 5.86 1.61zm119.65 297.24a18.72 18.72 0 0 0-14.31.01c-2.22.92-4.23 2.26-5.91 3.93l-.12.12a18.45 18.45 0 0 0-3.65 5.19h-29.75v-24.8l-16.7 8.85v24.26c0 2.3.94 4.38 2.45 5.89a8.292 8.292 0 0 0 5.88 2.44h38.38a18.71 18.71 0 0 0 9.44 8.66c4.52 1.87 9.62 1.88 14.15.05l.14-.05c6.99-2.9 11.55-9.72 11.55-17.28 0-7.56-4.57-14.37-11.55-17.27zm41.96-25.96c-1.89-4.56-1.88-9.74.01-14.31 1.77-4.25 5.09-7.7 9.24-9.68v-29.74h-17.09v-16.7h25.4c2.3 0 4.38.93 5.89 2.44a8.298 8.298 0 0 1 2.44 5.89v38.38c3.9 2.01 6.98 5.39 8.66 9.44 1.87 4.52 1.88 9.62.05 14.15l-.05.14c-2.9 6.98-9.71 11.55-17.27 11.55-7.57 0-14.38-4.58-17.28-11.56zm52.97-95.43h-60.81l-.01-16.66h60.82c2-4.03 5.4-7.21 9.57-8.94 4.52-1.86 9.63-1.89 14.16-.05l.14.05a18.692 18.692 0 0 1 11.55 17.27c0 7.56-4.57 14.39-11.56 17.27a18.66 18.66 0 0 1-14.14.05l-.14-.05a18.655 18.655 0 0 1-9.58-8.94zm15.83-45.6h-76.65v-16.66h68.34v-54.43c-3.63-2.09-6.41-5.22-8.02-9.1a18.716 18.716 0 0 1 0-14.29c2.91-6.99 9.7-11.55 17.27-11.55 7.56 0 14.39 4.57 17.27 11.56 1.87 4.51 1.89 9.62.06 14.14l-.06.15c-1.87 4.5-5.41 8.09-9.88 10.01v61.84c0 2.3-.94 4.37-2.44 5.89a8.358 8.358 0 0 1-5.89 2.44zM427 178.81h-11.29v-11.63h.09c0-1.69-.17-3.38-.49-5.05h3.36v-24.61c-4.1-2-7.35-5.45-9.1-9.66a18.808 18.808 0 0 1 0-14.29c2.89-6.96 9.68-11.55 17.27-11.55 7.54 0 14.3 4.54 17.21 11.43l.07.14c1.89 4.58 1.88 9.7 0 14.29a18.8 18.8 0 0 1-8.79 9.52v33.08c0 2.3-.94 4.38-2.45 5.89a8.274 8.274 0 0 1-5.88 2.44zM136.07 88.42c4.25-1.77 7.7-5.09 9.68-9.25h29.74v29.4l16.7-8.85V70.87c0-2.3-.93-4.38-2.44-5.89a8.298 8.298 0 0 0-5.89-2.44h-38.37a18.685 18.685 0 0 0-23.6-8.71l-.14.05c-6.98 2.9-11.55 9.71-11.55 17.27 0 2.51.51 4.93 1.43 7.14 3.93 9.48 14.83 14.11 24.44 10.13zm81.12-52.96v51.01l16.66-8.83V35.46c4.03-1.99 7.22-5.42 8.94-9.58 1.87-4.52 1.89-9.62.05-14.15l-.05-.15A18.698 18.698 0 0 0 225.52.04c-7.56 0-14.38 4.57-17.28 11.55a18.779 18.779 0 0 0-.05 14.15l.06.14c1.71 4.13 4.92 7.6 8.94 9.58zm45.6-15.83c0 8.76-1.84 30.49-2.29 50.3 3.32.54 6.48 1.65 9.31 3.29l9.64 5.12v-50.4h54.43c.27.48.57.94.88 1.39 2.07 2.96 4.87 5.24 8.23 6.63 4.55 1.88 9.73 1.89 14.28 0 4.6-1.92 8.22-5.52 10.13-10.13.91-2.21 1.42-4.62 1.42-7.14a18.7 18.7 0 0 0-11.56-17.28 18.706 18.706 0 0 0-14.14-.05l-.14.06a18.57 18.57 0 0 0-6.07 4.05c-1.06 1.06-2 2.25-2.78 3.55-.44.73-.83 1.49-1.17 2.28h-61.84c-2.3 0-4.38.93-5.89 2.44a8.34 8.34 0 0 0-2.44 5.89zM303.03 85v5.83l16.68 8.84v-6.34h24.61c2 4.1 5.45 7.35 9.67 9.09 4.55 1.89 9.72 1.89 14.27 0a18.68 18.68 0 0 0 11.56-17.27c0-7.53-4.54-14.29-11.43-17.2l-.14-.07a18.808 18.808 0 0 0-14.29 0 18.882 18.882 0 0 0-9.52 8.79h-33.08c-2.3 0-4.38.94-5.89 2.44a8.298 8.298 0 0 0-2.44 5.89zm-214.6 28.57c1.89 4.57 1.88 9.75-.01 14.31-1.77 4.26-5.09 7.71-9.24 9.68v29.74h17.1v16.71H70.87c-2.3 0-4.38-.94-5.89-2.45a8.292 8.292 0 0 1-2.44-5.88V137.3c-3.9-2.01-6.98-5.39-8.66-9.44a18.685 18.685 0 0 1-.05-14.15l.05-.15a18.709 18.709 0 0 1 17.27-11.54c7.57 0 14.38 4.57 17.28 11.55zm-52.97 95.44h60.82v16.65H35.46a18.671 18.671 0 0 1-9.58 8.95 18.732 18.732 0 0 1-14.15.05l-.15-.05A18.724 18.724 0 0 1 .04 217.34c0-7.56 4.57-14.4 11.55-17.28 4.52-1.87 9.62-1.88 14.15-.05l.14.06c4.16 1.72 7.59 4.92 9.58 8.94zm-15.83 45.6h76.66v16.66H27.94v54.43c3.61 2.06 6.43 5.25 8.02 9.1 1.89 4.56 1.89 9.73 0 14.29-2.91 6.98-9.69 11.55-17.27 11.55a18.706 18.706 0 0 1-17.33-25.7l.06-.15c1.88-4.53 5.4-8.08 9.88-10.02v-61.83c0-2.3.94-4.38 2.44-5.89a8.316 8.316 0 0 1 5.89-2.44zM85 294.84h11.29v12.46h-.08c0 1.41.11 2.82.34 4.22h-3.22v24.61c4.11 2.02 7.34 5.43 9.1 9.67 1.88 4.57 1.88 9.71 0 14.28-2.89 6.96-9.68 11.56-17.27 11.56-7.54 0-14.3-4.55-17.21-11.44l-.06-.13a18.716 18.716 0 0 1 8.78-23.81v-33.09c0-2.29.94-4.37 2.44-5.88a8.324 8.324 0 0 1 5.89-2.45zM286.17 439v-46.41l-16.45 8.72-.2.11V439a18.75 18.75 0 0 0-8.95 9.58c-1.86 4.53-1.89 9.63-.05 14.16l.05.14c2.9 6.99 9.71 11.55 17.28 11.55 7.56 0 14.38-4.57 17.27-11.56 1.87-4.52 1.88-9.61.05-14.14l-.05-.14a18.77 18.77 0 0 0-8.95-9.59zm-45.6 15.84v-54.45l-16.66-8.83v54.97h-54.43a18.746 18.746 0 0 0-9.1-8.03 18.762 18.762 0 0 0-14.29.01c-6.98 2.91-11.54 9.69-11.54 17.27 0 7.55 4.57 14.39 11.55 17.27 4.51 1.87 9.61 1.89 14.15.05l.14-.05c4.52-1.87 8.08-5.41 10.02-9.88h61.83c2.3 0 4.38-.94 5.89-2.45a8.274 8.274 0 0 0 2.44-5.88zm-40.23-65.37v-10.4l-16.68-8.84v10.91h-24.61c-1.99-4.1-5.46-7.36-9.67-9.1a18.783 18.783 0 0 0-14.28 0 18.69 18.69 0 0 0-11.56 17.27c0 7.54 4.55 14.3 11.44 17.21l.13.06c4.57 1.89 9.72 1.89 14.29 0 2.22-.92 4.23-2.26 5.92-3.91l.16-.14c.88-.89 1.7-1.89 2.43-3 .37-.56.71-1.14 1.02-1.73h33.08c2.29 0 4.38-.94 5.88-2.45a8.283 8.283 0 0 0 2.45-5.88zm-38.77-114.26v-75.95h23.94l14.86 27.97h2.78v-27.97h24.35v75.95h-24.04l-14.65-29.96h-2.88v29.96h-24.36zm76.93 0v-75.95h50.71v18.54h-26.36v16.75h20.06v17.74h-20.06v22.92H238.5zm59.44-56.11v-19.84h52.49v19.84h-13.65v56.11h-24.35V219.1h-14.49zM261.8 107.58c37.1 20.24 75.27 39.62 112.72 59.33 4.22 2.22 6.63 6.53 6.64 11l.02 118.66c0 5.1-3.05 9.48-7.44 11.41L261.8 366.9a12.435 12.435 0 0 1-11.59 0c-37.1-20.24-75.27-39.62-112.72-59.33-4.23-2.22-6.64-6.54-6.64-11l-.03-118.66c0-5.1 3.06-9.48 7.45-11.41l111.94-58.92c3.77-1.98 8.08-1.84 11.59 0z"/></svg>
            </div>
          </div>
          <div className="scard" id='sc2'>
            <h3>Total Assets</h3>
            
          </div>
          <div className="scard" id='sc3'>
            <h3>Growth</h3>
          </div>
          <div className="scard" id='sc4'>
            <h3>Total NFTs</h3>
          </div>
        </div>
        <div className="first">
          <div className="profile">
            <div className="propic">
              <img src="/defaultdp.jpg" className='profdp' alt="" sizes="" srcset="" />
            </div>
            <div className="profdet">
              <h3> ddharmani3 </h3>
              <h5 style={{ "color": "#858796" }}>#0369399</h5>
              <div className="dtags">
                <div className="dtagsr1">

                  <div className="elliptag" id='et1'>User from 16/10/2022</div>
                  <div className="elliptag" id='et2'>Top NFT: Cool Cats #7934</div>
                  <div className="elliptag" id='et3'>Total NFTs: 5</div>
                </div>

                <div className="dtagsr2">

                  <div className="elliptag" id='et4'>Fav Category: Collectibles</div>
                  <div className="elliptag" id='et5'>Invested: 3 ETH</div>
                </div>
              </div>

            </div>

          </div>
          <div className="stats">
            <div className="timedrop">

              <h6>Last Month</h6> <div className="droparr"><svg class="svgarr" width={"2rem"} fill='white' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M625.813 512.24L326 212.426 368.426 170l321.027 321.026c11.716 11.716 11.716 30.711 0 42.427L368.426 854.479 326 812.053 625.813 512.24z" /></svg></div>
            </div>
            <div className="dgraph">
              <div className="dchart">
                {/* <Doughnut data={data} /> */}
                
                <Chart
                chartType="PieChart"
                data={[["Year", "NFT"], ["2019", 5], ["2020", 12],["2021",15]]}
                width="20rem"
                height="20rem"
                style={{position:"relative",bottom:"1.5rem",right:"1.3rem"}}
                
                options={{legend: { position: "none" }, pieHole:0.4,  "backgroundColor":"none","colors":["blueviolet","#ec1f7f","yellowgreen","burlywood"]}}

              />
                

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

              <Chart
                chartType="LineChart"
                data={[["Transaction Date", "Transaction amount",], ...trans]}
                width="100%"
                height="100%"
                options={{"backgroundColor":"#152846","colors":["aqua","#ec1f7f"]}}
                legendToggle
                
                loader={<InfinitySpin 
                  width='200'
                  color="aqua"
                />}
              />


              {/* <img src="/nfgrowth.png"className='nfgro' alt="" /> */}
              {/* <iframe width="100%" height="420" frameborder="0" src="https://embed.theblockcrypto.com/data/nft-non-fungible-tokens/nft-overview/solana-nft-mints/embed" title="Solana NFT Mints"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard