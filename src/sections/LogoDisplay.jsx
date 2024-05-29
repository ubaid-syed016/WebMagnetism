import React from 'react';
import '../style/Hero.css';
import { Logo } from '../constants/index.js';

const LogoDisplay = () => {
  return (
    <section className={' py-7 set-bg flex justify-between overflow-scroll-x gap-7 items-center'}>
      {Logo.map((items, index) => (
        <div key={index}>
          <a href="">
            <img
              src={items.imgUrl}
              alt="image"
              className={` object-contain w-[${items.width}]`}
            />
          </a>
        </div>
      ))}
    </section>
  );
};

export default LogoDisplay;
