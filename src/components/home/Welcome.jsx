import React, { useState, useEffect, useRef } from "react";
import {
  getSectionsDetail,
  getText,
  getLocation,
  getTheme,
} from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";

export default function Welcome() {
  const [pageSections, setPageSections] = useState([]);
  const getSectionDetail = async () => {
    const response = await getSectionsDetail(1);
    const parsedData = await response;
    const sectionsData = parsedData.pages.sections;
    console.log("re1", sectionsData);
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

  let bgPage;

  if (theme) {
    let tema = theme;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
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

  let caption, title, content;

  if (pageSections) {
    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec.forEach((section, i) => {
        switch (i) {
          case 0:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              console.log("ini", s[1]);
              caption = s[1].caption;
              title = s[1].heading;
              content = s[1].content;
            }
            break;
          default:
            break;
        }
      });
    }
  }

  return (
    <>
      <div className="w-full relative bg-white pl-16">
        <div className="w-full h-full absolute bggrad ">
          <div className="w-6/12 h-full flex items-center">
            <div className="pl-32">
              <p className="text-blue-600 font-bold uppercase">{caption}</p>
              <div className="text-7xl text-white py-8">{title}</div>
              <div className="text-white text-xl font-semibold">
                {ReactHtmlParser(content)}
              </div>
            </div>
          </div>
        </div>
        <video
          className=""
          style={{ maxWidth: "100%", width: "100%", margin: "" }}
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
