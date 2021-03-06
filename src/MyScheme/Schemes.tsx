import React from "react";
import "./scss/schemes.scss";
import Scheme from "./Scheme";
import SchemeRow from "./SchemeRow";

type Schemes = {
    schemesList: {title:string,data:string,img:any}[]
    schemesHookList: {title:string,data:string,img:any}[]
}

const Schemes: React.FC<Schemes> = (props) => {
    return (
        <div className="schemes">
            <SchemeRow title="Схемы для вязания спицами" list={props.schemesList}/>
            <SchemeRow title="Схемы для вязания крючком" list={props.schemesHookList}/>
        </div>
    )
}

export default Schemes;