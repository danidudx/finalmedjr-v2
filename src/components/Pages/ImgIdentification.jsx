import React, { useState, useEffect } from 'react';
import Header from '../Header'
import TeachableMachineImageModel from '../imageid'
import './imgidentify.css';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import DocCard from '../DocCard';
import axios from 'axios';

const ImgIdentification = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        // Fetch docs from the server when the component mounts
        axios.get('http://localhost:8080/doctorsdash').then((response) => {
          setDoctors(response.data);
        });
      }, []);
  return (
    <div>
        <Header />
        <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/banner_img.png"
        title="Identify your Skin<br> Disease  using Our AI"
        subTitle="Your Partner in Health and Wellness"
      />
        <div className='imgwrap'>
            <TeachableMachineImageModel />
        
        <div className='doctrs'>
            <h1>Find your favourite Doctors</h1>
            <p>We have the best professionals</p>
        <div className="doc-cards">
        {doctors.map((doctor) => (
          <DocCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
        </div></div>
    </div>
  )
}

export default ImgIdentification