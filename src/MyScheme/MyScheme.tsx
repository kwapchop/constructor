import React from 'react';
import "../Start/scss/title.scss"
import Header from "../duplicateComponent/Header";
import Footer from "../duplicateComponent/Footer";
import Title from "../duplicateComponent/Title";
import Schemes from "./Schemes";

type Scheme = {}

const MyScheme: React.FC<Scheme> = (props) => {
    return (
        <>
            <Header/>
            <Title/>
            <Schemes schemesList={['123']}/>
            <Footer/>
        </>
    )
}

export default MyScheme;