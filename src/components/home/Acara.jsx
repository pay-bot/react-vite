import React, { useState, useEffect } from "react";
import { getSectionsDetail } from "../../utils/Api";

export default function Acara() {
    const [pageSections, setPageSections] = useState([]);
    const getSectionDetail = async () => {
      const response = await getSectionsDetail(2);
      const parsedData = await response;
      const sectionsData = parsedData;
      // console.log('re1', sectionsData);
      setPageSections(sectionsData);
      return pageSections;
    };
  
    useEffect(() => {
      getSectionDetail();
    }, []);
  
    let content;
  
    if (pageSections) {
      let sec = pageSections?.pages?.sections;
      if (sec && sec.length !== 0) {
        sec.forEach((section, i) => {
          switch (i) {
            case 0:
              const s = section?.components ?? section.components[0];
              if (s && s.length !== 0) {
                console.log("section content", s[0].heading);
  
                 content = s[0].heading
              }
              break;
            default:
              break;
          }
        });
      }
    }
  
  
    return (
      <div>
        {/* {content} */}
      </div>
    )
  }
  
  