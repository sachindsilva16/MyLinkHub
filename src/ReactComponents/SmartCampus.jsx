import React from "react";
import Button from "./Button";

function SmartCampus() {
    return (
        <div className="motion-safe:animate-fadeIn2.5s flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-20 justify-center rounded-3xl shadow-md bg-gradient-to-b from-blue-500 via-blue-400 to-violet-600 text-black shadow-sm shadow-green-400 md:mx-6 md:h-[300px]">
            <p className="mb-4 ml-4 mr-4 text-2xl font-semibold">Smart Campus</p>
            <a href="http://parent-login.nmamit.in/DashBoard" target="_blank" >
                <Button buttonName="Click Here"/>
            </a>


        </div>
    );
}

export default SmartCampus;