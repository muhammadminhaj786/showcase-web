import React from "react";
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow,UilArrow, UilSearch, UilAndroid, UilReact, UilJavaScript } from '@iconscout/react-unicons'
import Marquee from "react-fast-marquee";

const Services = () => {
  return (
    <div id="skills" className="h-[500px] bg-[black] p-[20px]">
      <div className="ctn">
        <h3 className="text-center font-bold text-[40px] text-[#FF47FF] mt-3">Skills</h3>
        <h1 className="text-[bold] text-[40px] text-[white] mt-1 text-center">What I Am Great At</h1>
      </div>
       <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                     <div className="boxes flex mt-[5%] justify-center gap-[25px] w-[100%] h-[230px]  p-4">
        <div className="box5 w-[150px] bg-main  shadow-lg shadow-[#FF47FF] h-[170px] border border-[#FF47FF] rounded-lg hover:scale-[1.2]   "> <Unicons.UilReact color='#FF47FF' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">React</p></div>
        <div className="box5  shadow-lg bg-main shadow-[#FF47FF] w-[150px] h-[170px] border border-[#FF47FF] rounded-lg hover:scale-[1.2] "> <Unicons.UilJavaScript color='#FF47FF' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">Java Script</p></div>
        <div className="box5 w-[150px] bg-main  shadow-lg shadow-[#FF47FF] h-[170px] border border-[#FF47FF] rounded-lg hover:scale-[1.2]"> <Unicons.UilWindow color='#FF47FF' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">UI/Ux Design</p></div>
        <div className="box5 w-[150px] bg-main  shadow-lg shadow-[#FF47FF] h-[170px] border border-[#FF47FF] rounded-lg hover:scale-[1.2] "><Unicons.UilArrow color='#FF47FF' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">Web Development</p></div>
        <div className="box5 w-[150px] bg-main shadow-lg shadow-[#FF47FF] h-[170px] border border-[#FF47FF] rounded-lg hover:scale-[1.2]"><Unicons.UilSearch color='#FF47FF' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">web Search</p></div>
        <div className="box5 w-[150px] bg-main shadow-lg shadow-[#FF47FF] h-[170px] border border-[#FF47FF] rounded-lg hover:scale-[1.2]"><Unicons.UilAndroid color='#FF47FF' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">Backend</p></div>
      </div> 
                    </Marquee>
    </div>
  );
};

export default Services;