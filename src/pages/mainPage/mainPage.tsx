import {useRef, useState, useEffect} from "react"
import Navbar from "../../components/Navbar/navbar"
import s from "./mainPage.module.scss"
import Heading from "../../components/Heading/Heading"
import Hero from "../../components/Hero/Hero"
import { ReactComponent as PablosLogo } from "../../assets/PablosLogo.svg"
import { ReactComponent as MariasLogo } from "../../assets/MariasLogo.svg"
import { ReactComponent as DiegosLogo } from "../../assets/DiegosLogo.svg"
import ShopLocations from "../../components/ShopLocations/ShopLocations"
import Footer from "../../components/Footer/Footer"

const MainPage = () => {

    return(
        <div className={s.pageWrapper}>
            <Navbar />
            <Hero />
            <section>
                <Heading heading={"OUR BLENDS"} />
                <div className={s.ourBlends}>
                    <div className={s.blendCard}>
                        <div className={s.blendCardPattern}></div>
                        <PablosLogo className={s.blendCardLogo}/>
                    </div>
                    <div className={s.blendCard}>
                        <div className={s.blendCardPattern}></div>
                        <MariasLogo className={s.blendCardLogo}/>
                    </div>
                    <div className={s.blendCard}>
                        <div className={s.blendCardPattern}></div>
                        <DiegosLogo className={s.blendCardLogo}/>
                    </div>
                </div>
            </section>

            <section>
                <Heading heading={"BESTSELLERS"} />
                cigars grid
                <a className={s.fullWidthButton}>View All</a>
            </section>

            <div className={s.certificatesBlock}>
                <div className={s.content}>
                    <h2>Certificates of Authenticity are a symbol of our dedication to providing you with a premium smoking experience</h2>
                    <a className={s.fullWidthButton}>View Our Certificates</a>
                </div>
            </div>

            <ShopLocations />
            <Footer />
        </div>
        
    )
}

export default MainPage;