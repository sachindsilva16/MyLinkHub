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
// import ToggleButton from "./togglebutton";

function App() {
         
    return (
        <div>
            <div className="container mt-[20px] flex flex-col  mx-auto justify-center">
                <Header />

                <div className=" flex flex-col md:flex-row md:flex-wrap  items-center border h-auto md:h-auto border-gray-500 rounded-md mt-6 md:mx-10 p-8 pt-10 mb-10 mx-4 md:mx-auto md:justify-center">
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

                    <div className="flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-10 justify-center rounded-3xl shadow-md bg-gradient-to-b from-blue-500 via-blue-400 to-violet-600 text-black shadow-sm shadow-green-400 md:mx-6 md:h-[300px]">
                        <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-center px-[26px]">6th Semester Preface<span className="block text-sm font-normal text-center">Telegram</span>
                        </p>
                        <a href="https://t.me/ise_nmamit/641" >
                            <Button buttonName="Click Here"/>
                        </a>


                    </div>

                    {/* 7th sem Preface-Telegram */}

                    <div className="flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-16 justify-center rounded-3xl shadow-md bg-gradient-to-b from-blue-500 via-blue-400 to-violet-600 text-black shadow-sm shadow-green-400 md:mx-6 md:h-[300px]">







                        <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-center px-[26px]">7th Semester Preface<span className="block text-sm font-normal text-center">Telegram</span>
                        </p>
                        {/* <a href="https://t.me/ise_nmamit/641" > */}
                        <button className=" bg-blue-200 w-[180px] h-10 rounded-md text-black bg-gradient-to-r from-indigo-600 to-violet-400 shadow-lg shadow-green-400/50 font-medium  active:cursor-not-allowed hover:cursor-not-allowed
                                    relative hover:scale-110">Not Avaiable</button>
                        {/* </a> */}


                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
