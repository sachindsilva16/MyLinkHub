import React from "react";

function Logo(props) {
    return (
        <a href={props.href} className="animate-spin hover:animate-none hover:scale-110 cursor-pointer pb-2 px-2">
            <img className=" hover:grayscale hover:scale-110 active:scale-110 h-[40px] w-[40px] rounded-full " src={props.src} />
        </a>
    );
}

export default Logo;
