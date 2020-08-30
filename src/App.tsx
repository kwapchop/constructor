import React, {useRef, useState} from 'react';
import './scss/main.scss'
import Start from "./Start/Start";
import './fonts/scss/fonts.scss'
import MyScheme from "./MyScheme/MyScheme";


//Работы которые уже есть
//Картинка - сейчас импортируется ниже(Должна приходить с сервера)
import workImage from "./image/svg/workImage.svg";


const App: React.FC = () => {
    const [screen, setScreen] = useState<number>(1);
    const changeScreen = () => {
        setScreen((prev: number): number => prev + 1);
    }

    const schemeList = [
        {
            title:"Моя первая схема в этом онлайн-конструкторе",
            data: "30.09.20",
            img:workImage,
        },
        {
            title:"Моя вторая схема тут",
            data: "30.09.21",
            img:workImage,
        }
    ]
    const schemeHookList = [
        {
            title:"Моя первая схема для крючка",
            data: "30.10.20",
            img:workImage,
        },
        {
            title:"А тут вторая схема которую очень долго изобретали много людей",
            data: "30.01.21",
            img:workImage,
        }
    ]

    if (screen === 1) {
        return (
            <div className="wrapper">
                <Start changeScreen={changeScreen}/>
            </div>
        );
    } else if (screen === 2) {
        return (

            <div className="wrapper">
                <MyScheme schemeList={schemeList} schemeHookList={schemeHookList}/>
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