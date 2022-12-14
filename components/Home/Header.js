import React from "react";
import style from "./Home.module.css";
import Particlesanimation from "./Particles";
import TopBar from "../Menu/TopBar";
import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div className={`${style.header} p-3 `}>
      
      <div className="row m-0 position-relative" style={{zIndex:2}}>
        <div className="col-md-1 ps-0">
        
        </div>
        <div className="col-md-6 ">
          <div className={`${style.headercaptions} `}>
            <Fade cascade damping={0.1} direction={"up"} delay={0.8}>
            <p >
              We Connect People, Process and Technology to Deliver Exceptional
              Customer Experience
            </p>
            </Fade>
          <Fade cascade damping={0.1} direction={"up"} delay={0.5}>
          <h5 className="">Startups. SMB’s. Enterprises</h5>
          </Fade>

            
            <div className="position-relative" style={{zIndex:2}}>
              <Link href="/about" className="lmbtn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
