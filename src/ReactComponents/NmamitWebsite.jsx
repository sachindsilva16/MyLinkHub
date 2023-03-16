import React from "react";

import Button from "./Button";

function NmamitWebsite(){
    return(
        <div className="flex items-center flex-col mb-8 border-1 h-[190px] px-0 justify-center rounded-md shadow-md shadow-[#C0C0C0]">
                        <p className="mb-4 ml-0 mr-0 text-xl font-semibold text-[#C0C0C0] text-center px-[11px]"><span className="text-center">NMAMIT Official Website</span>
                        </p>
                        <a href="https://nmamit.nitte.edu.in/  " >
                            <Button/>
                        </a>


                    </div>
    );
}
export default NmamitWebsite;