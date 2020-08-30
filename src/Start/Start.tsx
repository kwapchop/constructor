import React from 'react';
import Header from "../duplicateComponent/Header";
import Title from "../duplicateComponent/Title";
import Info from "./Info";
import Footer from "../duplicateComponent/Footer";


type Start={
    changeScreen:any
}

const Start: React.FC<Start> = (props) => {
    return (
    <>
    <Header/>
    <Title/>
    <Info changeScreen={props.changeScreen}/>
    <Footer/>
    </>
    )
}

export default Start;