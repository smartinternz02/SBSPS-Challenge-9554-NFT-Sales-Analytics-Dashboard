import React from 'react'
import Tpcard from './ppcard'
import TopSellerCard from './TopSellerCard'
import TopCollectionsCard from './TopCollectionsCard'
import "./Home.css"


function Home() {
   

  return (
    <>
    <div class="slider">
    <div class="rotator">
       <div class="items">
          <img src="/lions.gif" alt="loaded Lions NFT" />
       </div>
       <div class="items">
          <img src="/Bunny.gif"alt="Bunny NFT collection" />
       </div>
       <div class="items">
          <img src="/Acid.gif" alt="Acid Bored Apes" />
       </div>
       <div class="items">
          <img src="/pirate.gif" alt="Pirate NFT" />
       </div>
       <div class="items">
          <img src="/rand.gif" alt="Random NFT" />
       </div>
       <div class="items">
          <img src="/bull.gif" alt="bull NFT" />
       </div>
       <div class="items">
          <img src="/Snake-nft.gif" alt="Snake NFT" />
       </div>
       <div class="items">
          <img src="/panda.gif" alt="Panda NFT" />
       </div>
       <div class="items">
          <img src="/Bandar.gif" alt="Monkey NFT" />
       </div>

    


      
       

    </div>
 </div>
 <div className='topsellerstext' style={{"marginTop":"30rem"}}>
                <h1>Top Sellers</h1>
            </div>
            <div class="containernftss" style={{"marginTop":"-0.7rem"}} >
                <div class="rowtpcard" style={{"rowGap":"1rem"}}>

                    <TopSellerCard tscimg ="/images/avatar-1.jpg"
                    sname="Nikhil"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/avatar-2.jpg"
                    sname="Rishika"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/avatar-3.jpg"
                    sname="Rahul"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/avatar-4.jpg"
                    sname="Niharika"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/avatar-5.jpg"
                    sname="Hardik"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/avatar-6.jpg"
                    sname="Ishika"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/avatar-7.jpg"
                    sname="Priyan"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/avatar-8.jpg"
                    sname="Mehek"
                    sprice ="2.4"/>
                   

                </div>
            </div>
            <div className='topcollectionstext'>
                <h1>Collections on Our Site</h1>
            </div>

<div class="containernft" style={{"marginTop":"-0.5rem"}} >
                <div class="rowtpcard">

                   <TopCollectionsCard
                   avimage ="/images/author-banner-1.jpg"
                   collectionname ="Digital"
                   tc="243"
                   volume="42"
                   avvimage ="/images/avatar-1.jpg"/>
                   <TopCollectionsCard
                   avimage ="/images/author-banner-2.jpg"
                   collectionname ="Music"
                   tc="324"
                   volume="42"
                   avvimage ="/images/avatar-2.jpg"/>
                   <TopCollectionsCard
                   avimage ="/images/author-banner-3.jpg"
                   collectionname ="Artwork"
                   tc="445"
                   volume="42"
                   avvimage ="/images/avatar-3.jpg"/>
                   <TopCollectionsCard
                   avimage ="/images/author-banner-4.jpg"
                   collectionname ="Gaming"
                   tc="3245"
                   volume="42"
                   avvimage ="/images/avatar-4.jpg"/>
                   <TopCollectionsCard
                   avimage ="/images/author-banner-5.jpg"
                   collectionname ="Virtual Fashion"
                   tc="423"
                   volume="42"
                   avvimage ="/images/avatar-5.jpg"/>
                   <TopCollectionsCard
                   avimage ="/images/author-banner-6.jpg"
                   collectionname ="Event Tickets"
                   tc="564"
                   volume="42"
                   avvimage ="/images/avatar-6.jpg"/>
                   <TopCollectionsCard
                   avimage ="/images/author-banner-7.jpg"
                   collectionname ="Sports"
                   tc="3455"
                   volume="42"
                   avvimage ="/images/avatar-7.jpg"/>
                   <TopCollectionsCard
                   avimage ="/images/author-banner-8.jpg"
                   collectionname ="Memes"
                   tc="467"
                   
                   avvimage ="/images/avatar-8.jpg"/>
                   

                </div>
            </div>



    </>
  )
}

export default Home