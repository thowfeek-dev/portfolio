import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import logo from "../assets/logo.png";

const Hero = () => {
    return (
        <section className={`relative w-full h-[80vh] mx-auto`}> {/* Adjusted height */}
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#FABC3F]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#FABC3F]">Thowfeek Salim</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        🚀 I am a software engineer specializing in innovative solutions and building robust applications with MERN stack mastery.
                    </p>
                </div>

                <img src={logo} alt="logo" className="hidden md:block" /> {/* Hidden on mobile */}
            </div>
        </section>
    );
};

export default Hero;
