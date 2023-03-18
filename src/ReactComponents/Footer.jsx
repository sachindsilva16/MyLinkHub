import React from "react";
import Credits from "./Credits"
import Logo from "./SocialMedia";

function Footer() {
    return (
        <footer className="bg-[#3C3C3C] h-[100px] p-4 text-center rounded-t-lg">
            <div className="flex justify-center
                items-center">

                {/* <a href="https://github.com/sachindsilva16" className="animate-spin hover:animate-none cursor-pointer pb-2 px-2 "> */}
                <Logo href="https://github.com/sachindsilva16" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                {/* </a> */}


                <Logo href="https://www.linkedin.com/in/sachin-dsilva-43169a1bb" src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent----6.png" />

                <Logo href="https://www.instagram.com/sachin.dsilva_/" src="https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-circle-instagram-media-network-social-logo-new-16.png" />

                <Logo href="https://twitter.com/sachinrons123" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-icon-circle-png-logo-8.png" />
            </div>
            <Credits />
        </footer>
    );
}

export default Footer;