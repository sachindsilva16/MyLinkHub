import React from "react";
import Telegram from "./Telegram";
import SmartCampus from "./SmartCampus";
import Moodle from "./Moodle";
import Header from "./Header"
import ResourceGroup from "./Resource";
import Footer from "./Footer";
import NmamitWebsite from "./NmamitWebsite";
// import Button from "./Button";
// import WebLab from "./WebLab";
import The5thSemTelegram from "./The5thSemTelegram"
import The6thSemTelegram from "./The6thSemTelegram"
import The7thSemTelegram from "./The7thSemTelegram"
import Favicon from "react-favicon";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import ToggleButton from "./togglebutton";

function App() {

    return (
        <div>
            <Favicon url="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"></Favicon>
            <div className="container mt-[20px] flex flex-col  mx-auto justify-center">

                <AnimationOnScroll animateIn="animate__fadeInLeftBig">

                    <Header />
                </AnimationOnScroll>
                

                <div className=" flex flex-col md:flex-row md:flex-wrap  items-center border h-auto md:h-auto border-gray-500 rounded-md mt-6 md:mx-10 p-8 pt-20 mb-10 mt-10 mx-4 md:mx-auto md:justify-center">
                    {/* <ToggleButton/> */}


                    {/*<WebLab/>*/}
                    <AnimationOnScroll animateIn="animate__rubberBand">
                        <Moodle />
                    </AnimationOnScroll>
                    <AnimationOnScroll initiallyVisible={true} animateIn="animate__rubberBand">
                        <SmartCampus />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__rubberBand">

                        <Telegram />
                    </AnimationOnScroll>

                    {/* ISE-STUDY RESOURCE WHATSAPP */}

                    <AnimationOnScroll animateIn="animate__rubberBand">

                        <ResourceGroup />
                    </AnimationOnScroll>


                    {/* NMAMIT OFFICIAL WEBSITE */}
                    <AnimationOnScroll animateIn="animate__rubberBand">

                        <NmamitWebsite />
                    </AnimationOnScroll>

                    {/* 5th sem Preface-Telegram */}
                    <AnimationOnScroll animateIn="animate__rubberBand">

                        <The5thSemTelegram />
                    </AnimationOnScroll>

                    {/* 6th sem Preface-Telegram */}
                    <AnimationOnScroll animateIn="animate__rubberBand">
                        <The6thSemTelegram />
                    </AnimationOnScroll>

                    {/* 7th sem Preface-Telegram */}
                    <AnimationOnScroll animateIn="animate__rubberBand">
                        <The7thSemTelegram />
                    </AnimationOnScroll>


                </div>
            </div>
            <Footer />
        </div>
    );
}




export default App;
