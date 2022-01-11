import React, { useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchAsyncSections,
  getAllSections,
} from "../../features/sections/sectionSlice";
import { fetchAsyncThemes, getThemes } from "../../features/themes/themeSlice";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

export default function Investor() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncSections());
    dispatch(fetchAsyncThemes());
  }, [dispatch]);

  const pageSections = useSelector(getAllSections);
  const theme = useSelector(getThemes);

  let sectionName;
  let title, content, media;

  if (pageSections) {
    let sec = pageSections[0]?.sections;
    if (sec && sec.length !== 0) {
      const s = sec ?? sec;
      if (s && s.length !== 0) {
        s?.forEach((section, i) => {
          switch (section.id) {
            case 7:
              sectionName = section?.name;

              title = section?.components[0]?.heading;
              content = section?.components[0]?.content;

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

  const SectionWrapper = styled.div`
    ${tw`w-full h-full py-16 `}
    background-color: ${bgSect};
  `;

  const CaptionArticle = styled.p`
    ${tw`font-bold text-center uppercase `}
    color : ${txtColorSection};
  `;
  return (
    <SectionWrapper>
      <div className="w-full">
        <div className="flex justify-center mx-auto">
          <div className="max-w-2xl">
            <CaptionArticle>{sectionName}</CaptionArticle>

            <div className="py-8 text-4xl text-center text-white">{title}</div>
            <div className="text-center text-white ">
              {ReactHtmlParser(content)}
            </div>
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
                      <div className="text-center">{action}</div>
                      <p className="">{data.name}</p>


                    </div>
                  )}
                </>
              )
            }
          })} */}
        </div>
      </div>
    </SectionWrapper>
  );
}
