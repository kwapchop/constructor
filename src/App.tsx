import React, {useRef, useState} from 'react';
import './scss/main.scss'
import Start from "./Start/Start";
import './fonts/scss/fonts.scss'
import MyScheme from "./MyScheme/MyScheme";

function App() {
    const [screen, setScreen] = useState<number>(1);
    const changeScreen = () => {
        setScreen((prev:number): number => prev+1);
    }

    if (screen === 1) {
        return (
            <div className="wrapper">
                <Start changeScreen={changeScreen}/>
            </div>
        );
    } else if (screen === 2) {
        return (
            <div className="wrapper">
                <MyScheme/>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <Start changeScreen={changeScreen}/>
        </div>
    )
}

export default App;
