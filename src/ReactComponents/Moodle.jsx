import React from "react";
import Button from "./Button";

function Moodle() {

    function handleLink(event) {
        var selectValue = event.target.value;
        console.log(selectValue)
        if(selectValue==="1"){
            return ("https://www.google.com");
        }
        else{
            return "https://www.github.com"

        }
    }

    return (
        <div className="flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-8 justify-center rounded-md shadow-md shadow-[#C0C0C0] md:mx-6 md:h-[300px]">
            <p className="mb-4 ml-4 mr-4 text-xl font-semibold text-[#C0C0C0]">NMAMIT Moodle</p>


            {/* <div className="flex justify-center">
            <select data-te-select-init className=" transition duration-50 ease-in-out active:translate-y-1 active:scale-110 bg-blue-200 w-[180px] h-10 rounded-md text-black bg-gradient-to-r from-blue-600 to-green-400 shadow-lg shadow-green-400/50 font-medium active:text-[#C0C0C0] active:cursor-pointer  hover:cursor-pointer md:hover:scale-110 relative">
                <option value="1">URL Address</option>
                <option value="2">IP Address</option>
            </select>
            </div> */}


            {/* <select id="select-type" className="flex justify-center transition duration-50 ease-in-out active:translate-y-1 active:scale-110 bg-blue-200 text-gray-900 p-2.5 w-[180px] h-10 rounded-md text-black bg-gradient-to-r from-blue-600 to-green-400 shadow-lg shadow-green-400/50 font-medium active:text-[#C0C0C0] active:cursor-pointer hover:cursor-pointer md:hover:scale-110 relative" onClick={handleLink}>
                <option selected>Address Type</option>
                <option value="1">URL Address</option>
                <option value="2">IP Address</option>
            </select> */}
    



            <a href="http://guru.nmamit.in" >
                <Button buttonName="Click Here"/>
            </a>
            <div className="mt-8">
                <p className="mb-2 ml-4 mr-4 font-medium text-[#C0C0C0]">[Alternates]</p>
            </div>
            <a href="http://115.243.167.87" >
                <Button buttonName="Click Here"/>
            </a> 

        </div>
    );
}
export default Moodle;