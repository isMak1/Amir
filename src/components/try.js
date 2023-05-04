import React from "react";
import { heroData } from "../data";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import Logo from "../assets/img/hero/logo.png";

const Menu = () => {
  const left = document.getElementById("left-side");
  const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
  }

  document.onmousemove = e => handleOnMove(e);
  document.ontouchmove = e => handleOnMove(e.touches[0]);
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right ">
      <div id="left-side" className="relative side">

        <div className="container mx-auto min-h-[980px] flex justify-center items-center item">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="text-center flex flex-col gap-8 items-center relative z-10"
          >
            <motion.h1
              variants={fadeIn("down", "tween", 0.3, 1.1)}
              className="h1 items-center"
            >
              <img
                className="w-[500px] h-[200px]"
                src={Logo}
                alt=""
              />
              <p className="text-white text-[18px] mt-4">5230 Jean-Talon E Saint-Leonard Montreal, QC H1S1L1</p>
            </motion.h1>
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1.1)}
              className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium"
            >
              Là où l'Orient rencontre l'Occident pour la fusion des saveurs Libanaises
            </motion.div>

            <motion.div 
            variants={fadeIn("down", "tween", 0.5, 1.1)}
            className="grid grid-cols-2 gap-4">
              <a alt="" href="/#menu">
                <button className="btn blink">514-254-2222</button>
              </a>
              <a alt="" href="/#menu">
                <button className="btn">Reservation</button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div id="right-side" className="relative side">

        <div className="container mx-auto min-h-[980px] flex justify-center items-center item">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="text-center flex flex-col gap-8 items-center relative z-10"
          >
            <motion.h1
              variants={fadeIn("down", "tween", 0.3, 1.1)}
              className="h1 items-center"
            >
              <img
                className="w-[500px] h-[200px]"
                src={Logo}
                alt=""
              />
              <p className="text-white text-[18px] mt-4">5230 Jean-Talon E Saint-Leonard Montreal, QC H1S1L1</p>
            </motion.h1>
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1.1)}
              className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium"
            >
              Là où l'Orient rencontre l'Occident pour la fusion des saveurs Tunisiennes
            </motion.div>

            <motion.div 
            variants={fadeIn("down", "tween", 0.5, 1.1)}
            className="grid grid-cols-2 gap-4">
              <a alt="" href="/#menu">
                <button className="btn">514-254-2222</button>
              </a>
              <a alt="" href="/#menu">
                <button className="btn blink">Reservation</button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;


import '../about.css'

const About = () => {
  const [configuration, setConfiguration] = useState(1);
  const [roundness, setRoundness] = useState(1);

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 },
  ];

  useEffect(() => {
    let prev = 0;

    const intervalId = setInterval(() => {
      const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

      setConfiguration(combination.configuration);
      setRoundness(combination.roundness);

      prev = index;
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="body">
      <div
        id="wrapper"
        data-configuration={configuration}
        data-roundness={roundness}
      >
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    </div>
  );

};

export default About;