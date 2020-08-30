import React from 'react';
import "../Start/scss/title.scss"
import Header from "../duplicateComponent/Header";
import Footer from "../duplicateComponent/Footer";
import Title from "../duplicateComponent/Title";
import Schemes from "./Schemes";

type Scheme = {
    schemeList:{title:string,data:string,img:any}[]
    schemeHookList:{title:string,data:string,img:any}[]
}

const MyScheme: React.FC<Scheme> = (props) => {
    return (
        <>
            <Header/>
            <Title/>
            <Schemes schemesList={props.schemeList} schemesHookList={props.schemeHookList}/>
            <Footer/>
        </>
    )
}

export default MyScheme;