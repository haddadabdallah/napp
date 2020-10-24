import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Layout/Navbar";

import ReactImageMagnify from 'react-image-magnify';


import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useDispatch, useSelector } from "react-redux";
import {addTodo , inciment,dicriment,ResetCount} from '../redux/actions'


const getdata = async (params) => {


  const res = await fetch("http://localhost:3000/api/produit" ,  
  
  
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    } , body: JSON.stringify({id: params.produit})
}
  
  ).then((res) =>
    res.json()
  );

    console.log(res);
  return res;
};

export async function getServerSideProps({ params }) {

    
  const data = await getdata(params);

  return {
    props: {
      data: { params: params, data: data },
    },
  };
}

export default function produit (props) {


      
  const {name , img , prix  , id} = props.data.data

  

 
  let count = useSelector(state => state.countreducer[0].count )



 

useEffect(()=>{
  dispatch(ResetCount())
},[])


  const dispatch = useDispatch()
  const dispatchcount = useDispatch()
  


  return (
    <>
      <Navbar />

      <div className="main_body">
        <div className="container mt-5">
          <div className="row">
            <div className=" col-sm-12 col-md-8 ">
              <div className="row">

                <div className="card card_costum ">
                  <div className="row">
                    <div className="col-md-6 p-4">  
                    

                    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: img,
        width: 400,
        height: 400
    },
    largeImage: {
        src: img,
        width: 800,
        height: 600
    }
    
}} />


      
                   
                    
                    </div>

                    <div className="col-md-6 p-3 "> <h4> 
                        
                        <div className="titile_product">
                            <h4>{name}</h4> 
                        </div>

<div className="prix_product">

 <h2> {prix} </h2>

</div>



                        <div className="add_to_cart_product d-flex align-items-center">

                        <div className="row">
                          <div className="col-4 d-flex justify-content-between align-items-center " >
                          <button onClick={() =>{

dispatch(dicriment())

                          }} className="btn w-100  bay_btn" >-</button>
                        <h3 className="m-0 ml-2 mr-2 "> {count}  </h3>
                        <button onClick={() =>{

dispatchcount(inciment())

                        }} className="btn w-100  bay_btn" >+</button>

                          </div>
                          <div className="col-8" >
                          <button 
                          
                          onClick={()=>{
                            dispatch(addTodo({
                              id : id ,
                              name : name,
                              img : img,
                              Qt : count
                            }))
                          }}
                          
                          
                          className="btn w-100  bay_btn" >J'achète</button>
                          </div>
                

                          
                        
                



                        </div>
                    
                        </div>
                        
                       
                         </h4> </div>
                  </div>
                </div>

                <div className="card card_costum rounded-0 mt-4">
                  <div className="row">
                    <div class="card-header">Détails</div>
                  </div>
                  <div class="card-body">
                  <p>
                  Guiddini vous aide à lancer votre projet basé sur l’acceptation du E-paiement rapidement sur le marché grâce à plusieurs atouts : notre expertise du paiement, notre savoir faire et capacité à accompagner vos projets en Algérie instantanément, et bien sûr notre réseau de partenaires… Nous avons lancé ce service pour vous aider à libérer tout ce potentiel.
Apres le paiement vous allez recevoir un fichier ap-gateway.zip et la documentation d’Algérie poste
                  </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-sm-12 col-md-4 ">
              <div className="card card_costum rounded-0">
                <div class="card-header">LIVRAISON & RETOURS</div>
                <div class="card-body">
                
                    
                    </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
