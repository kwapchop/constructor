import React from "react";
import Scheme from "./Scheme";
import arrow from "../image/svg/arrow-down.svg";
import addScheme from "../image/svg/add-scheme.svg";

type Schemes = {
    list: any[],
    title: string,
}

const SchemeRow: React.FC<Schemes> = (props) => {
    return (
        <div className="schemes__row">
            <div className="schemes__title">
                {props.title}
                <img className="schemes__arrow" src={arrow} alt=""/>
            </div>
            <div className="schemes__list">
                <div className="schemes__add">
                    <img src={addScheme} alt=""/>
                </div>
                {props.list.map(element => {
                    return (
                        <Scheme/>
                    )
                })}
            </div>
        </div>
    )
}

export default SchemeRow