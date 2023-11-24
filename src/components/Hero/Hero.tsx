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

    const options = {
        smooth: true,
        multiplier: 3,
    }

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start", "end end"]
    })

    scrollYProgress.on("change", (() => {
        console.log(scrollYProgress.getVelocity())
    }))

    const margin1 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["120px", `0px`])

    const margin2 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["105px", `0px`])

    const margin3 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["90px", `0px`])

    const margin4 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["75px", `0px`])

    const margin5 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["60px", `0px`])

    const margin6 = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    }), [0, 1], ["45px", `0px`])

    return(
        <div className={s.firstBlock} ref={ref}>
            <div className={s.dark}>
                <MainPageLogo />
            </div>
            <motion.img className={s.heroImage} src={HeroImage1} style={{bottom: margin1}} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage2} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage3} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage4} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage5} alt="tobacco field"/>
            <motion.img className={s.heroImage} src={HeroImage6} alt="tobacco field"/>
        </div>
    )
}

export default Hero;