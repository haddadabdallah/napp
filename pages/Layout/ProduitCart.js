import React from 'react'
import Link from 'next/link'

export default function ProduitCart() {
    return (
        <div className=" col-md-4  col-ms-6 col-xl-3 ">
        <div className="card_shop p-3 " >
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
        
    )
}
