import React, { useState } from "react";
// import './Services.css';
import { RES_DES, CUS_DEV, SEO_OPT, WEB_MAIN } from "./Const";

const Sections = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="border border-black p-2 m-2 bg-white shadow-2xl ">
        <div className="font-bold text-base">{title}</div>
        {isVisible ? (
          <>
            {/* <button
              onClick={() => setIsVisible("")}
              className=" bg-indigo-600 text-white p-0.5 text-xs underline hover:bg-indigo-700"
            >
              Hide{console.log("dgbgHide")
              }
            </button> */}
            <div className="break-words">{description}</div>
          </>
        ) : (
          <>
            <button
              onClick={setIsVisible}
              className=" bg-indigo-600 text-white p-0.5 text-xs underline hover:bg-indigo-700"
            >
              Show
            </button>
          </>
        )}
        {/* {isVisible ? <div>{description}</div> : ""} */}
      </div>
    </>
  );
};

const Services = () => {
  const [visibleSection, setVisibleSection] = useState(" ");

  return (
    <section id="services" className=" bg-pink-100 shadow-2xl p-5 my-5">
      <h2 className="font-extrabold text-2xl">Our Services</h2>
      {/* <ul> */}
      <Sections
        title={"Custom ReactJS Website Development"}
        description={CUS_DEV}
        isVisible={visibleSection == "custom"}
        setIsVisible={() => setVisibleSection("custom")}
      />

      <Sections
        title={"Responsive Design"}
        isVisible={visibleSection == "responsive"}
        description={RES_DES}
        setIsVisible={() => setVisibleSection("responsive")}
      />
      <Sections
        title={"SEO Optimization"}
        isVisible={visibleSection == "seo"}
        description={SEO_OPT}
        setIsVisible={() => setVisibleSection("seo")}
      />
      <Sections
        title={"Website Maintenance and Support"}
        isVisible={visibleSection == "website"}
        description={WEB_MAIN}
        setIsVisible={() => setVisibleSection("website")}
      />
      {/* </ul> */}
    </section>
  );
};

export default Services;
