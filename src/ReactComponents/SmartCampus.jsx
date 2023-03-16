import React from "react";
import Button from "./Button";

function SmartCampus() {
    return (
        <div className="flex items-center flex-col mb-8 border-1 h-[190px] px-10 justify-center rounded-md shadow-md shadow-[#C0C0C0]">
            <p className="mb-4 ml-4 mr-4 text-xl font-semibold text-[#C0C0C0]">Smart Campus</p>
            <a href="http://parent-login.nmamit.in/DashBoard" >
                <Button/>
            </a>


        </div>
    );
}

export default SmartCampus;