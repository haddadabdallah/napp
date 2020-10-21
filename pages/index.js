import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './Layout/Navbar'





export default function Home(props) {



  return (
    <>

      <Navbar />


      <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item  active">
            <img src="https://demo.accesspressthemes.com/wordpress-plugins/wp-1-slider-pro/wp-content/uploads/2016/10/2016-10-18-1.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>



      <div className='container'>

        <h1 class="display-6  mt-4 mb-5 text-center "> Les plus demandés </h1>

        <div className="top_produit mb-5" >

          <div className="row" >

          <div className=" col-md-4  col-ms-6 col-xl-3 ">
<div class="card_shop p-3 " >
    <div className="produit_image">
<img src="/image/kenwood_chef_kvc30_2.png" />

    </div>

    <div className="produit_title mt-3 mb-3">
      

      <Link href="/produits"><h5>Le nom de votre produit</h5></Link>

    </div>


    <div className="action pt-3">
        <div className="row" >
          <div className="col-6 prix " >
            <h5 className="p-0 m-0" >3000 Da</h5>
          </div>
          <div className="col-6 add_to_cart" >
            <button className="btn w-100" ><h6 className="m-0" >AU PANIER</h6></button>
          </div>
        </div> 
    </div>
</div>
</div>


<div className=" col-md-4  col-ms-6 col-xl-3 ">
<div class="card_shop p-3 " >
    <div className="produit_image">
<img src="/image/kenwood_chef_kvc30_2.png" />

    </div>

    <div className="produit_title mt-3 mb-3">
      <h5>Le nom de votre produit</h5>
    </div>


    <div className="action pt-3">
        <div className="row" >
          <div className="col-6 prix " >
            <h5 className="p-0 m-0" >3000 Da</h5>
          </div>
          <div className="col-6 add_to_cart" >
            <button className="btn w-100" ><h6 className="m-0" >AU PANIER</h6></button>
          </div>
        </div> 
    </div>
</div>
</div>


<div className=" col-md-4  col-ms-6 col-xl-3 ">
<div class="card_shop p-3 " >
    <div className="produit_image">
<img src="/image/kenwood_chef_kvc30_2.png" />

    </div>

    <div className="produit_title mt-3 mb-3">
      <h5>Le nom de votre produit</h5>
    </div>


    <div className="action pt-3">
        <div className="row" >
          <div className="col-6 prix " >
            <h5 className="p-0 m-0" >3000 Da</h5>
          </div>
          <div className="col-6 add_to_cart" >
            <button className="btn w-100" ><h6 className="m-0" >AU PANIER</h6></button>
          </div>
        </div> 
    </div>
</div>
</div>


<div className=" col-md-4  col-ms-6 col-xl-3 ">
<div class="card_shop p-3 " >
    <div className="produit_image">
<img src="/image/kenwood_chef_kvc30_2.png" />

    </div>

    <div className="produit_title mt-3 mb-3">
      <h5>Le nom de votre produit</h5>
    </div>


    <div className="action pt-3">
        <div className="row" >
          <div className="col-6 prix " >
            <h5 className="p-0 m-0" >3000 Da</h5>
          </div>
          <div className="col-6 add_to_cart" >
            <button className="btn w-100" ><h6 className="m-0" >AU PANIER</h6></button>
          </div>
        </div> 
    </div>
</div>
</div>







          </div>

        </div>

      </div>

    </>

  )
}
