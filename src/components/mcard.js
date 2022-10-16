import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./mcard.css"

function card(props) {
  return (
   <>
   <nav>

         <Link to="../nftdetails">
              <div class="dcard">

                <figure class="dcard-banner">
                  <a href="#">
                    <img src={props.img} loading="lazy"
                      alt="Walking On Air" class="dimg-cover"/>
                  </a>
                </figure>

                <h3 class="h3 dcard-title">
                  <a href="#">{props.name}</a>
                </h3>

                <span class="dcard-author">
                  Owned ID: <a href="#" class="dauthor-link">{props.owner}</a>
                </span>

                <div class="dwrapper">
                  <data class="dwrapper-item" value="1.5">$ {props.price}</data>

                </div>

                <button class="btn">

                  <span>Buy</span>
                </button>

              </div>
            </Link>
            
          </nav>
          <Outlet/>
   </>
  )
}

export default card