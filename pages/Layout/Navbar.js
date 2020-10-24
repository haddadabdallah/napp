import React, { useEffect, useState } from 'react'
import { BiCartAlt } from "react-icons/bi";
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import {IncrimentCart,DicrimentCart} from '../redux/actions'


export default function Navbar(props) {

  const [StatusCard, SetStatusCard] = useState(false)


     const todos = useSelector(state => state.reducer )
      const dispatch = useDispatch()
   

  const IsHide = () =>{
    SetStatusCard(false)
  }


  return (

    <>

{
  StatusCard?

  <>
  
  <div className="cart p-3" >

    {
      todos.map((todo)=>{
        return(
          <div className="card mt-2 mb-2" > 
            <div className="row">

              <div className="col-4">
              <img class="card-img-top" src={todo.img} alt="Card image cap" />

              </div>
              <div className="col-8">
              {todo.name}
              <br/>
              {todo.Qt}
              <br />


          <button onClick={()=>{dispatch(IncrimentCart({
            id : todo.id
          }))}} >+</button>


          <button onClick={()=>{
            dispatch(DicrimentCart({
              id : todo.id
            }))
          }}>-</button>
              </div>
            </div>
         </div>
        )
      })
    }

  </div>
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
            <div className=".col-md-3 col-3 cart_menu_top"> <button onClick={() => { SetStatusCard(true)
            
            }} className="btn" > <BiCartAlt color='#fff' size="25px" /> {todos.length} </button> </div>

          </div>

        </div>
      </nav>





    </>

  )
}
