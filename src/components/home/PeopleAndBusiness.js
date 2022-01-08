import React, { useState, useEffect, useRef } from "react";
import { getSectionsDetail, getTheme  } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";


export default function PeopleAndBusiness() {
    const [pageSections, setPageSections] = useState([]);
  const [theme, setTheme] = useState([]);

  console.log("making", pageSections);
  useEffect(() => {
    let isSubscribed = true;
    getSectionsDetail(1).then(pageSections => {
      if (isSubscribed) {
        setPageSections(pageSections);
      }
    });
    getTheme().then(theme => {
      if (isSubscribed) {
        setTheme(theme);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let title, content,media;

  
  if (pageSections) {
    
    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec[0].forEach((section, i) => {
        switch (i) {
          case 1:
            const s = section?.sections ?? section.sections;
            if (s && s.length !== 0) {
              
              title = s[3]?.components[0]?.heading;
              content = s[3]?.components[0]?.content;
              media = s[3]?.components[0]?.media;
            }
           
            
            break;
          default:
            break;
        }
      });
    }
  }

  let bgSect;


  if (theme) {
    let tema = theme?.themes
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgSect = t.bgroundSection
          
        }
      });
    }
  }

  const SectionWrapper = styled.div`
  ${tw`w-full h-full py-16 `}
  background-color: ${bgSect} ;
`;
    return (
        <SectionWrapper>
          <div className="flex items-center justify-center max-w-2xl py-16 mx-auto">
            <div className="">

            <img src={`${process.env.REACT_APP_API_ASSET_URL}/uploads/images/${media}`} alt="" className="w-10 h-10 mx-auto mb-16" />
            <div className="pb-16 text-5xl font-semibold text-center text-white">{title}</div>
            <div className=" text-center text-white">
                {ReactHtmlParser(content)}
              </div>
              </div>
          </div>
        </SectionWrapper>
    )
}
