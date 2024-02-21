import React, { useState } from 'react';
import Rating from '../Rating';

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        <li className={activeTab === 1 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(1)}>
            <div className="cs_testimonial_1_avatar">
              <img src="/images/home_1/avatar_1.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">David S.</h3>
                <p className="cs_heading_color mb-0">New York, USA</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 2 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(2)}>
            <div className="cs_testimonial_1_avatar">
              <img src="/images/home_1/avatar_2.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0"> Emma L.
</h3>
                <p className="cs_heading_color mb-0">California, USA</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 3 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(3)}>
            <div className="cs_testimonial_1_avatar">
              <img src="/images/home_1/avatar_3.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Michael K.</h3>
                <p className="cs_heading_color mb-0">Florida</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="cs_tab_body">
        {activeTab === 1 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            Rachel's patience and professionalism in addressing my queries exceeded my expectations. Her assistance made navigating the platform a breeze.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            Alex's innovative solutions and attention to detail greatly improved the website's functionality. Exceptional work ethic and communication skills!
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            Dr. Reynolds' thoroughness and expertise made me feel reassured throughout my treatment journey. Highly recommend her for skin health concerns!
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
      </div>
    </div>
  );
}
