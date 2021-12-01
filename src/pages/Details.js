import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DogDetails from '../components/DogDetails';



const Details = () => {
    const [dogs, setDogs] = useState({});
    const params = useParams();

    useEffect (() => {
        
        fetch(`https://api.thedogapi.com/v1/breeds/${params.dogId}`)
        .then(response => response.json())
        .then(data => setDogs(data));

    },
    
    // eslint-disable-next-line
    []);
    return(
    <>
        <Navigation />
        <DogDetails dogs={dogs} />
        <Footer />

    </>

    );
}

export default Details;

