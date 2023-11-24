import Heading from "../Heading/Heading";
import s from "./ShopLocations.module.scss"

const ShopLocations = () => {
    return(
        <section>
            <Heading heading={"OUR SHOP LOCATIONS"} />
            <div className={s.blockContent}>
                <div className={s.map}>
                <iframe src="https://www.google.com/maps/d/embed?mid=1VmW2ValrYfJraurcKP6GrCP0PTsxPYc&hl=en&ehbc=2E312F" width="100%" height="640"></iframe>
                </div>
                <div className={s.locationsList}>
                    <div className={s.location}>
                        <p className={s.address}>Sweden, Gustavsberg, Hantverkarg 65</p>
                        <a href="tel:+460709788647" className={s.phone}>+46 070-9788647</a>
                    </div>
                    <div className={s.location}>
                        <p className={s.address}>Sweden, Bergby, Lillesäter Kullberg 4</p>
                        <a href="tel:+460709788647" className={s.phone}>+46 070-9788647</a>
                    </div>
                    <div className={s.location}>
                        <p className={s.address}>Sweden, Kinnared, Djursbo 53</p>
                        <a href="tel:+460709788647" className={s.phone}>+46 070-9788647</a>
                    </div>
                    <div className={s.location}>
                        <p className={s.address}>Sweden, Hallabro, Gulleråsen Västabäcksgatu 85</p>
                        <a href="tel:+460709788647" className={s.phone}>+46 070-9788647</a>
                    </div>
                    <div className={s.location}>
                        <p className={s.address}>Sweden, Furudal, Nittsjö Kvarngatu 47</p>
                        <a href="tel:+460709788647" className={s.phone}>+46 070-9788647</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopLocations;