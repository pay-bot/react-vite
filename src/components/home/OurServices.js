import React, { useState, useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

import { getSectionsDetail, getTheme, getArticle } from "../../utils/Api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function OurServices() {
  const [pageSections, setPageSections] = useState([]);
  const [theme, setTheme] = useState([]);
  const [article, setArticle] = useState([]);

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
    getArticle().then((article) => {
      if (isSubscribed) {
        setArticle(article);
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
                  case 11:
                    if (s && s.length !== 0) {
                      sectionName = s[5].name;
                      title = section?.components[0]?.heading;
                      content = section?.components[0]?.content;
                      media = section?.components[0]?.media;
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

  let articleId = [];

  if (article) {
    let art = article;
    if (art && art.length !== 0) {
      art.map((data, i) => {
        console.log("our", data);
        articleId.push(data);
      });
    }
  }

  let test = [];
  {
    articleId.map((data) => {
      data.map((data) => {
        test.push(data);
      });
    });
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

  const CaptionArticle = styled.p`
    ${tw`font-bold text-center uppercase `}
    color : ${txtColorSection};
  `;

  return (
    <div className="flex py-16 bg-white ">
      <div className="w-full">
        <div className="flex justify-center mx-auto">
          <div className="max-w-2xl">
            <CaptionArticle>{sectionName}</CaptionArticle>
            <div className="py-8 text-4xl text-center">{title}</div>
            <div className="text-center ">{ReactHtmlParser(content)}</div>
          </div>
        </div>
        <div className="w-11/12 pt-16 mx-auto">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              perPage: 4,
              gap: "3rem",
              pagination: true,

            }}
          >
            {test.map((data, i) => {
              if (data.category_id === 5) {
                return (
                  <>
                    <SplideSlide>
                      <div className="relative flex justify-center">
                        <div className="card-zoom">
                          {data.photos?.map((data) => (
                            <div className="imgBox w-[300px]">
                              <img src={data.url} alt="" className="flex object-cover w-full h-72" />
                            </div>
                          ))}
                        </div>
                        {/* <div className="text-center">{caption}</div> */}
                        <div className="absolute bottom-0 top-2/3">
                          <div className="px-4 py-2 bg-blue-500 ">

                            
                          {data.name}
                          </div>
                          </div>
                      </div>
                    </SplideSlide>
                  </>
                );
              }
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
}
