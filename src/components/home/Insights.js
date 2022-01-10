import React, { useState, useEffect, useRef } from "react";

import { getSectionsDetail, getTheme } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

export default function Insights() {
  const [pageSections, setPageSections] = useState([]);
  const [theme, setTheme] = useState([]);

  console.log("making", pageSections);
  useEffect(() => {
    let isSubscribed = true;
    getSectionsDetail(1).then((pageSections) => {
      if (isSubscribed) {
        setPageSections(pageSections);
      }
    });
    getTheme().then((theme) => {
      if (isSubscribed) {
        setTheme(theme);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let sectionName;
  let title, content, media;

  if (pageSections) {
    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec[0].forEach((section, i) => {
        switch (i) {
          case 1:
            const s = section?.sections ?? section.sections;
            if (s && s.length !== 0) {
              s.forEach((section, i) => {
                switch (section.id) {
                  case 12:
                    if (s && s.length !== 0) {
                      sectionName = section?.name;
                      content = section?.components[0]?.content;
                    }

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

  let bgSect, txtColorSection;

  if (theme) {
    let tema = theme?.themes;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgSect = t.bgroundSection;
          txtColorSection = t.txtcolorscdSection;
        }
      });
    }
  }

  const SectionWrapper = styled.div`
    ${tw`w-full h-full py-16 `}
    background-color: ${bgSect};
  `;

  const CaptionArticle = styled.p`
    ${tw`font-bold text-center uppercase `}
    color : ${txtColorSection};
  `;
  return (
  <div className="py-16 bg-white">
      <div className="w-full">
        <div className="flex justify-center mx-auto">
          <div className="max-w-2xl">
          <CaptionArticle>{sectionName}</CaptionArticle>

            <div className="text-center ">{ReactHtmlParser(content)}</div>
          </div>
        </div>
        <div className="grid w-11/12 grid-cols-3 mx-auto gap-x-10">
          {/* {test.map((data, i) => {
            if (data.category.id === data.category_id) {

              return (
                <>
                  {i < 2 && (


                    <div className="">
                      <div className="card-zoom">
                        {data.photos?.map((data) => (
                          <div className="imgBox ">
                            <img src={data.url} alt="" className="" />
                          </div>
                        ))}

                      </div>
                      <div className="text-center">{caption}</div>
                      <p className="">{data.name}</p>


                    </div>
                  )}
                </>
              )
            }
          })} */}
        </div>
      </div>
  </div>
  )
}
