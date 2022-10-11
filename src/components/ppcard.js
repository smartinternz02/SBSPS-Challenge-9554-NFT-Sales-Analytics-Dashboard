import React from 'react'

function tpcard(props) {
  return (
    <>
    <div class="card-sl">
                    <div class="card-image">
                        <img
                           src = {props.cardimg} />
                    </div>

                  
                    <div class="card-heading">
                    <center className="headingtextt">
                        {props.nn}
                    </center>
                    </div>
                    <div class="card-text">
                   <p className='cardvolume'>
                    Collection Name: {props.cn}
                   </p>
                    </div>
                    <div class="card-text">
                      <center>  ${props.nftprice}</center>
                    </div>
                    <a href="#" class="card-button"> Purchase</a>
                </div>
    </>
  )
}

export default tpcard