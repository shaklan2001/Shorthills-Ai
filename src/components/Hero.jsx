import { useState, useEffect } from "react";
import homeBg from "../images/homeBg.gif";

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
      {/* Hero Section */}
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

      {/* Our Expertise Section */}
      <section className="py-16 bg-[#fde9e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-center text-4xl font-bold mb-10">
            Our Expertise
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Column for Text and Divider */}
            <div className="flex flex-col items-start space-y-8">
              {/* Large Language Models */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Large Language Models
                </h3>
                <div className="border-l-2 border-black pl-4 space-y-2">
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/openai-logo.png"
                      alt="OpenAI"
                      className="h-8 w-auto mr-4"
                    />
                    OpenAI
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/dolly-logo.png"
                      alt="Dolly"
                      className="h-8 w-auto mr-4"
                    />
                    Dolly
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/anthropic-logo.png"
                      alt="Anthropic"
                      className="h-8 w-auto mr-4"
                    />
                    Anthropic
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/google-bert-logo.png"
                      alt="BERT"
                      className="h-8 w-auto mr-4"
                    />
                    BERT
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/mistral-logo.png"
                      alt="Mistral AI"
                      className="h-8 w-auto mr-4"
                    />
                    Mistral AI
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/llama2-logo.png"
                      alt="Llama 2"
                      className="h-8 w-auto mr-4"
                    />
                    Llama 2
                  </p>
                </div>
              </div>

              {/* Cloud & Model Hub */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Cloud & Model Hub
                </h3>
                <div className="border-l-2 border-black pl-4 space-y-2">
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/azure-logo.png"
                      alt="Azure"
                      className="h-8 w-auto mr-4"
                    />
                    Azure
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/openai-logo.png"
                      alt="OpenAI"
                      className="h-8 w-auto mr-4"
                    />
                    OpenAI
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/transformers-logo.png"
                      alt="Transformers"
                      className="h-8 w-auto mr-4"
                    />
                    Transformers
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/vertexai-logo.png"
                      alt="Vertex AI"
                      className="h-8 w-auto mr-4"
                    />
                    Vertex AI
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <img
                      src="/path/to/sagemaker-logo.png"
                      alt="Amazon SageMaker"
                      className="h-8 w-auto mr-4"
                    />
                    Amazon SageMaker
                  </p>
                </div>
              </div>
            </div>

            {/* Column for Logos */}
            <div className="flex flex-col space-y-8">
              <div className="flex space-x-6">
                <img
                  src="/path/to/openai-logo.png"
                  alt="OpenAI"
                  className="h-12"
                />
                <img
                  src="/path/to/dolly-logo.png"
                  alt="Dolly"
                  className="h-12"
                />
                <img
                  src="/path/to/anthropic-logo.png"
                  alt="Anthropic"
                  className="h-12"
                />
                <img
                  src="/path/to/google-bert-logo.png"
                  alt="BERT"
                  className="h-12"
                />
                <img
                  src="/path/to/mistral-logo.png"
                  alt="Mistral AI"
                  className="h-12"
                />
                <img
                  src="/path/to/llama2-logo.png"
                  alt="Llama 2"
                  className="h-12"
                />
              </div>

              <div className="flex space-x-6">
                <img
                  src="/path/to/azure-logo.png"
                  alt="Azure"
                  className="h-12"
                />
                <img
                  src="/path/to/openai-logo.png"
                  alt="OpenAI"
                  className="h-12"
                />
                <img
                  src="/path/to/transformers-logo.png"
                  alt="Transformers"
                  className="h-12"
                />
                <img
                  src="/path/to/vertexai-logo.png"
                  alt="Vertex AI"
                  className="h-12"
                />
                <img
                  src="/path/to/sagemaker-logo.png"
                  alt="Amazon SageMaker"
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
