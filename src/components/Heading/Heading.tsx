import s from "./Heading.module.scss"

interface HeadingProps{
    heading: string;
}

const Heading = ({heading}: HeadingProps) => {
    return(
        <div className={s.heading}>
                <div className={s.divider1}></div>
                <h1>{heading}</h1>
                <div className={s.divider2}></div>
        </div>
    )
}

export default Heading;