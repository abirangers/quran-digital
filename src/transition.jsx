import { motion } from "framer-motion";
import logo from "./assets/logo.png";
const transition = (OgComponent) => {
  // eslint-disable-next-line react/display-name
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ clipPath: "inset(0 50% 0 0)" }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
      >
        <div className="xl:max-w-[400px] lg:max-w-[360px] md:max-w-[340px] max-w-xs w-[80%] fixed flex items-center justify-center inset-0 mx-auto">
          <img src={logo} alt="" className="w-full" />
        </div>
      </motion.div>

      <motion.div
        className="slide-out"
        initial={{ clipPath: "inset(0 0 0 50%)" }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
      >
        <div className="xl:max-w-[400px] lg:max-w-[360px] md:max-w-[340px] max-w-xs w-[80%] fixed flex items-center justify-center inset-0 mx-auto">
          <img src={logo} alt="" className="w-full" />
        </div>
      </motion.div>
    </>
  );
};

export default transition;
