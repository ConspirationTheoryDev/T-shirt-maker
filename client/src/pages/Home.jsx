import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import { state } from "../store";

import {CustomButton} from "../components"
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src='three.js.png'
              alt='logo'
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {... headTextAnimation}>
                <h1 className='head-text'>
                    LET'S <br className= "x1:block hidden"/> DO IT
                    

                </h1>

            </motion.div>
            <motion.div
            {...headContentAnimation}
            className="flex-col gap-5"
            >
               <p className= "max-w-md font-normal text-gray-600 text-base"> Create your unique and exclusive shirts with our brand- new 3D
                customization tool. <strong>Unleash you imagination</strong>{" "}
                and definie your own style.
                </p> 
                <CustomButton/>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
