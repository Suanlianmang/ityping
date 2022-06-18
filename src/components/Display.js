import style from "../styles/Display.module.css"


const Display = ({text, middleText}) => {
    console.log(text);
    return(
        <div className={style.main}>
            <p className={style.first}>I think you've just made up shorthand syntax for the border: property there</p>
            <p className={style.middle}><b>{text}</b> {middleText}</p>
            <p className={style.third}>and you can see what styles are being inherited and from where - it is an invaluable too in any css debugging.</p>
        </div>
    );
}

export default Display;