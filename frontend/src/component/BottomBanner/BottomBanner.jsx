import React from 'react'
import { assets, features } from '../../assets/assets'
import './BottomBanner.css';

const BottomBanner = () => {
  return (
    <div className="bottom-banner">
      <img src={assets.banner_image} alt="banner" className="banner-large" />
      <img src={assets.banner_image_sm} alt="banner" className="banner-small" />

      <div className="banner-content">
        <div>
          <h1 className="banner-heading">Why We Are the Best?</h1>
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
