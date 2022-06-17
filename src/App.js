import { useState } from "react";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
function App() {
    var [keyPress, setKeyPress] = useState('');
    var [textIndex, setTextIndex] = useState(0);
    var [text, setText] = useState([])

    window.addEventListener('keydown', (e) => {
        setKeyPress(e.key);
        setText(...text + e.key);
        setKeyPress('');
    });
    return (
        <div className="App">
            <Display text={text}/>
            <Keyboard keyPress={keyPress} textIndex={textIndex} setTextIndex={setTextIndex}/>
        </div>
    );
}

export default App;
