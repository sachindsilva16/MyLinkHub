import React from "react";

function TelegramLogo(props){
    return (
        <a href={props.href} className="animate-bounce md:animate-bounce1s  hover:animate-wiggle rounded-full md:hover:scale-110 cursor-pointer pb-2 px-2" target="_blank">
            <img className=" hover:grayscale md:hover:scale-110 active:scale-115 duration-200 h-[47px] w-[47px] rounded-full invert" src={props.src} />
        </a>
    );
}
export default TelegramLogo;