import React from 'react'
function topsellercard(props) {
  return (
    <>
    <div class="topsellercard">
                   <div className='tcard'>
<img src= {props.tscimg} alt="" className='avatarimg' />

<span>
                    <div className='sellername'>
                        @{props.sname}
                    </div>
                    <div className='sprice'>
                        {props.sprice}$
                    </div>
                   </span>
                   </div>
                 
                </div>
    </>
  )
}

export default topsellercard