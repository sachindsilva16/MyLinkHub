import React from "react";
import Telegram from "./Telegram";
import SmartCampus from "./SmartCampus";
import Moodle from "./Moodle";
import Header from "./Header"
import ResourceGroup from "./Resource";
import Footer from "./Footer";
import NmamitWebsite from "./NmamitWebsite";
import Button from "./Button";
import WebLab from "./WebLab";
import The5thSemTelegram from "./The5thSemTelegram"
import The6thSemTelegram from "./The6thSemTelegram"
import The7thSemTelegram from "./The7thSemTelegram"

// import ToggleButton from "./togglebutton";

function App() {
         
    return (
        <div>
            <div className="container mt-[20px] flex flex-col  mx-auto justify-center">
                <Header />

                <div className=" flex flex-col md:flex-row md:flex-wrap  items-center border h-auto md:h-auto border-gray-500 rounded-md mt-6 md:mx-10 p-8 pt-20 mb-10 mt-10 mx-4 md:mx-auto md:justify-center">
                    {/* <ToggleButton/> */}

                    
                  {/*<WebLab/>*/}
                    <Moodle />
                    <SmartCampus />
                    <Telegram />

                    {/* ISE-STUDY RESOURCE WHATSAPP */}

                    <ResourceGroup />


                    {/* NMAMIT OFFICIAL WEBSITE */}

                    <NmamitWebsite />

                    {/* 5th sem Preface-Telegram */}

                    <The5thSemTelegram/>

                    {/* 6th sem Preface-Telegram */}

                    <The6thSemTelegram/>

                    {/* 7th sem Preface-Telegram */}
                    <The7thSemTelegram/>
                    

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
