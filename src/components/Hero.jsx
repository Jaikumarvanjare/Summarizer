import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='Summarizer' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://www.linkedin.com/in/jai-kumar-vanj/", "_blank")
          }
          className='black_btn'
        >
          LinkedIn
        </button>
      </nav>

      <h1 className='head_text'>
      Summarize Articles with Advanced AI

        <br className='max-md:hidden' />
        <span className='blue_gradient '>using a Powerful AI Engine</span>
      </h1>
      <h2 className='desc'>
        Paste any article link and let our AI deliver a clear and concise summary, 
        saving you time and effort. Free and open-source.
      </h2>
    </header>
  );
};

export default Hero;
