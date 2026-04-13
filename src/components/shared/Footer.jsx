import React from "react";
import footerLogo from "../../assets/logo-xl.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import x from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-20">
      <div className="container mx-auto">
        <div className="text-center ">
          <div className="flex items-center justify-center ">
            <img src={footerLogo} alt="Logo" />
          </div>
          <p className="text-white opacity-70 mt-3">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="text-center mt-3">
          <p className="text-xl font-medium text-white">Social Links</p>
          <div className="flex gap-3 items-center justify-center mt-3">
            <div>
              <img src={instagram} alt="Instagram logo" />
            </div>
            <div>
              <img src={facebook} alt="Instagram logo" />
            </div>
            <div>
              <img src={x} alt="Instagram logo" />
            </div>
          </div>
        </div>
        <div className=" w-10/12 mx-auto flex  justify-between mt-3 border-t pt-4">
          <div className="text-white opacity-60">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-white opacity-60">
            <p className="cursor-pointer">Privacy </p>
            <p>Term & Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
