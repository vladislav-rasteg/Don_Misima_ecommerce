import Heading from "../Heading/Heading";
import s from "./Footer.module.scss"
import {ReactComponent as Logo} from "../../assets/headerLogo.svg"
import {ReactComponent as Inst} from "../../assets/InstagramLogo.svg"

const Footer = () => {
    return(
        <div className={s.footer}>
            <div className={s.footerPattern}></div>
            <div className={s.footerContent}>
                <div className={s.columnSpaceBetween}>
                    <div className={s.row}>
                        <Logo />
                        <a className={s.socialMedia}><Inst /></a>
                    </div>
                    <p className={s.smallText}>© 2023 Don Misima. All Rights Reserved.</p>
                </div>

                <div className={s.columnSpaceBetween}>
                    <div className={s.column}>
                        <a className={s.footerLink}>Our Cigars</a>
                        <a className={s.footerLink}>About Us</a>
                        <a className={s.footerLink}>Locations</a>
                        <a className={s.footerLink}>Certifications</a>
                    </div>
                    <div className={s.row}>
                        <a className={s.smallTextLink}>Legal</a>
                        <a className={s.smallTextLink}>Privacy</a>
                    </div>
                </div>

                <div className={s.columnGap}>
                    <div className={s.columnNoGap}>
                        <p className={s.smallLightText}>Email</p>
                        <a className={s.smallTextLink}>hello@donmisima.com</a>
                    </div>
                    <div className={s.columnNoGap}>
                        <p className={s.smallLightText}>Phone</p>
                        <a className={s.smallTextLink}>+ 1 (555) 123-4567</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;