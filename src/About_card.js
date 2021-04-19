import React from 'react'
import './About_card.css'
import About_card_image from './Testimonial_pic.jpg' ;


function About_card() {
    return (
        <div className="about_card">
            <img src={About_card_image} alt="" className="about_card_img"/>
            <div className="about_card_container">
                <span className="about_card_title">Lorem, ipsum dolor.</span>
                <p className="about_card_description"> Ea distinctio omnis repellat eveniet rerum atque esse deleniti sint incidunt, cumque nesciunt nulla dolore, ab, asperiores minima debitis fugiat tenetur! Nulla itaque vitae maiores.</p>  
                <button type="button" className="about_card_button">Read More</button>
            </div>
        </div>
    )
}

export default About_card
