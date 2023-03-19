import React from "react";
import Button from "./Button";
import DownloadButton from "./DownloadButton";

function WebLab(){
    return (
        // <div className="flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-8 justify-center rounded-md shadow-md shadow-[#C0C0C0] md:mx-6 md:h-[300px]">
        //     <p className="mb-4 ml-4 mr-4 text-xl font-semibold text-[#C0C0C0]"></p>
        //     <a href="" >
        //         <Button/>
        //     </a>
            

        // </div>

<div className="flex items-center flex-col mb-8 border-1 h-[350px] px-8 md:px-8 justify-center rounded-md shadow-md shadow-[#C0C0C0] md:mx-6 md:h-[300px]">
<p className="mb-4 ml-0 mr-0 text-xl font-semibold text-[#C0C0C0] text-center px-[30px]  ">Web Lab MSE1
    <span className="font-normal text-sm block">Preview</span></p>
<a href="https://sachindsilva16.github.io/WebP-Lab-Codes/WEB_MSE01.rar" >
    <Button/>
    <DownloadButton/>
</a>


</div>
    )
}

export default WebLab;
