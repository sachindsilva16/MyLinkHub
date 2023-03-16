import React from "react";
import Button from "./Button";

function Moodle() {
    return (
        <div className="flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-8 justify-center rounded-md shadow-md shadow-[#C0C0C0]">
            <p className="mb-4 ml-4 mr-4 text-xl font-semibold text-[#C0C0C0]">NMAMIT Moodle</p>
            <a href="http://guru.nmamit.in" >
                <Button/>
            </a>
            <div className="mt-8">
                <p className="mb-2 ml-4 mr-4 font-medium text-[#C0C0C0]">[Alternates]</p>
            </div>
            <a href="http://115.243.167.87" >
                <Button/>
            </a>

        </div>
    );
}
export default Moodle;