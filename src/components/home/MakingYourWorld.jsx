import React, { useState, useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAsyncSections, getAllSections } from "../../features/sections/sectionSlice";
import { fetchAsyncThemes, getThemes } from "../../features/themes/themeSlice";


export default function MakingYourWorld() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncSections());
    dispatch(fetchAsyncThemes());

    
  }, [dispatch]);
  
  const pageSections = useSelector(getAllSections);
  const theme = useSelector(getThemes);

 let action, title, content;
 let action2, title2, content2, video;

  let image = [];
  if (pageSections) {
    let sec = pageSections[0]?.sections;
    if (sec && sec.length !== 0) {
      const s = sec ?? sec;
      if (s && s.length !== 0) {
        s?.forEach((section, i) => {
          switch (section.id) {
            case 3:
              action = section?.components[0]?.action_name;
              title = section?.components[0]?.heading;
              content = section?.components[0]?.content;
              section?.components[0]?.photos?.forEach((data, i) => {
                image.push(data);
              });
              action2 = section?.components[1]?.action_name;
              title2 = section?.components[1]?.heading;
              content2 = section?.components[1]?.content;
              video = section?.components[1]?.action_url;
            

            break;
          default:
            break;
        }
      });
    }
  }
    }

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

  const CaptionArticle = styled.p`
  ${tw`font-bold uppercase `}
  color : ${txtColorSection};
`;


  return (
    <div className="py-16 bg-white">
      <div className="relative w-full h-full py-16 ">
        <div className="flex items-center w-full h-full 2xl:pl-32 hd:pl-16 xl:pl-20 lg:pl-10 2xl:pr-28 hd:pr-24 xl:pr-20 lg:pr-5">
          <div className="flex items-center justify-center h-full xl:w-5/12 lg:w-4/12">
            <div className="">
              <CaptionArticle >{action}</CaptionArticle>
              <div className="py-8 text-5xl">{title}</div>
              <div className="text-lg">{ReactHtmlParser(content)}</div>
            </div>
          </div>
          <div className="h-full xl:w-7/12 lg:w-8/12 2xl:pl-32 hd:pl-16 xl:pl-20 lg:pl-5">
            <div className="grid h-full grid-cols-3 gap-10 ">
              {image.map((data) => (
                <div className="flex items-center justify-center h-full py-10 transition duration-500 transform bg-red-100 hover:scale-110">
                  <div className="">
                    <img src={data.url} alt="" className="w-20 h-20 mx-auto " />
                    <p className="pt-4 text-center">{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="flex items-center w-full 2xl:pl-36 hd:pl-20 xl:pl-24">
          <div className="w-3/12 ">
            <div className="">
              <CaptionArticle>
                {action2}
                </CaptionArticle>
              <p className="py-8 text-5xl">{title2}</p>
              <div className="text-lg">{ReactHtmlParser(content2)}</div>
            </div>
          </div>
          <div className="w-9/12 pl-10 2xl:pr-44 hd:pr-36 xl:pr-28">
            <video
              className=""
              style={{ maxWidth: "100%", width: "100%", margin: "" }}
              playsInline
              loop
              muted
              controls
              alt="All the devices"
              src={video}
              ref={videoEl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
