import { useState, useEffect } from "react";
import Expertise from "./Expertise";
import homeBg from "../images/homeBg.gif";
import dolly from "../images/logos/dolly.webp";
import chatGpt from "../images/logos/chatgpt.webp";
import anthropic from "../images/logos/anthropic.webp";
import bert from "../images/logos/bert.webp";
import mistral from "../images/logos/mistral.webp";
import lamama from "../images/logos/llama.webp";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundSize = `${145 + (scrollY / 100) * 7}%`;

  return (
    <div>
      {/* ------------- Main Section ------------------------ */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: backgroundSize,
          backgroundPosition: "center",
          transition: "background-size 0.2s ease",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-24 lg:px-36 text-white"
          style={{
            fontFamily: "'Poppins ExtraLight', 'Poppins', sans-serif",
            textDecoration: "none",
            color: "rgb(255, 255, 255)",
            marginTop: "60px",
          }}
        >
          <h1
            className="leading-tight pt-8 mb-4 text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold"
            style={{
              fontWeight: 500,
            }}
          >
            Generative AI
          </h1>

          <h1
            className="leading-tight  mb-12 text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold"
            style={{
              fontWeight: 500,
            }}
          >
            for Enterprises
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"
            style={{
              fontWeight: 200,
            }}
          >
            We Build Custom Generative
          </p>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"
            style={{
              fontWeight: 200,
            }}
          >
            AI Tools for your Enterprise
          </p>
          <button
            className="mt-8 px-6 py-3 text-white bg-[#FD6162] rounded-md font-bold transition duration-300 ease-in-out hover:bg-black hover:border hover:border-white hover:text-white"
            style={{
              marginTop: "60px",
              fontSize: "16px",
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* ---------------------- Our Expertise Section ------------------------- */}
      <section className="py-8 bg-[#FDE1E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-center text-[60px] font-medium mb-10 font-poppins">
            Our Expertise
          </h2>

          <div>
            {/* Passing some dummy data to Expertise component as an example */}
            <Expertise
              title="Large Language Models"
              logos={[
                { id: 1, url: chatGpt, alt: "Anthropic" },
                { id: 2, url: dolly, alt: "Logo 2" },
                { id: 3, url: anthropic, alt: "Logo 3" },
                { id: 4, url: bert, alt: "Logo 4" },
                { id: 5, url: mistral, alt: "Logo 5" },
                { id: 5, url: lamama, alt: "Logo " },
              ]}
            />

            <Expertise
              title="Large Language Models"
              logos={[
                { id: 1, url: chatGpt, alt: "Anthropic" },
                { id: 2, url: dolly, alt: "Logo 2" },
                { id: 3, url: anthropic, alt: "Logo 3" },
                { id: 4, url: bert, alt: "Logo 4" },
                { id: 5, url: mistral, alt: "Logo 5" },
                { id: 5, url: lamama, alt: "Logo " },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
