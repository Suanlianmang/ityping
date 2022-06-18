import style from "../styles/Keyboard.module.css"


const Key = ({value, keyPress}) => {
    return(
        <button className={keyPress.toLowerCase() === value.toLowerCase() ? style.keyDown : style.key}>
            <p>{value}</p>
        </button>
    );
}

export default Key;