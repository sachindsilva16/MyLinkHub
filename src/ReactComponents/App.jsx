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
// import ToggleButton from "./togglebutton";

function App() {

         
    return (
        <div>
            <div className="dark:bg-white container mt-[20px] flex flex-col  mx-auto justify-center">
                <Header />

                <div className=" motion-safe:animate-fadeIn  flex flex-col md:flex-row md:flex-wrap  items-center border h-[2000px] md:h-[1200px] border-gray-500 rounded-md m-6 p-10 md:w-[1200px] md:mx-auto md:justify-center">
                    {/* <ToggleButton/> */}

                    
                    <WebLab/>
                    <Moodle />
                    <SmartCampus />
                    <Telegram />

                    {/* ISE-STUDY RESOURCE WHATSAPP */}

                    <ResourceGroup />


                    {/* NMAMIT OFFICIAL WEBSITE */}

                    <NmamitWebsite />

                    {/* 5th sem Preface-Telegram */}

                    <div className="flex items-center flex-col mb-8 border-1 h-[190px] px-0 justify-center rounded-md shadow-md shadow-[#C0C0C0] md:mx-6 md:h-[300px]">
                        <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-[#C0C0C0] text-center px-[26px]">5th Semester Preface<span className="block text-sm font-normal text-center">Telegram</span>
                        </p>
                        <a href="https://t.me/ise_nmamit/484" >
                            <Button />
                        </a>


                    </div>

                    {/* 6th sem Preface-Telegram */}

                    <div className="flex items-center flex-col mb-8 border-1 h-[190px] px-0 justify-center rounded-md shadow-md shadow-[#C0C0C0] md:mx-6 md:h-[300px]">
                        <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-[#C0C0C0] text-center px-[26px]">6th Semester Preface<span className="block text-sm font-normal text-center">Telegram</span>
                        </p>
                        <a href="https://t.me/ise_nmamit/641" >
                            <Button />
                        </a>


                    </div>

                    {/* 7th sem Preface-Telegram */}

                    <div className="flex items-center flex-col mb-8 border-1 h-[190px] px-0 justify-center rounded-md shadow-md shadow-[#C0C0C0] md:mx-6 md:h-[300px]">







                        <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-[#C0C0C0] text-center px-[26px]">7th Semester Preface<span className="block text-sm font-normal text-center">Telegram</span>
                        </p>
                        {/* <a href="https://t.me/ise_nmamit/641" > */}
                        <button className=" bg-blue-200 w-[180px] h-10 rounded-md text-black bg-gradient-to-r from-blue-600 to-green-400 shadow-lg shadow-green-400/50 font-medium  active:cursor-not-allowed hover:cursor-not-allowed
                                    relative hover:scale-110">Coming Soon</button>
                        {/* </a> */}


                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;