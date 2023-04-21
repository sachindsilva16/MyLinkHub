import React from "react";

function TelegramLogo(props){
    return (
        <a href={props.href} className="animate-spin hover:animate-wiggle rounded-full md:hover:scale-110 cursor-pointer pb-2 px-2">
            <img className=" hover:grayscale md:hover:scale-110 active:scale-110 h-[47px] w-[47px] rounded-full invert" src={props.src} />
        </a>
    );
}
export default TelegramLogo;