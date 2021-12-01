import React from 'react';
import { Link } from 'react-router-dom'

const DogDetails = (props) => {
    return(

        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    
                    <div className="col-md-6">
                    
                        <div className="small mb-1"></div>
                        <h1 className="display-5 fw-bolder">{props.dogs.name}</h1>
                        
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through"></span>
                            <span></span>
                        </div>
                        <h2 className= "py-3">Behavior :{ props.dogs.temperament }</h2>
                        

                        <h2 className="py-3 my-3">Bred For :{props.dogs.bred_for}</h2>

                        <h2 className="py-3 my-3">Breed Group :{props.dogs.breed_group}</h2>

                        <div className="d-flex">
                            <Link className="btn btn-outline-dark flex-shrink=0" to="/">
                           Back to Home 
                        </Link>
                                
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default DogDetails;