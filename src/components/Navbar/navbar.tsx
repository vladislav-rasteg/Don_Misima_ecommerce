import {useRef, useState, useEffect} from "react"
import s from "./navbar.module.scss"
import {ReactComponent as Logo} from '../../assets/headerLogo.svg'
import {ReactComponent as SearchIcon} from "../../assets/searchIcon.svg"
import {ReactComponent as ShoppingBagIcon} from "../../assets/shoppingBagIcon.svg"
import {ReactComponent as UserIcon} from "../../assets/userIcon.svg"


const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [theme, setTheme] = useState('none');

    const useWindowDimensions = () => {

    const hasWindow = typeof window !== 'undefined';
    
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
        width,
        height,
        };
    }
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        if (hasWindow) {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);
        return ;
    }

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
            // if scroll down hide the navbar
            setShowNavbar(false);
            } else {
            if(window.scrollY > 900 && window.innerWidth > 1400) {
                setTheme('light')
            } else {
                setTheme('none')
            }
            // if scroll up show the navbar
            setShowNavbar(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener("scroll", controlNavbar);
          };
        }
      }, [lastScrollY]);

    return(
        <div className={`${theme === 'none' ? s.none : s.light} ${s.navbarWrapper} ${!showNavbar && s.navbarHide}`}>
            <div className={s.navbar}>
                <Logo />
                <div className={s.navbarLinks}>
                    <a>Our Cigars</a>
                    <a>About Us</a>
                    <a>Locations</a>
                    <a>Certifications</a>
                </div>
                <div className={s.navButtons}>
                    <a className={s.navbarButton}><SearchIcon /></a>
                    <a className={s.navbarButton}><UserIcon /></a>
                    <a className={s.navbarButton}><ShoppingBagIcon /></a>
                </div>
            </div>
        </div>
        
    )
    
}

export default Navbar;