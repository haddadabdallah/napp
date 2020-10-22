import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './Layout/Navbar'
import ProduitCart from './Layout/ProduitCart'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';







export default function Home(props) {



  const [data,setdata] = useState(props.data.data)

  const slides = [
    { title: 'First item', description: 'Lorem ipsum' , image : '/image/backhead.png' , button : 'Voir pluse'},
    
  ];
  

  return (
    <>
 <Navbar /> 



      

      <div className="main_body">
 

      <Slider>
  {slides.map((slide, index) => <div key={index} 
  style={{ background: `url('${slide.image}') no-repeat center center` }}
  >

<div className="center slide_home ">
				<h1>{slide.title}</h1>
				<p>{slide.description}</p>
				<button>{slide.button}</button>
			</div>
 
  </div>)}
</Slider>
      

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



        {
          data.map((item,key)=>{

            return (
              <ProduitCart data={item} />
            )

          })
        }

     







          </div>

        </div>

      </div>
      </div>
    </>

  )
}


const getdata = async () => {
  const res = await fetch("http://localhost:3000/api/produits").then((res) =>
    res.json()
  );


  return res;
};

export async function getServerSideProps({ params }) {
  const data = await getdata();


  

  return {
    props: {
      data: { data: data },
    },
  };
}
