import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './Layout/Navbar'
import ProduitCart from './Layout/ProduitCart'






export default function Home(props) {


  return (
    <>
 <Navbar /> 


      

      

      <div className="main_body">
      <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <img src="https://demo.accesspressthemes.com/wordpress-plugins/wp-1-slider-pro/wp-content/uploads/2016/10/2016-10-18-1.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>



      <div className='container'>

<div className="avant mt-5 mb-5" >
        <div className="row">

            <div className="col-md-4  col-sm-6 col-xl-3 mb-3">
            <div className="row">

              <div className="col-4" >
                <img src="/image/trophy 1.svg" />
              </div>
              <div className="col-8" >
                <h6>Choisir un pack</h6>
                <label>Hope you all going well. </label>

              </div>

            </div>
            </div>

            <div className="col-md-4  col-sm-6 col-xl-3 mb-3">
            <div className="row">

              <div className="col-4" >
                <img src="/image/guarantee.svg" />
              </div>
              <div className="col-8" >
                <h6>Choisir un pack</h6>
                <label>Hope you all going well. </label>
              </div>

            </div>
            </div>

            <div className="col-md-4  col-sm-6 col-xl-3 mb-3">
            <div className="row">

              <div className="col-4" >
                <img src="/image/shipping.svg" />
              </div>
              <div className="col-8" >
                <h6>Choisir un pack</h6>
                <label>Hope you all going well. </label>

              </div>

            </div>
            </div>

            <div className="col-md-4  col-sm-6 col-xl-3 mb-3">
            <div className="row">

              <div className="col-4" >
                <img src="/image/customer-support.svg" />
              </div>
              <div className="col-8" >
                <h6>Choisir un pack</h6>
                <label>Hope you all going well. </label>

              </div>

            </div>
            </div>


        </div>
        </div>
        <h1 className="display-6  mt-4 mb-5 text-center ">
        Les plus demandés
        </h1>


        <div className="top_produit mb-5" >

          <div className="row" >





          <ProduitCart />
          <ProduitCart />
          <ProduitCart />
          <ProduitCart />






          </div>

        </div>

      </div>
      </div>
    </>

  )
}
