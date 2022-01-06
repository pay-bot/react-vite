import React, { useState, useEffect, useRef } from "react";
import { getSectionsDetail } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";

export default function PeopleAndBusiness() {
    const [pageSections, setPageSections] = useState([]);
  console.log("making", pageSections);
  useEffect(() => {
    let isSubscribed = true;
    getSectionsDetail(1).then(pageSections => {
      if (isSubscribed) {
        setPageSections(pageSections);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let title, content;

  
  if (pageSections) {
    
    let sec = pageSections?.pages?.sections;
    if (sec && sec.length !== 0) {
      sec.forEach((section, i) => {
        switch (i) {
          case 3:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              
              title = s[0].heading;
              content = s[0].content;
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
            {title}
        </div>
    )
}
