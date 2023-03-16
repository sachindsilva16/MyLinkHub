import React from "react";
import Button from "./Button";

function ResourceGroup() {
    return (
        <div className="flex items-center flex-col mb-8 border-1 h-[190px] px-0 justify-center rounded-md shadow-md shadow-[#C0C0C0]">
            <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-[#C0C0C0] text-center px-[30px]">ISE-Study Resources
                <span className="font-normal text-sm block">Whatsapp</span></p>
            <a href="https://chat.whatsapp.com/HZBHwsEBtpr5IWl4QAPv0V   " >
                <Button/>
            </a>


        </div>
    );
}

export default ResourceGroup;