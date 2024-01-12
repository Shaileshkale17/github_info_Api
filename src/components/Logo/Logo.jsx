import React from "react";
import ImageLogo from "../../assets/github-mark.svg";
function Logo() {
  return (
    <div>
      <div className="flex pb-2 justify-center items-center border-b bg-black h-15" >
        <img src={ImageLogo} className="w-10 rounded-full border-gray-500" />
      <h1 className="text-2xl px-2 " >GitHub Profile</h1>
      </div>
    </div>
  );
}

export default Logo;
