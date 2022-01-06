import React, { useState, useEffect } from "react";
import { getSectionsDetail } from "../../utils/Api";

export default function MakingYourWorld() {
  const [pageSections, setPageSections] = useState([]);
  // console.log("making", sectionsData);
  useEffect(() => {
    let isSubscribed = true;
    getSectionsDetail(1).then(pageSections => {
      if (isSubscribed) {
        setPageSections(pageSections);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let content;

  if (pageSections) {
    let sec = pageSections?.pages?.sections;
    if (sec && sec.length !== 0) {
      sec.forEach((section, i) => {
        switch (i) {
          case 2:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              console.log("section content making", s[0].heading);

               content = s[0].heading
            }
            break;
          default:
            break;
        }
      });
    }
  }

  return <div>{/* {content} */}</div>;
}
