import React from "react";
import "./MainSection.css";
import my_vdo from '../../assets/Bloktopiatrailer_Compressed (1).mp4'
import GoToUp from "../../component/GoToUp";

const MainSection = () => {
  return (
    <div className="w-[100%]">
      <video className="w-[100%]"
      src={my_vdo}
      autoPlay
      loop
      muted
      playsInline
      controlsList="nodownload"
    ></video>
    <GoToUp />
    </div>
  );
};

export default MainSection;
