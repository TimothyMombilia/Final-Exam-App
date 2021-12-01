import React from "react";
import Navigation from "../components/Navigation";
import Footer from '../components/Footer'

const About = () => {
    return(

        <>
        <Navigation />
        <div className="container py-5">
        <h1>About Page</h1>
        <p>Timothy Mombilia (105021910073), Informatika</p>
        </div>
        <Footer />
        </>
    );
}

export default About;