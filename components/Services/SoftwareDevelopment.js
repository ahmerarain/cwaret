import React from 'react'


import ServicesCard from './ServicesCard';

const SoftwareDevelopment = ({about}) => {

  const SD_DATA = [
    {
      id: "/software_development/sd1",
      title: "Custom Software Solutions",
      image: "/image/servicesicons/layers.svg",
      hImage: "/image/servicesicons/layers-1.svg",
      bg:"/image/services/cssbg.jpg",
   

      discription:
        "Build customized software applications for your startup. SMBs and enterprise. ",
    },
    {
      id: "/software_development/sd2",
      title: "UI/UX Design",
      image: "/image/servicesicons/ux-design-1.svg",
      hImage:"/image/servicesicons/ux-design.svg",
      bg:"/image/services/uiuxbg.png",
      discription:
        "Let our team of designers and developers help you design your digital product with customers centric approach. ",
    },
    {
      id: "/software_development/sd3",
      title: "Product Visualization and Strategy",
      image: "/image/servicesicons/product-1.svg",
      hImage:"/image/servicesicons/product.svg",

      bg:"/image/services/2479735.webp",
      discription:
        "We will bring to reality your business ideas by developing your software solutions from scratch.",
    },
    {
      id: "/software_development/sd4",
      title: "QA & Testing",
      image: "/image/servicesicons/Group 6068.svg",
      hImage: "/image/servicesicons/Group -1.svg",
      bg:"/image/services/standards-quality-assurance-control-standardisation-certification-concept-144187423.jpg",
      discription:
        "Already developed a software? Our QA experts will make sure it is robust, reliable and error-free.",
    },
    {
      id: "/software_development/sd5",
      title: "Embedded Development",
      image: "/image/servicesicons/rise-1.svg",
          hImage:"/image/servicesicons/rise.svg",
      bg:"/image/services/Software-Development.jpg",
      discription: "Get connected with our dedicated RTOS developers.",
    },
  
    {
      id: "/software_development/sd6",

      title: "Dev Ops Practice",
      image: "/image/servicesicons/web-development-1.svg",
          hImage:"/image/servicesicons/web-development.svg",
      bg:"/image/services/360_F_282378637_7DL904AvZkZovk3RqLdLwNe21RNcjpzg.jpg",
      discription:
        "Improve the quality and speed of application delivery with our DevOps consulting services. ",
    },
  ];
  return (
    <>
       <ServicesCard data={SD_DATA} about={about} />
    </>
  )
}

export default SoftwareDevelopment