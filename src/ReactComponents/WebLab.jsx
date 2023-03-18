import React from "react";
import Button from "./Button";

function WebLab() {
    return (

        <div className="flex items-center flex-col mb-8 border-1 h-[190px] px-8 md:px-8 justify-center rounded-md shadow-md shadow-[#C0C0C0] md:mx-6 md:h-[300px]">
            <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-[#C0C0C0] text-center px-[30px]  ">Web Lab MSE1
                <span className="font-normal text-sm block">Source Code</span></p>
            <a href="https://github.com/sachindsilva16/WebP-Lab-Code/blob/main/WEB_MSE01/readme.md" >
                <Button />
            </a>


        </div>
    )
}

export default WebLab;
