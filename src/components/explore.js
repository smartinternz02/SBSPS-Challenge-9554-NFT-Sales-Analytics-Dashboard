import React from 'react'
import Tpcard from './ppcard'
import TopSellerCard from './TopSellerCard'
import TopCollectionsCard from './TopCollectionsCard'
import "./explore.css"
function explore() {
    return (
        <>
            <div className="mynftpage">


                <div className='heading'>
                    <h1>Explore The World Of NFT's</h1>
                </div>
                <div class="containernftt" >
                    <div class="rowtpcarddp">

                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-1.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-2.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-3.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-4.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-5.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-6.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-7.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-8.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-1.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-7.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-2.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        <Tpcard nn = "CreationArt"
                        cardimg ="/images/author-banner-4.jpg" 
                        Collection Name = ""
                        nftprice = "12"/>
                        



                    </div>
                </div>




            </div>
            <div className='topsellerstext'>
                <h1>Top Creators</h1>
            </div>
            <div class="containernftss" >
                <div class="rowtpcard">

                    <TopSellerCard tscimg ="/images/coolcatsowner.png"
                    sname="CoolCats Creator"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/dfowner.png"
                    sname="DeadFellaz Creator"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/pudgypenguinscreator.webp"
                    sname="pudgypenguins Creator"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/meebitscreator.webp"
                    sname="meebits Creator"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/mutantcreator.png"
                    sname="MutantApe Creator"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/boredbunnycreator.webp"
                    sname="boredbunnyCreator"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/claylingsnftcreator.webp"
                    sname="claylings Creator"
                    sprice ="2.4"/>
                   
                    <TopSellerCard tscimg ="/images/cryptopunkscreator.webp"
                    sname="cryptopunks Creator"
                    sprice ="2.4"/>
                   

                </div>
            </div>
            <div className='topcollectionstext'>
                <h1>Top Collections</h1>
            </div>

<div class="containernft" >
                <div class="rowtpcard">

                   <TopCollectionsCard
                   avimage ="/images/coolcats.gif"
                   contractaddress="0x1A92f7381B9F03921564a437210bB9396471050C"
                   collectionname ="Cool Cats"
                   tc="9,999"
                   volume="42"
                   avvimage ="/images/coolcatsowner.png"
                   link="https://etherscan.io/address/0x1A92f7381B9F03921564a437210bB9396471050C"/>
                   <TopCollectionsCard
                   avimage ="/images/deadfellaz.gif"
                   contractaddress="0x2acAb3DEa77832C09420663b0E1cB386031bA17B"
                   collectionname ="DeadFellaz"
                   tc="10,000"
                   volume="42"
                   avvimage ="/images/dfowner.png"
                   link="https://etherscan.io/address/0x2acAb3DEa77832C09420663b0E1cB386031bA17B"
                   />
                   <TopCollectionsCard
                   avimage ="/images/pp2.gif"
                   contractaddress="0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"
                   collectionname ="PudgyPenguins"
                   tc="8,888"
                   volume="42"
                   avvimage ="/images/pudgypenguinscreator.webp"
                   link="https://etherscan.io/address/0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"/>
                   <TopCollectionsCard
                   avimage ="/images/meebits.gif"
                   contractaddress="0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7"
                   collectionname ="Meebits"
                   tc="20,000"
                   volume="42"
                   avvimage ="/images/meebitscreator.webp"
                   link="https://etherscan.io/address/0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7"/>
                   <TopCollectionsCard
                   avimage ="/images/MutantApeYachtClub.gif"
                   contractaddress="0x22c36BfdCef207F9c0CC941936eff94D4246d14A"
                   collectionname ="Mutant Ape Yacht Club"
                   tc="10,000"
                   volume="42"
                   avvimage ="/images/mutantcreator.png"
                   link="https://etherscan.io/address/0x22c36BfdCef207F9c0CC941936eff94D4246d14A"/>
                   <TopCollectionsCard
                   avimage ="/images/boredbunny.gif"
                   contractaddress="0x9372b371196751dd2F603729Ae8D8014BbeB07f6"
                   collectionname ="Bored Bunny"
                   tc="4999"
                   volume="42"
                   avvimage ="/images/boredbunnycreator.webp"
                   link="https://etherscan.io/address/0x9372b371196751dd2F603729Ae8D8014BbeB07f6"/>
                   <TopCollectionsCard
                   avimage ="/images/claylings.gif"
                   contractaddress="0x8630cDEaA26D042f0F9242ca30229b425E7f243f"
                   collectionname ="Claylings"
                   tc="4,040"
                   volume="42"
                   avvimage ="/images/claylingsnftcreator.webp"
                   link="https://etherscan.io/address/0x8630cDEaA26D042f0F9242ca30229b425E7f243f"/>
                   <TopCollectionsCard
                   avimage ="/images/cryptopunk.gif"
                   contractaddress="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
                   collectionname ="Cryptopunks"
                   tc="10,000"
                   avvimage ="/images/cryptopunkscreator.webp"
                   link="https://etherscan.io/address/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"/>
                   

                </div>
            </div>


        </>
    )
}

export default explore