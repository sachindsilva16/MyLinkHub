import React from "react";
// import App from "./App";

function ToggleButton() {

    return (
        <div className="relative inline-block w-10 left-[190px] bottom-[20px] align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            <label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" id="toggle-bg"></label>
        </div>
    );
}

export default ToggleButton;