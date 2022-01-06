import React, { useState, useEffect, useRef } from "react";
import MakingYourWorld from "../components/home/MakingYourWorld";
import Hero from "../components/home/Hero";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";


import { getSectionsDetail, getTheme } from "../utils/Api";
import _ from "lodash";
import Navbar from "../components/header/Navbar";
import PeopleAndBusiness from "../components/home/PeopleAndBusiness";
import HowWeWork from "../components/home/HowWeWork";

export default function Home() {
  const [pageSections, setPageSections] = useState([]);
  const getSectionDetail = async () => {
    const response = await getSectionsDetail(1);
    const parsedData = await response;
    const sectionsData = parsedData.pages.sections;
    console.log("re1hom", sectionsData);
    setPageSections(sectionsData);
    return pageSections;
  };

  const [theme, setTheme] = useState([]);
  const getThemeDetail = async () => {
    const response = await getTheme();
    const parsedData = await response;
    const themeData = parsedData.themes;
    // console.log('theme', themeData);
    setTheme(themeData);
    return theme;
  };

  useEffect(() => {
    getSectionDetail();
    getThemeDetail();
  }, []);

  const sortedCols = _.sortBy(pageSections, "list_order");

  let 
  bgPage


  if (theme) {
    let tema = theme;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
       
            const t = theme ?? theme;
            if (t && t.length !== 0) {
              bgPage = t.bgroundPage
        }
      });
    }
  }
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  let caption, title, content;

  // if (pageSections) {
  //   let sec = pageSections;
  //   if (sec && sec.length !== 0) {
  //     sec.forEach((section, i) => {
  //       switch (i) {
  //         case 0:
  //           const s = section?.components ?? section.components[0];
  //           if (s && s.length !== 0) {
  //             console.log('ini' , s[1])
  //            caption = s[1].caption
  //             title = s[1].heading
  //              content = s[1].content
  //           }
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  //   }
  // }

  const PageWrapper = styled.div`
  ${tw`w-full `}
  background-color: ${bgPage};
  
`;


  return (
    <PageWrapper>
      <div className="mx-auto max-w-screen-2xl ">
        <Navbar />
        <Hero/>
        <MakingYourWorld/>
        <PeopleAndBusiness/>
        <HowWeWork/>
       
        {/* {sortedCols.map((data, i) => {
          if (data.id === 6) {
            return <Hero />;
          }
          if (data.id === 7) {
            return <MakingYourWorld />;
          }
        })} */}
      </div>
    </PageWrapper>
  );
}













// const contenId = 2;
  //   const [texts, setTexts] = useState([]);
  //   const getTexts = async () => {
  //     const response = await getText();
  //     const parsedData = await response;
  //     const textsData = parsedData;
  //     console.log('text', textsData);
  //     setTexts(textsData);
  //     return texts;
  //   };

    // const [locations, setLocations] = useState([]);
    // const getLocations = async () => {
    //   const response = await getLocation();
    //   const parsedData = await response;
    //   const locationsData = parsedData.locations;
    //   console.log('location', locationsData);
    //   setLocations(locationsData);
    //   return locations;
    // };


 // if (pageSections) {
    //   let sec = pageSections;
    //   if (sec && sec.length !== 0) {
    //       sec[0].components.forEach((section, i) => {
    //         switch (i) {
    //             case 0:
    //               if (section && section.length !== 0) {
    //                 console.log("section contetnt", section);
      
    //               }
    //               break;
    //             default:
    //               break;
    //           }
    //     });
    //   }
    // }
    // let content = []

    // if (pageSections) {
    //   let sec = pageSections;
    //   if (sec && sec.length !== 0) {
    //       sec[0].components.forEach((section, i) => {
    //         content.push({
    //     heading: section.heading,
    //     location_id : section.location_id
        
    //         });
    //     });
    //   }
    // }
  
  //  {locations.map((loc, i) => {
  //             if (data.location_id === loc.id) {
  //               return(
  //                 <p className="">{loc.name}</p>
  //               )
  //             }
  //           })} 



{/* <div className="flex gap-x-4 ">
        {content.map((data,i) => 
          // console.log('tests' , data)
            <div className="bg-gray-300">
              <div className="">
            {data.heading}
            </div>
            {data.location_id}
            {locations.map((loc, i) => {
              if (data.location_id === loc.id) {
                return(
                  <p className="">{loc.lat}</p>
                )
              }
            })}
            </div>
        )}


      </div> */}