import { useState, useEffect } from "react";
import Expertise from "./Expertise";
import Card from "./Card";

import homeBg from "../images/homeBg.gif";
import chatGpt from "../images/logos/chatgpt.png";
import dolly from "../images/logos/dolly.png";
import anthropic from "../images/logos/anthropic.png";
import bert from "../images/logos/bert.png";
import mistral from "../images/logos/mistralAi.png";
import lamama from "../images/logos/llama2.png";
import azure from "../images/logos/azure.png";
import tranformer from "../images/logos/transformer.png";
import vertex from "../images/logos/vertexAi.png";
import amazon from "../images/logos/amazonsagaMaker.png";
import labelStudio from "../images/logos/labelStudio.png";
import power from "../images/logos/powerAutomate.png";
import infi from "../images/logos/nifi.png";
import anthene from "../images/logos/anthene.png";
import python from "../images/logos/python.png";
import databrick from "../images/logos/databrick.png";
import langChain from "../images/logos/langChain.png";
import lamaIndex from "../images/logos/lamaIndex.png";
import metaAi from "../images/logos/meta.png";
import dust from "../images/logos/dust.png";
import fastApi from "../images/logos/fastApi.png";
import mlFlow from "../images/logos/mlflow.png";
import eleutherAi from "../images/logos/eleutherAi.png";
import vLLM from "../images/logos/vLLM.png";
import autotrain from "../images/logos/autoTrain.png";
import whitelangchain from "../images/card/langchain1.png";
import nasscom from "../images/card/nasscon.png";
import nvidia from "../images/card/nvidia.png";
import microsoft from "../images/card/microsoft.png";
import PageBg from "../images/connectBg.webp";

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
                { id: 1, url: dolly, alt: "Anthropic" },
                { id: 2, url: chatGpt, alt: "Logo 2" },
                { id: 3, url: anthropic, alt: "Logo 3" },
                { id: 4, url: bert, alt: "Logo 4" },
                { id: 5, url: mistral, alt: "Logo 5" },
                { id: 6, url: lamama, alt: "Logo " },
              ]}
            />

            <Expertise
              title="Cloud & Model Hub"
              logos={[
                { id: 1, url: azure, alt: "Anthropic" },
                { id: 2, url: chatGpt, alt: "Logo 2" },
                { id: 3, url: tranformer, alt: "Logo 3" },
                { id: 4, url: vertex, alt: "Logo 4" },
                { id: 5, url: amazon, alt: "Logo 5" },
              ]}
            />

            <Expertise
              title="Data Engineering & Annotation"
              logos={[
                { id: 1, url: labelStudio, alt: "Anthropic" },
                { id: 2, url: power, alt: "Logo 2" },
                { id: 3, url: infi, alt: "Logo 3" },
                { id: 4, url: anthene, alt: "Logo 4" },
                { id: 5, url: python, alt: "Logo 5" },
                { id: 6, url: databrick, alt: "Logo 5" },
              ]}
            />

            <Expertise
              title="Tooling APIs"
              logos={[
                { id: 1, url: langChain, alt: "Anthropic" },
                { id: 2, url: lamaIndex, alt: "Logo 2" },
                { id: 3, url: metaAi, alt: "Logo 3" },
                { id: 4, url: dust, alt: "Logo 3" },
                { id: 5, url: fastApi, alt: "Logo 3" },
              ]}
            />

            <Expertise
              title="MLOps & Observability"
              logos={[
                { id: 1, url: mlFlow, alt: "Anthropic" },
                { id: 2, url: eleutherAi, alt: "Logo 2" },
                { id: 3, url: vLLM, alt: "Logo 3" },
                { id: 4, url: autotrain, alt: "Logo 3" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------------------- Big Companies work with ------------------------- */}
      <section className="bg-[#141417] ">
        <div className="flex flex-wrap px-4 py-4 pt-16 pb-16">
          <Card
            imageSrc={whitelangchain}
            altText="LangChain Logo"
            title="World’s Top 10 LangChain Contributors"
            highlightedText="Top 10"
          />

          <Card
            imageSrc={nasscom}
            altText="Nasscom Logo"
            title="Member of Nasscom’s GenAI Foundry Cohort"
            highlightedText="GenAI Foundry"
          />

          <Card
            imageSrc={nvidia}
            altText="Nvidia Logo"
            title="Part of NVIDIA Inception Program"
            highlightedText="Inception Program"
          />

          <Card
            imageSrc={microsoft}
            altText="Microsoft Logo"
            title="Member of Microsoft's Founders Hub"
            highlightedText="Founders Hub"
          />
        </div>
      </section>

      <section
        className="relative h-[430px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${PageBg})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transition: "background-position 0.2s ease",
        }}
      >
        <h2 className="text-white text-center text-[60px] pt-10 font-medium mb-2 font-poppins">
          <span className="text-[#FD6162]">Connect</span> with Us
        </h2>

        <p className="text-white mx-auto text-center text-[18px] font-[200]">
          Keen to know more? Join our Open Source Communities
        </p>
      </section>
    </div>
  );
};

export default Hero;
