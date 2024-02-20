// docsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllDocPage.css';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import Header from '../Header';
import DocCard from '../DocCard/index';

const AllDocPage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch docs from the server when the component mounts
    axios.get('http://localhost:8080/doctorsdash').then((response) => {
      setDoctors(response.data);
    });
  }, []);

  return (
    <div className="docs-page">
      <Header />
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/banner_img.png"
        title="Find the Doctor of <br> your choice"
        subTitle="Your Partner in Health and Wellness"
      />
      <div className="doc-cards">
        {doctors.map((doctor) => (
          <DocCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default AllDocPage;
