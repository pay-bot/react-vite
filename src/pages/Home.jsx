import React, { useState, useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

import { getSectionsDetail, getTheme } from "../utils/Api";
import _ from "lodash";
import Navbar from "../components/header/Navbar";
import { useThemesQuery, usePagesQuery } from "../features/api/apiSlice";
import Hero from "../components/home/Hero";
import MakingYourWorld from "../components/home/MakingYourWorld";
import PeopleAndBusiness from "../components/home/PeopleAndBusiness";
import HowWeWork from "../components/home/HowWeWork";
import OurServices from "../components/home/OurServices";
import Investor from "../components/home/Investor";
import Insights from "../components/home/Insights";
import StayUpToDate from "../components/home/StayUpToDate";
import Footer from "../components/home/Footer";
import ModalManger from "../utils/ModalManger";

export default function Home() {
  const { data: theme = [] } = useThemesQuery();
  const { data: pageSections = [] } = usePagesQuery();

  let bgPage;

  if (theme) {
    let tema = theme;
    if (tema && tema.length !== 0) {
      tema.themes.forEach((theme, i) => {
        const t = theme ?? theme[0];
        if (t && t.length !== 0) {
          bgPage = t.bgroundPage;
        }
      });
    }
  }
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  let action, title, content;

  const PageWrapper = styled.div`
    ${tw`w-full `}
    background-color: ${bgPage};
  `;

  console.log('page', pageSections)

  let sectionIdSort = [];
  {
    pageSections?.model?.sections?.map((data, i) => {
        sectionIdSort.push(data);
    });
  }

  const sortedCols = _.sortBy(sectionIdSort, "list_order");
  return (
    <PageWrapper>
      <div className="mx-auto max-w-screen-2xl ">
        {/* <ModalManger/> */}
        <Navbar />
        {sortedCols.map((data, i) => {
          if (data.id === 2) {
            return <Hero />;
          }
          if (data.id === 3) {
            return <MakingYourWorld />;
          }
          if (data.id === 4) {
            return <PeopleAndBusiness />;
          }
          if (data.id === 5) {
            return <HowWeWork />;
          }
          if (data.id === 6) {
            return <OurServices />;
          }
          if (data.id === 7) {
            return <Investor />;
          }
          if (data.id === 8) {
            return <Insights />;
          }
          if (data.id === 12) {
            return <StayUpToDate />;
          }
        })}
        <Footer />
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
//       sec.components.forEach((section, i) => {
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
//       sec.components.forEach((section, i) => {
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

{
  /* <div className="flex gap-x-4 ">
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


      </div> */
}
