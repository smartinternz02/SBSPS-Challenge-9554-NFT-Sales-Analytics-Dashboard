import React from 'react'
import "./marketplace.css"
import Card from './mcard'
import { useEffect,useState } from 'react';
// import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import { InfinitySpin } from 'react-loader-spinner';


function MarketPlace() {

  const [nftarr, setnftarr] = useState([]); 
  // const [isLoading, setisLoading] = useState(true); 


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

     useEffect(() => {
        fetchnft();
    },[]);

    function removefilter(){
      
      document.getElementById('mf').style.display="none";
      
      document.getElementById('fbtn').style.opacity="1";
      document.getElementById('fbtn').style.cursor="pointer";
    
      document.getElementById('nftcards').style.gridTemplateColumns="auto auto auto auto";
    }
  
  function removefbtn(){
    document.getElementById('fbtn').style.opacity="0";
    document.getElementById('fbtn').style.cursor="default";
    
    document.getElementById('mf').style.display="block";
    document.getElementById('nftcards').style.gridTemplateColumns="auto auto auto";
  }

  // if (isLoading) {
  //   return(
  //     <div className="loadermp" style={{paddingLeft:"41.5vw",paddingTop:"30vh"}}>

  //     <InfinitySpin 
  //     width='200'
  //     color="aqua"
  //     />
  //     </div>
  //     )
    
  // }

  return (
    <>
    {console.log("hello")}
    <div className="mkplace">

      <h1 className='Mtitle'>Market Place</h1>
        <div className="fsbtns">
          <div className="fbtn" id='fbtn' onClick={removefbtn}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 5.17157 3.67157 4.5 4.5 4.5H19.5C20.3284 4.5 21 5.17157 21 6C21 6.82843 20.3284 7.5 19.5 7.5H4.5C3.67157 7.5 3 6.82843 3 6ZM5.25 12C5.25 11.1716 5.92157 10.5 6.75 10.5H17.25C18.0784 10.5 18.75 11.1716 18.75 12C18.75 12.8284 18.0784 13.5 17.25 13.5H6.75C5.92157 13.5 5.25 12.8284 5.25 12ZM10.5 16.5C9.67157 16.5 9 17.1716 9 18C9 18.8284 9.67157 19.5 10.5 19.5H13.5C14.3284 19.5 15 18.8284 15 18C15 17.1716 14.3284 16.5 13.5 16.5H10.5Z" fill="white"></path></svg>
          &nbsp;Filters
          </div>
          <div className="sbtn" id='sbtn'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 5.17157 3.67157 4.5 4.5 4.5H19.5C20.3284 4.5 21 5.17157 21 6C21 6.82843 20.3284 7.5 19.5 7.5H4.5C3.67157 7.5 3 6.82843 3 6ZM5.25 12C5.25 11.1716 5.92157 10.5 6.75 10.5H17.25C18.0784 10.5 18.75 11.1716 18.75 12C18.75 12.8284 18.0784 13.5 17.25 13.5H6.75C5.92157 13.5 5.25 12.8284 5.25 12ZM10.5 16.5C9.67157 16.5 9 17.1716 9 18C9 18.8284 9.67157 19.5 10.5 19.5H13.5C14.3284 19.5 15 18.8284 15 18C15 17.1716 14.3284 16.5 13.5 16.5H10.5Z" fill="white"></path></svg>
          &nbsp;Sort
          </div>
          
        </div>
      <div className="buyarea">
        <div className="filters" id='mf' >
          <div className="ft" style={{ borderBottom: "1px solid white", padding: "0.5rem" }}>
            <h3>Filters</h3>
            <svg className='ftog' onClick={removefilter} width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M5.5 16.75L1.5 12.25L5.5 7.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><line x1="9.75" y1="4.25" x2="21.25" y2="4.25" stroke="white" strokeWidth="1.5" strokeLinecap="round"></line><line x1="9.75" y1="12.25" x2="21.25" y2="12.25" stroke="white" strokeWidth="1.5" strokeLinecap="round"></line><line x1="9.75" y1="20.25" x2="21.25" y2="20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round"></line></svg>
          </div>
          <div className="price" style={{ borderBottom: "1px solid white", padding: "0.5rem" }}>
            <h4>Price</h4>
            <div className="range">
              $
              <input type="number" style={{ width: "45%", borderRadius: "0.3rem", padding: "0.15rem" }} name="minp" placeholder='Minimum' />
              -
              <input type="number" style={{ width: "45%", borderRadius: "0.3rem", padding: "0.15rem" }} name="maxp" placeholder='Maximum' />
            </div>
          </div>
          <div className="Categories" style={{ borderBottom: "1px solid white", padding: "0.5rem" }}>
            <h4>Categories</h4>


            <div className="catopts">
              <div className="cate">
                <input type="checkbox" className='catoli' id="Art" />
                <label htmlFor="Art">Art</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Music" />
                <label htmlFor="Music">Music</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Photography" />
                <label htmlFor="Photography">Photography</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Sports" />
                <label htmlFor="Sports">Sports</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Gaming" />
                <label htmlFor="Gaming">Gaming</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Crypto" />
                <label htmlFor="Crypto">Crypto</label>
              </div>


            </div>
          </div>

        </div>

        <InfiniteScroll
  dataLength={nftarr.length} //This is important field to render the next data
  next={fetchnft}
  hasMore={true}
  loader={<div className="loadermp" style={{paddingLeft:"42.5vw",paddingTop:"25vh"}}>

      <InfinitySpin 
      width='200'
      color="aqua"
      />
      </div>
  }
>
  <div className="nftcards" id='nftcards'>
          {nftarr.map((meta,i)=>(
            meta.token.image&&<Card key={i}  img={meta.token.image} name={meta.token.name} owner={meta.token.owner} price={meta.market.floorAsk.price.amount.usd} />
            
           
          ))}
        </div>
</InfiniteScroll>
         


      </div>
    </div>
    </>
  )
}

export default MarketPlace