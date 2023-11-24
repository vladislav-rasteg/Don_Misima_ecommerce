import s from "./Hero.module.scss"
import { ReactComponent as MainPageLogo } from "../../assets/mainPageLogo.svg"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import HeroImage1 from "../../assets/1.png"
import HeroImage2 from "../../assets/2.png"
import HeroImage3 from "../../assets/3.png"
import HeroImage4 from "../../assets/4.png"
import HeroImage5 from "../../assets/5.png"
import HeroImage6 from "../../assets/6.png"

const Hero = () => {

    const ref = useRef<HTMLDivElement>(null)

    const maxUp = window.innerHeight * 1.5 - window.innerHeight * 1.3;

    const options = {
        smooth: true,
        multiplier: 3,
    }

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 0", "2 1"]
    })
    
    const margin1 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["0px", `-${maxUp}px`])

    const margin2 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["0px", `-${maxUp}px`])

    const margin3 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["0px", `-${maxUp/1.5}px`])

    const margin4 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["0px", `-${maxUp/2}px`])

    const margin5 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["0px", `-${maxUp/2.5}px`])

    const margin6 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["0px", `-${maxUp/3}px`])

    return(
        <div className={s.firstBlock}>
            <div className={s.dark}>
                <MainPageLogo />
            </div>
            <div className={s.scrollContainer} ref={ref}></div>
            <motion.img className={s.heroImage} src={HeroImage1} style={{top: margin1, zIndex: 7}} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage2} style={{top: margin2, zIndex: 6}} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage3} style={{top: margin3, zIndex: 5}} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage4} style={{top: margin4, zIndex: 4}} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage5} style={{top: margin5, zIndex: 3}} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage6} style={{top: margin6, zIndex: 2}} alt="tobacco field"/>
        </div>
    )
}

export default Hero;