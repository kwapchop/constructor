import React from "react";


type Scheme = {
    item:{title:string,data:string,img:any}
}

const Scheme: React.FC<Scheme> = (props) => {
    return (
        <div className="schemes__scheme-item">
            <div className="schemes__scheme-img">
                <img src={props.item.img} alt=""/>
            </div>
            <div className="schemes__scheme-info">
                <div className="schemes__scheme-title">
                    {props.item.title}
                </div>
                <div className="schemes__scheme-data">
                    Измененно {props.item.data}
                </div>
            </div>
        </div>
    )
}
export default Scheme;