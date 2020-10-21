import React, { useState } from 'react'
import { BiCartAlt } from "react-icons/bi";
import Link from 'next/link'
import Cart from '../Layout/cart'




export default function Navbar(props) {

  const [StatusCard, SetStatusCard] = useState(false)


  const IsHide = () =>{
    SetStatusCard(false)
  }


  return (

    <>

{
  StatusCard?

  <>
  
  <div className="cart" >AZEZAEZAE</div>
  <div onClick={()=>{IsHide()}} className="back" > a</div>



  </>

  : 

  <></>


}




      <nav className="navbar">

        <div className='container text-center'>

          <div className="row ">

            <div className=".col-md-3 col-3 logo_top_menu "><h3>Logo </h3></div>
            <div className=".col-md-5 col-6 menu_top">

              <ul>


                <Link href="/"><li>Home</li></Link>
                <Link href="/produits"><li>Produits</li></Link>
                <Link href="/produits"><li>Contact</li></Link>



              </ul>

            </div>
            <div className=".col-md-3 col-3 cart_menu_top"> <button onClick={() => { SetStatusCard(true) }} className="btn" > <BiCartAlt size="25px" /></button> </div>

          </div>

        </div>
      </nav>





    </>

  )
}
