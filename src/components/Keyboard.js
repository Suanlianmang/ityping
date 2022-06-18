import style from "../styles/Keyboard.module.css"
import Key from "./Keys"


const Keyboard = ({keyPress, keyValue}) => {

    var rowOne = [];
    for(var i=0; i < 10; i++){
        rowOne.push(<Key value={keyValue[i]} key={keyValue[i]} keyPress={keyPress}/>);
    }

    var rowTwo = [];
    for(var j=10; j < 19; j++){
        rowTwo.push(<Key value={keyValue[j]} key={keyValue[j]} keyPress={keyPress}/>)
    }

    var rowThree = [];
    for(var k=19; k < keyValue.length; k++){
        rowThree.push(<Key value={keyValue[k]} key={keyValue[k]} keyPress={keyPress}/>)
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