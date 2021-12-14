import React, { useState, useEffect } from "react";
import { getSectionsDetail, getText, getLocation } from "../../utils/Api";

export default function Welcome() {
    const [pageSections, setPageSections] = useState([]);
    const getSectionDetail = async () => {
      const response = await getSectionsDetail(2);
      const parsedData = await response;
      const sectionsData = parsedData.pages.sections;
      console.log('re1', sectionsData);
      setPageSections(sectionsData);
      return pageSections;
    };
  
    // useEffect(() => {
    //   getSectionDetail();
    // }, []);

  const contenId = 2;
    const [texts, setTexts] = useState([]);
    const getTexts = async () => {
      const response = await getText();
      const parsedData = await response;
      const textsData = parsedData;
      console.log('text', textsData);
      setTexts(textsData);
      return texts;
    };

    const [locations, setLocations] = useState([]);
    const getLocations = async () => {
      const response = await getLocation();
      const parsedData = await response;
      const locationsData = parsedData;
      console.log('location', locationsData);
      setLocations(locationsData);
      return locations;
    };
  
    useEffect(() => {
      getSectionDetail();
      getTexts();
      getLocations();
    }, []);


  
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
    let content = []


    if (pageSections) {
      let sec = pageSections;
      if (sec && sec.length !== 0) {
          sec[0].components.forEach((section, i) => {
            content.push({
              heading: section.heading,
              location_id : section.location_id
            });
        });
      }
    }
  
  //  {locations.map((loc, i) => {
  //             if (data.location_id === loc.id) {
  //               return(
  //                 <p className="">{loc.name}</p>
  //               )
  //             }
  //           })} 
    return (
      <div className="flex gap-x-4 ">
        {content.map((data,i) => 
          // console.log('tests' , data)
            <div className="bg-gray-300">
              <div className="">
            {data.heading}
            </div>
            {data.location_id}
            {locations?.locations?.map((loc, i) => {
              if (data.location_id === loc.id) {
                return(
                  <p className="">{loc.lat}</p>
                )
              }
            })}
            </div>
        )}


      </div>
    )
  }
  
  