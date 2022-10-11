import React from 'react'
import "./nftdetail.css"

function Nftdetails() {
  return (
    <>
      <div className="nftdetailssingle">

        <img src="https://img.icons8.com/ios-filled/50/000000/back.png" class="backimgnsp" />

        <h1 class="namensp">NFT (name) here</h1>

        <div class="creatordetailsnsp">
          <img src="https://img.icons8.com/color/48/000000/verified-badge.png" class="verifiedtick" />
          <img src="/cre1.png" alt="" height="55rem" width="55rem" className='cimg' />
          <p class="cnnsp">CreatorName</p>
          <p class="creatorid">CreatorIdhere <img src="https://img.icons8.com/ios-glyphs/30/000000/copy.png" class="copyimg" /></p>

        </div>

        <div>
          <span class="ownership">
            OwnerShip
          </span>
          <div class="creatordetails" id="ownershipdetails">
            <img src="/cre1.png" alt="" height="55rem" width="55rem" className='cimg'
              id="ownerpic" />
            <p class="ownertext">
              Owner
            </p>
            <p class="cnnsp" id="ownercn">OwnerName</p>
            <p class="creatorid" id="ownerid">OwnerIdhere <img src="https://img.icons8.com/ios-glyphs/30/000000/copy.png" class="copyimg" /></p>

          </div>
          <span class="history">
            History
          </span>

        </div>

        <div class="nftimage"><img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" class="imgnsp" alt="" />
        </div>
        <div class="graph" >
          <img src="https://i.stack.imgur.com/nW1vp.png" alt="" class="graphimg" />
        </div>


        <div>

        </div>


      </div>
    </>
  )
}

export default Nftdetails