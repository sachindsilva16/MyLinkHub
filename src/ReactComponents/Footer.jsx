import React from "react";
import Credits from "./Credits"
import Logo from "./Logo";
import TelegramLogo from "./TelegramLogo";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-indigo-200 to-violet-500 py-10 text-center rounded-t-lg">
            <div className="flex justify-center
                items-center">

                {/* <a href="https://github.com/sachindsilva16" className="animate-spin hover:animate-none cursor-pointer pb-2 px-2 "> */}

                {/* </a> */}
                <Logo href="https://www.instagram.com/sachin.dsilva_/" src="https://raw.githubusercontent.com/sachindsilva16/Hyperlinks-ReactApp/1720dc2d04802469450e620f9502475d5d701b46/img/instagram.svg" />




                <Logo href="https://github.com/sachindsilva16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />


                <Logo href="https://www.linkedin.com/in/sachin-dsilva-43169a1bb" src="https://raw.githubusercontent.com/sachindsilva16/Hyperlinks-ReactApp/468867e6ae52bad1a6b021193416c2857ecb311f/img/linkedin.svg" />


                <Logo href="https://twitter.com/sachinrons123" src="https://raw.githubusercontent.com/sachindsilva16/Hyperlinks-ReactApp/54bdf5e79435f9df86a4704966a6c47c43811c0f/img/twitter.svg"  />

                <TelegramLogo href="t.me/ise_nmamit/" src="https://raw.githubusercontent.com/sachindsilva16/Hyperlinks-ReactApp/49e4f0b1e2c193942538e1233f5c20095d8b0da2/img/telegram.svg"/>
            </div>


            <Credits />
        </footer>
    );
}

export default Footer;