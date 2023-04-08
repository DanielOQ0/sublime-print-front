import "./CardScroll.css";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: -150,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2
    }
  }
};

const hue = (h) => `rgba(${h})`;

export default function Card({ title, text, hueA, hueB , img}) {

  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5, margin: "-200px 0px 0px 0px"}}
    >
        <div className="splashContainer">
            <div className="splash" style={{ background }} >
                <motion.div className="card" variants={cardVariants} >
                    <img src={img} alt="" />
                </motion.div>
            </div>
        </div>
      
      <motion.div className="containerText">
        <h2>{title}</h2>
        <span>{text}</span>
      </motion.div>
    </motion.div>
  );
}