import React from 'react'
import Navbar from '../Layout/Navbar'

export default function produits() {
    return (

        <>

<Navbar />
  
        <div className="main_body">
       

            <div className="top_head" >
                <h2> Produits </h2>
            </div>

            <div className="filter_produit">

                <div className="container">

                    <div className="row filter_section">
                        <div className="col-8 text-left d-flex  justify-content-left align-items-center  ">

                            <label className='mr-3' >TRIER PAR</label>

                            <select className="form-select " aria-label="Default select example">
                                <option value="1">Alphabétique, de Z à A</option>
                                <option value="2">Prix: faible à élevé</option>
                                <option value="3">Prix: élevé à faible</option>
                            </select>
                        </div>



                        <div className="col-4 text-right ">0 produits</div>
                    </div>

                </div>

            </div>

            <div className="container" >
            </div>



        </div>


        </>
    )
}
