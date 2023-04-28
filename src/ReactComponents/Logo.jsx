import React from "react";

function Logo(props) {
    return (
        <a href={props.href} className="animate-bounce md:animate-bounce1s hover:animate-spin rounded-full md:hover:scale-110 cursor-pointer pb-2 px-2" target="_blank">
            <img className=" hover:grayscale md:hover:scale-110 active:scale-110 duration-200 h-[40px] w-[40px] rounded-full" src={props.src} alt="Loading Logo"/>
        </a>
    );
}

export default Logo;
