import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesone clone</p>
        <p>Referrals accepted</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Presents</p>
        <p>Zero to full stack hero</p>
        <p>Learn</p>
        <p>Join Now</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Trust and Safety</p>
        <p>Easter Eggs </p>
        <p>For the win</p>
      </div>
    </div>
  );
};

export default Footer;
