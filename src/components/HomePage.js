import React, { useRef } from 'react';
import Slider from 'react-slick';
import '../styles/HomePage.css';

import searchImg from '../assets/search_infographic.png';
import filterImg from '../assets/filter_infographic.png';
import messageImg from '../assets/message_infographic.png';
import saveImg from '../assets/save_infographic.png';
import listImg from '../assets/list_infographic.png';
import NebulaBackground from '../components/NebulaBackground';
import NebulaLogo from '../assets/nebula_logo.png';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import Banner from '../components/HomeBanner.js'; // Import the Banner component

function HomePage() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000, // 10 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false // Hide arrows on mobile view
        }
      }
    ]
  };

  const handleCardClick = (info) => {
    console.log(`Card clicked: ${info}`);
    logUserActivity(`Card Clicked: ${info}`);
  };

  const handleButtonClick = (direction) => {
    console.log(`Button clicked: ${direction}`);
    logUserActivity(`Button Clicked: ${direction}`);
    if (sliderRef.current) {
      direction === 'prev' ? sliderRef.current.slickPrev() : sliderRef.current.slickNext();
    }
  };

  const logUserActivity = async (activity) => {
    const timestamp = new Date();
    try {
      await addDoc(collection(db, 'userActivity'), {
        event: activity,
        timestamp
      });
      console.log('User activity logged successfully.');
    } catch (error) {
      console.error('Error logging user activity:', error);
    }
  };

  const CustomArrow = ({ className, style, onClick, direction }) => (
    <button
      className={className}
      style={{ ...style }}
      onClick={() => {
        onClick();
        handleButtonClick(direction);
      }}
    />
  );

  return (
    <div className="homepage">
      <NebulaBackground />

      {/* Banner is rendered here */}
      <Banner />
      
      <div className="carousel-container">
        <Slider 
          ref={sliderRef} 
          {...settings} 
          prevArrow={<CustomArrow direction="prev" />}
          nextArrow={<CustomArrow direction="next" />}
        >
          <div className="carousel-card" onClick={() => handleCardClick('Welcome')}>
            <div className="carousel-content first-card">
              <img src={NebulaLogo} alt="Nebula Logo" className="first-card-image" />
              <div className="overlay">
                <h1>Nebula's PWA</h1>
                <p>
                  Nebula Progressive Web App (PWA) is your gateway to your new place. Revolutionizing the way you search for rental housing.
                  Our progressive web app is designed to streamline the process of finding and securing your next home. 
                  Whether you're looking for a single room or an entire property, Nebula makes it easier, faster, and more efficient.
                </p>
              </div>
            </div>
          </div>
          {[
            { img: searchImg, alt: "Search Infographic", title: "Search", text: "Users can explore a variety of listings and view them on a list or a map for convenient location-based browsing." },
            { img: filterImg, alt: "Filter Infographic", title: "Filter", text: "Nebula PWA offers tailored search options, including price, pet-friendly, room type, and much more for users to find their ideal match." },
            { img: messageImg, alt: "Message Infographic", title: "Message", text: "Nebula PWA streamlines communication between users and listing owners for inquiries and more details." },
            { img: saveImg, alt: "Like Infographic", title: "Save", text: "Users can save rooms, apartments, and properties, helping them narrow down options and keep track of preferred properties for future reference." },
            { img: listImg, alt: "List Infographic", title: "List", text: "Users can easily create a listing to sell their contract or advertise a place they want to rent out." }
          ].map((slide, index) => (
            <div key={index} className="carousel-card" onClick={() => handleCardClick(slide.alt.split(' ')[0])}>
              <div className="carousel-content">
                <img src={slide.img} alt={slide.alt} />
                <div className="overlay">
                  <h1>{slide.title}</h1> {/* Add title here */}
                  <p>{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="content">
        <p>Explore Nebula PWA to find your perfect home.</p>
        <a href="https://nebula-cosmorent.vercel.app/home" target="_blank" rel="noopener noreferrer">
          <button className="cta-button" onClick={() => handleButtonClick('Download The App')}>Download The App</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;