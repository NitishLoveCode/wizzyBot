import React, { useState } from "react";
import { BsChatRightDotsFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Header from "./landing_component/Header";
import Intro from "./landing_component/Intro";
import Setup_guide from "./landing_component/Setup_guide";
import Four_reasons from "./landing_component/Four_reasons";
import Point1 from "./landing_component/Point1";
import Point2 from "./landing_component/Point2";
import Point3 from "./landing_component/Point3";
import Point4 from "./landing_component/Point4";
import Two_intro_img from "./landing_component/Two_intro_img";
import LiveChat_vs from "./landing_component/LiveChat_vs";
import Asked_Questions from "./landing_component/Asked_Questions";
import Reviews from "./landing_component/Reviews";
import Blogs from "./landing_component/Blogs";
import Footer from "./landing_component/Footer";

export default function LandingPage() {
  const [openQuery1, setopenQuery1] = useState(null);
  const [openQuery2, setopenQuery2] = useState(null);
  const [openQuery3, setopenQuery3] = useState(null);
  const [openQuery4, setopenQuery4] = useState(null);
  const [sideBar, setsideBar] = useState(true);

  const openQuestion = (q) => {
    if (q == 1) {
      if (openQuery1 === null) {
        setopenQuery1(1);
      } else {
        setopenQuery1(null);
      }
    }
    if (q == 2) {
      if (openQuery2 === null) {
        setopenQuery2(2);
      } else {
        setopenQuery2(null);
      }
    }
    if (q == 3) {
      if (openQuery3 === null) {
        setopenQuery3(3);
      } else {
        setopenQuery3(null);
      }
    }
    if (q == 4) {
      if (openQuery4 === null) {
        setopenQuery4(4);
      } else {
        setopenQuery4(null);
      }
    }
  };

  const openSideBar = () => {
    if (sideBar === false) {
      setsideBar(true);
      console.log("true")
    } else {
      setsideBar(false);
      console.log("false")
    }
  };
  // ---


  const myStyle={
  backgroundImage: "url('/vector-141.svg')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right', // Adjust this property to right-align the background image
  backgroundSize: 'contain',
  backgroundSize: '30%',
    
  };
  return (
    <>
      <div style={myStyle} className="bg-[#f4f4f1] lg:py-10 relative ">
        {/* -------------------Header--------------------- */}
        <div>
          <Header openSideBar={openSideBar} HiMenuAlt2={HiMenuAlt2} sideBar={sideBar}/>
        </div>
        {/* --------------------intro------------------------ */}
          <div>
            <Intro BsFillArrowUpRightCircleFill={BsFillArrowUpRightCircleFill}/>
          </div>
      </div>
        {/* ------------------------------------------------------ */}


      {/* ------------------------setup Guide------------------------- */}
        <div className="pr-2 pl-2 xl:mx-10">
          <Setup_guide BsArrowRightCircle={BsArrowRightCircle} AiFillCheckCircle={AiFillCheckCircle}/>
        </div>
      {/* ----------------------4 reasons--------------------------------------------- */}

        <div>
          <Four_reasons/>
        </div>
      {/* --------------------------------------------------- */}
        <div>
          <Point1 AiFillCheckCircle={AiFillCheckCircle}/>
        </div>

        <div>
          <Point2 AiFillCheckCircle={AiFillCheckCircle}/>
        </div>

        <div>
          <Point3 AiFillCheckCircle={AiFillCheckCircle}/>
        </div>

        <div>
          <Two_intro_img/>
        </div>

        <div>
          <Point4 AiFillCheckCircle={AiFillCheckCircle}/>
        </div>


        <div>
          <LiveChat_vs AiFillCheckCircle={AiFillCheckCircle}/>
        </div>

        <div>
          <Asked_Questions IoIosArrowUp={IoIosArrowUp}
          IoIosArrowDown={IoIosArrowDown}
          openQuestion={openQuestion}
          openQuery1={openQuery1}
          openQuery2={openQuery2}
          openQuery3={openQuery3}
          openQuery4={openQuery4}/>
        </div>
        <div>
          <Reviews AiTwotoneStar={AiTwotoneStar}/>
        </div>

        <div>
          <Blogs/>
        </div>

        <div>
          <Footer BiLogoFacebook={BiLogoFacebook} AiFillInstagram={AiFillInstagram} BiLogoTwitter={BiLogoTwitter}/>
        </div>

        
    </>
  );
}
