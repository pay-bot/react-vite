import React, { useState, useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

import { useThemesQuery, usePagesQuery, useArticlesQuery } from '../../features/api/apiSlice'
import { Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function OurServices() {
  const { data: pageSections = [] } = usePagesQuery();
  const { data: theme = [] } = useThemesQuery();
  const { data: articles = [] } = useArticlesQuery();

  let action;
  let title, content, media;

  if (pageSections) {
    let sec = pageSections[0]?.sections;
    if (sec && sec.length !== 0) {
      const s = sec ?? sec;
      if (s && s.length !== 0) {
        s?.forEach((section, i) => {
          switch (section.id) {
            case 6:
              title = section?.components[0]?.heading;
              content = section?.components[0]?.content;
              media = section?.components[0]?.media;
              action = section?.components[0]?.action_name;

              break;
            default:
              break;
          }
        });
      }
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

  const CaptionArticle = styled.p`
    ${tw`font-bold text-center uppercase `}
    color : ${txtColorSection};
  `;

  const CardTitle = styled.p`
    ${tw`px-4 py-2 text-white `}
    background-color : ${bgSect};
  `;

  return (
    <div className="flex py-8 bg-white xl:py-16 ">
      <div className="w-11/12 mx-auto md:w-full md:mx-0">
        <div className="flex justify-center mx-auto">
          <div className="max-w-2xl">
            <CaptionArticle>{action}</CaptionArticle>
            <div className="py-8 text-4xl text-center">{title}</div>
            <div className="text-center ">{ReactHtmlParser(content)}</div>
          </div>
        </div>
        <div className="w-11/12 py-8 mx-auto 2xl:py-16 xl:py-8">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              perPage: 4,
              gap: "3rem",
              pagination: true,
              breakpoints: {
                623: {
                  perPage: 1,
                  perMove: 1,
                },
                1000: {
                  perPage: 2,
                  perMove: 1,
                },
                1024: {
                  perPage: 3,
                  perMove: 1,
                },
                1600: {
                  perPage: 4,
                  perMove: 1,
                },
                1920: {
                  perPage: 4,
                  perMove: 1,
                },
                2560: {
                  perPage: 4,
                  perMove: 1,
                },
              },
            }}
          >
            {articles[0]?.map((data, i) => {
              if (data.category_id === 2) {
                return (
                  <>
                    <SplideSlide>
                      <Link to={`/articles/${data.slug}`}>
                      <div className="relative flex justify-center">
                        <div className="card-zoom">
                          {data.photos?.map((data) => (
                            <div className="imgBox w-[300px]">
                              <img
                                src={data.url}
                                alt=""
                                className="flex object-cover w-full h-72"
                              />
                            </div>
                          ))}
                        </div>
                        {/* <div className="text-center">{action}</div> */}
                        <div className="absolute bottom-0 top-2/3">
                          <CardTitle>
                            {data.name}
                          </CardTitle>
                        </div>
                      </div>
                      </Link>
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
