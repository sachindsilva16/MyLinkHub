import React from "react";

function DownloadButton() {
    return (
        <div>
            <button className="transition duration-50 ease-in-out active:translate-y-1 active:scale-110 bg-blue-200 w-[180px] h-10 rounded-md text-black bg-gradient-to-r from-blue-600 to-green-400 shadow-lg shadow-green-400/50 font-medium active:text-[#C0C0C0] active:cursor-pointer  hover:cursor-pointer md:hover:scale-110 relative mt-6 mb-12"><span className="relative top-[7px]">Download</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20px" height="20px" className="invert-gray-200 relative left-[150px]
                                    bottom-[19px]"><path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z" /></svg></button>
        </div>
    );
}

export default DownloadButton;