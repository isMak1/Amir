import React, { useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import Logo from "../assets/img/hero/logo.png";
import "../hero.css";

const Hero = () => {
  useEffect(() => {
    let index = 0,
      interval = 1000;

    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      star.style.animation = "none";
      // eslint-disable-next-line no-unused-expressions
      star.offsetHeight;
      star.style.animation = "";
    };

    const stars = document.getElementsByClassName("magic-star");
    for (const star of stars) {
      setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 2000);
      }, index++ * (interval / 3));
    }
  }, []);

  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right hero xl:mb-[-200px]">
      <Header />
      <div className="container mx-auto min-h-[880px] flex justify-center items-center">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="text-center flex flex-col gap-10 items-center relative z-10"
          >
            <motion.h1
              variants={fadeIn("down", "tween", 0.3, 1.1)}
              className="items-center"
            >

              <p className="sparky shadow-lg shadow-accent-hover clogo">
                <span className="magic">
                  <span className="magic-star">
                    <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span className="magic-star">
                    <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span className="magic-star">
                    <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <img
                    className="lg:w-[650px] lg:h-[250px] mb-5 h-50 w-80"
                    src={Logo}
                    alt=""
                  />
                  <span className="magic-text font-secondary">5230 Jean-Talon E Saint-Leonard Montreal, QC H1S1L1</span>
                </span>
              </p>
            </motion.h1>
            <motion.div 
            variants={fadeIn("down", "tween", 0.5, 1.1)}
            className="grid grid-cols-3 gap-3">
              <a alt="" href="tel:514-254-2222">
                <button className="btn sparky">Order Now</button>
              </a>
              <a alt="" href="/#booking">
                <button className="btn sparky blink">Call Us Now</button>
              </a>
              <a alt="" href="/#booking">
                <button className="btn sparky">Reservation</button>
              </a>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;