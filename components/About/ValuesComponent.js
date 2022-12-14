import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./About.module.css";
import { Fade } from "react-awesome-reveal";
const ValuesComponent = () => {
  let DATA = [
    {
      id: "a1",
      title: "Value Trust",
      image: "/image/Value trust.svg",
      description:
        "Trust is the key to our business relations and we are dedicated to deliver quality work with precision. ",
    },
    {
      id: "a2",
      title: "Client Success",
      image: "/image/Client Success.svg",
      description:
        "Dedication to client success is at the heart of our values. As we know a client’s success is ours success.",
    },
    {
      id: "a3",
      title: "Innovation Matter For All",
      image: "/image/Innovation matter for all.svg",
      description:
        "Our team takes pride in taking initiatives. Compassion helps us to create more collaborative workspaces leading to innovative ideas",
    },
  ];
  return (
    <div>
      <p className="borderHeading mb-4 ">Values</p>

      <div className={` row  m-0 p-md-4  text-center `}>
        <div className="col-md-10  bg-white  setIndex1 px-0 py-2 rounded mx-auto">
          <div
            className="row m-0 p-0 rounded"
            style={{ backgroundColor: "#EBF4FA " }}
          >
            {DATA.map((e, index) => (
              <div
                className={`col-md-4 p-md-4 mb-3 text-center ${style.cardCol}`}
                key={index}
              >
                <Fade cascade direction={index===0?"top-left":index===1?"up":"top-right"}>
                <Link href={`${e.link}`}>
               
                    <Image src={e.image} width={40} height={40} alt={e.title} className="mb-2"/>
                    <p >{e.title}</p>
                    <p>{e.description}</p>
                 
                </Link>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesComponent;
