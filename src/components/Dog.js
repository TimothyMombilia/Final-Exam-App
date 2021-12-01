import React, { useState, useEffect } from 'react';
import DogItem from './DogItem';


const Dog = () => {
    const [dog, setDog] = useState([]);
   


    useEffect(() => {
        
        fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => setDog(data));

      // eslint-disable-next-line
        
    },     []);

    


    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                

                
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                   { dog.map((dog) => <DogItem key={dog.id} dog={dog} />)}
                </div>
            </div>
        </section>
    );
}

export default Dog;

