import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
function App() {
    const alphatbet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'];

    var [keyPress, setKeyPress] = useState('');
    var [textIndex, setTextIndex] = useState(0);
    var [text, setText] = useState([]);
    var [keyValue, setKeyValue] = useState(alphatbet);
    var [shiftPress, setShiftPress] = useState(false);
    var [middleText, setMiddleText] = useState('This is a typing practice web app. It is good')


    const handelKeyPress = (e) => {
        if (keyValue.includes(e.key)){
            setKeyPress(e.key);
            setTextIndex(textIndex + 1);
            setMiddleText(middleText.substring(1));
            setText([...text, e.key]);
        }
        if(e.key === ' '){
            setText([...text, ' ']);
            setTextIndex(textIndex + 1);
            setMiddleText(middleText.substring(1))
        }
        if(e.key === 'Shift'){
            setKeyValue(keyValue.map((item) => {return item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()}));
            setShiftPress(true);
        }
    }


    const handleKeyUp = (e) => {
        setKeyPress('');
        if(!e.getModifierState('Shift') && shiftPress){
            setKeyValue(keyValue.map((item) => {return item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()}));
            setShiftPress(false);
        }

    }


    useEffect(() => {
        window.addEventListener('keydown', handelKeyPress);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handelKeyPress);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [text, keyValue]);

    return (
        <div className="App">
            <Display text={text} middleText={middleText}/>
            <Keyboard keyPress={keyPress} keyValue={keyValue}/>
        </div>
    );
}

export default App;
