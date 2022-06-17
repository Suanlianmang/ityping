import style from "../styles/Keyboard.module.css"
import Key from "./Keys"


const keyValue = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

const Keyboard = ({keyPress, textIndex, setTextIndex}) => {

    var rowOne = [];
    for(var i=0; i < 10; i++){
        rowOne.push(<Key value={keyValue[i]} key={keyValue[i]} keyPress={keyPress} textIndex={textIndex} setTextIndex={setTextIndex}/>);
    }

    var rowTwo = [];
    for(var j=10; j < 19; j++){
        rowTwo.push(<Key value={keyValue[j]} key={keyValue[j]} keyPress={keyPress} textIndex={textIndex} setTextIndex={setTextIndex}/>)
    }

    var rowThree = [];
    for(var k=19; k < keyValue.length; k++){
        rowThree.push(<Key value={keyValue[k]} key={keyValue[k]} keyPress={keyPress} textIndex={textIndex} setTextIndex={setTextIndex}/>)
    }

    return(
        <div className={style.keyboard}>
            <div className={style.row}>
                {rowOne} 
            </div>
            <div className={style.row}>
                {rowTwo}  
            </div>
            <div className={style.row}>
                {rowThree}      
            </div>

        </div>
    );
}

export default Keyboard;