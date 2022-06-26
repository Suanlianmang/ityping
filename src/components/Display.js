import style from "../styles/Display.module.css"


const Display = ({text, middleText}) => {
    return(
        <div className={style.main}>
            <p className={style.middle}><b>{text}</b> {middleText}</p>
        </div>
    );
}

export default Display;