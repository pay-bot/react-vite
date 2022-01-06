import React, { useState, useEffect, useRef } from "react";
import { getSectionsDetail, getTheme  } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

export default function HowWeWork() {
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

  let title, content, caption;

  
  if (pageSections) {
    
    let sec = pageSections?.pages?.sections;
    if (sec && sec.length !== 0) {
      sec.forEach((section, i) => {
        switch (i) {
          case 4:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              
              title = s[0].heading;
              content = s[0].content;
              caption = s[0].caption;
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
  return (
    <div className="bg-white py-16 flex justify-center ">
      <div className="max-w-2xl">
       <div className="text-center">{caption}</div>
       <div className="py-8  text-4xl text-center">{title}</div>
              <div className="text-xl  text-center">
                {ReactHtmlParser(content)}
              </div>
              </div>
    </div>
  )
}