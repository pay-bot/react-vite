import React, { useState, useEffect, useRef } from "react";
import {
  getSectionsDetail,
  getText,
  getLocation,
  getTheme,
} from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";


export default function Hero() {
  const [pageSections, setPageSections] = useState([]);
  const [theme, setTheme] = useState([]);
  
  useEffect(() => {
    let isSubscribed = true;
    getTheme().then(theme => {
      if (isSubscribed) {
        setTheme(theme);
      }
    });
    getSectionsDetail(1).then(pageSections => {
      if (isSubscribed) {
        setPageSections(pageSections);
      }
    });

    return () => (isSubscribed = false);
  }, []);

  let bgPage, bgSect, txtColorSection
  

  if (theme) {
    let tema = theme?.themes
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgPage = t.bgroundPage;
          bgSect = t.bgroundSection
          txtColorSection = t.txtcolorscdSection
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

  if (pageSections) {
    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec[0].forEach((section, i) => {
        switch (i) {
          case 1:
            const s = section?.sections ?? section.sections;
            if (s && s.length !== 0 ) {
              s.forEach((section, i) => {
                switch (section.id) {
                  case 2:
              console.log("section contentrrr") 
              action =  section?.components[0]?.action_name;
              title =  section?.components[0]?.heading;
              content =  section?.components[0]?.content;
              break;
              default:
                break;
            }
      });
            }
            break;
          default:
            break;
        }
      });
    }
  }

  const Hero = styled.div`
  ${tw`absolute w-full h-full `}
  background: linear-gradient(
    90deg,
    ${bgSect} 0%,
    ${bgSect} 0%,
    rgba(116, 242, 250, 0) 93%
  );
`;

const CaptionArticle = styled.p`
  ${tw`pt-10 font-bold text-center uppercase lg:text-left`}
  color : ${txtColorSection};
`;

  return (
    <>
      <div className="relative w-full bg-white 2xl:pl-16 hd:pl-12 ">

        <Hero>
          <div className="flex items-center h-full mx-auto lg:mx-0 2xl:w-6/12 lg:w-6/12 md:w-11/12">
            
            <div className="2xl:pl-32 hd:pl-16 xl:pl-20 lg:pl-8">
              <CaptionArticle>{action}</CaptionArticle>
              <div className="py-8 text-5xl text-center text-white lg:text-7xl lg:text-left">{title}</div>
              <div className="text-xl text-center text-white textfont-semibold lg:text-left ">
                {ReactHtmlParser(content)}
              </div>
              <div className="py-20">
              <div className="inline px-3 py-2 border">Learn more</div>
              </div>
            </div>
          </div>
        </Hero>
        <video
          className="h-[1000px] "
          style={{ maxWidth: "100%", width: "120%", height: "100%", margin: "", }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="https://d2csxpduxe849s.cloudfront.net/media/A13DCF71-0059-4014-930224BDACD7889E/F68C503E-9957-4E5F-89BEEF67DB9A2F34/6DCE7A31-D0F8-4EF7-8F2E138C9F78482A.mp4"
          ref={videoEl}
        />
      </div>
    </>
  );
}
