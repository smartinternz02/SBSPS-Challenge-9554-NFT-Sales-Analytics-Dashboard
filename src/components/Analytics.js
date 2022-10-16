import React from 'react'
import "./analytics.css"
import { Chart } from "react-google-charts";
import { InfinitySpin } from 'react-loader-spinner';
import { useEffect,useState } from 'react';

function Analytics(props) {
    const [nftarr, setnftarr] = useState([]); 
    var opt = {
        title: 'Age of sugar maples vs. trunk diameter, in inches',
        hAxis: {title: 'Diameter'},
        vAxis: {title: 'Age'},
        legend: 'none',
        trendlines: { 0: {} }    // Draw a trendline for data series 0.
      };
    const [trans, setTrans] = useState([]); 
    var fetchnft = async() => {
        var arr=[];
        // setisLoading(true);
        
        const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}};
        const addresses=["0xBd3531dA5CF5857e7CfAA92426877b022e612cf8","0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7","0x1A92f7381B9F03921564a437210bB9396471050C","0x2acAb3DEa77832C09420663b0E1cB386031bA17B","0x60E4d786628Fea6478F785A6d7e704777c86a7c6","0x9372b371196751dd2F603729Ae8D8014BbeB07f6","0x8630cDEaA26D042f0F9242ca30229b425E7f243f","0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"];
        for (let j = 0; j < addresses.length; j++) {
          const address = addresses[j];
          const urlp=`https://api.reservoir.tools/tokens/v5?collection=`+address+`&sortBy=floorAskPrice&limit=1&includeTopBid=false&includeAttributes=false`;
          
          await fetch(urlp, options)
          .then(response => response.json())
          .then(response => {
            // console.log(response.tokens)
            var narr= response.tokens;
            narr.forEach(ele => {
              // console.log(ele);
              arr.push(ele);
            });
          }
          
          )
          .catch(err => console.error(err));
        }
        arr.sort(() => (Math.random() > .5) ? 1 : -1);
        console.log(arr);
        setnftarr([...nftarr,...arr]);
        
        // setisLoading(false);
      console.log(arr)
    }
    
        
    

   var fetchml= async ()=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "contract_address":"0x1A92f7381B9F03921564a437210bB9396471050C",
            "token_id":"7934"
          })
    };
    fetch('/predict', requestOptions)
        .then(response => response.json())
        .then((responseJSON) => {
            // do stuff with responseJSON here...
            console.log(responseJSON);
         })
        .then(data => this.setState({ postId: data.id }));

   }

  
  var fetchnfttransfer = async() => {
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
       ele.price&&arr.push([new Date(d.getFullYear(),d.getMonth(), d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()),ele.price])
      
    });
  }
  
  )
  .catch(err => console.error(err));
  setTrans([...trans,...arr]);
}


     useEffect(() =>{
   fetchnfttransfer();
   fetchml();
   fetchnft();
        
    },[]);

  return (
    <>
    <div className="anahead">
        <h3>Analytics</h3>
    </div>
    <div className="anfirst">
        <div className="nftanaldet">
            <div className="nftpic">
                <img  className='nftdp' src="https://api.reservoir.tools/assets/v1?asset=d13dd00e722beffaf6c818fc35b7e75a68662b078e481f9ecb1e84aae16bbf3a1ce4dc794e43f09a859a862dbc29a1751bf8984270df961ff35272ec1a848122fd819d3883c4207595764bc097b594529e6af94131fda682a1eeaa884ba8f781a1fe56d2290bbe8ec686a8d08087e652f7baacd60bbb9998170abb5ca62203f6058ed9feecb44e991ea6b299d1f7ae6c" alt="" />
            </div>
            <div className="nftpdet">
                <h3 style={{"paddingTop":"1rem"}}> Cool Cats #7934</h3>
                <h5>Contract Address:</h5>
                <h6 style={{"fontSize":"0.7rem"}}>0x1A92f7381B9F03921564a437210bB9396471050C</h6>
                <h5>price: 2.80288 ETH</h5>
            </div>
            
        </div>
        <div className="regraph">
            
        <Chart
                chartType="LineChart"
                data={[["Transaction Date", "Transaction Amount(ETH)",], ...trans]}
                width="95%"
                height="95%"
                options={{"backgroundColor":"aqua","colors":["#ec1f7f"]}}
                legendToggle
                style={{"backgroundColor":"aqua"}}
                
                loader={<InfinitySpin 
                  width='200'
                  color="aqua"
                />}
              />
        </div>
    </div>
    <div className="nftanalysis">
        <h3>Analysis</h3>
        <div className="anadeta">
            <div className="rarity"> Rarity: 10.091</div>
            <div className="priceaft">Price after 1 month: 3.53213 ETH</div>
            <div className="priceaft">Price after 1 Year: 6.53454 ETH</div>
        </div>

    </div>
    </>
  )
}

export default Analytics