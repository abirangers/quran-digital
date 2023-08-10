/* eslint-disable react-refresh/only-export-components */
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import quran from "../assets/quran.png";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";
import transition from "../transition";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";
const Home = () => {
  const [circle, setCircle] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1320) {
        setCircle(false);
      } else {
        setCircle(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row font-['viga'] min-h-[78vh] h-[600px] justify-center lg:justify-evenly items-center lg:mt-0">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-5 text-center"
            >
              <h1 className="text-[32px] font-medium leading-10 mb-[10px]">
                Haloo Selamat Datang di{" "}
                <RoughNotation
                  type="circle"
                  show={circle}
                  color="#F31559"
                  strokeWidth={4}
                  iterations={1}
                  padding={[14, 16, 14, 8]}
                  // animate={true}
                  animationDelay={1300}
                  animationDuration={1600}
                >
                  <span className="w-fit text-primary">Qur{"'"}an Pro</span>
                </RoughNotation>
              </h1>
              <p className="mb-[18px]">
                Welcome to AL-Qur{"'"}an Digital Berbasis Website
              </p>
              <Button
                href={`/quran`}
                className={`flex items-center gap-x-2 mx-auto font-['viga']`}
              >
                Qur{"'"}an Pro{" "}
                <div className="bg-white rounded-full p-[3px] text-primary">
                  <FaArrowRight className="text-sm " />
                </div>
              </Button>
            </motion.div>
            {/* </motion.div> */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="max-w-lg "
            >
              <img src={quran} className="w-full" alt="Al-Qur'an" />
            </motion.div>
          </div>
        </div>
      </section>
      <Quotes />
      <Footer />
    </>
  );
};

export default transition(Home);
