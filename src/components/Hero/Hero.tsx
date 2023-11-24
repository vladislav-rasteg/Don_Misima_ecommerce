import s from "./Hero.module.scss"
import { ReactComponent as MainPageLogo } from "../../assets/mainPageLogo.svg"
import HeroImage1 from "../../assets/1.png"
import HeroImage2 from "../../assets/2.png"
import HeroImage3 from "../../assets/3.png"
import HeroImage4 from "../../assets/4.png"
import HeroImage5 from "../../assets/5.png"
import HeroImage6 from "../../assets/6.png"



const Hero = () => {
    return(
        <div className={s.firstBlock}>
            <div className={s.dark}>
                <MainPageLogo />
            </div>
            <img className={s.heroImage} src={HeroImage1} alt="tobacco field"/>
            <img className={s.heroImage} src={HeroImage2} alt="tobacco field"/>
            <img className={s.heroImage} src={HeroImage3} alt="tobacco field"/>
            <img className={s.heroImage} src={HeroImage4} alt="tobacco field"/>
            <img className={s.heroImage} src={HeroImage5} alt="tobacco field"/>
            <img className={s.heroImage} src={HeroImage6} alt="tobacco field"/>
        </div>
    )
}

export default Hero;