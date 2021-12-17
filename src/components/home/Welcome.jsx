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
      const locationsData = parsedData.locations;
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
      <>
      <div className="flex gap-x-4 ">
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


      </div>


      <div class="inline-flex" id="main_menu">
            <ul class="flex flex-wrap p-1 md:p-2 sm:bg-gray-300 sm:rounded-full text-sm md:text-base" id="menu_nav">
                
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_admin">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/index.php?action=admin">
                        <span class="firstlevel">Amministra</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=featuresettings">
                                <span class="">Funzioni ed opzioni</span>
                            </a>
                        </li>
                       
                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_moderate">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/moderate/">
                        <span class="firstlevel">Modera</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/moderate/?area=modlog">
                                <span class="">Registro moderazione</span>
                            </a>
                        </li>

                    </ul>
               
                </li>
            </ul>
        </div>

      </>
    )
  }
  
  