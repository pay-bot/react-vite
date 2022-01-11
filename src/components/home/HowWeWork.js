import React, { useState, useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAsyncSections, getAllSections } from "../../features/sections/sectionSlice";
import { fetchAsyncThemes, getThemes } from "../../features/themes/themeSlice";
import { fetchAsyncArticles, getAllArticles } from "../../features/articles/articleSlice";


export default function HowWeWork() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncSections());
    dispatch(fetchAsyncThemes());
    dispatch(fetchAsyncArticles());

    
  }, [dispatch]);
  
  const pageSections = useSelector(getAllSections);
  const theme = useSelector(getThemes);
  const article = useSelector(getAllArticles);

  

  let title, content, action;

  if (pageSections) {
    let sec = pageSections[0]?.sections;
    if (sec && sec.length !== 0) {
      const s = sec ?? sec;
      if (s && s.length !== 0) {
        s?.forEach((section, i) => {
          switch (section.id) {
            case 5:

              title = section?.components[0]?.heading;
              content = section?.components[0]?.content;
              action = section?.components[0]?.action_name;
           

            break;
          default:
            break;
        }
      });
    }
  }
}



  let bgSect,txtColorSection

  if (theme) {
    let tema = theme?.themes;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgSect = t.bgroundSection;
          txtColorSection = t.txtcolorscdSection
        }
      });
    }
  }

  let articles = []

  if (article) {
    let art = article;
    if (art && art.length !== 0) {
      art[0]?.map((data, i) => {
        articles.push(data);

      }
      )

    }
  }

  

  const CaptionArticle = styled.p`
  ${tw`font-bold uppercase`}
  color : ${txtColorSection};
`;



  return (
    <div className="flex py-16 bg-white ">
      <div className="w-full ">
        <div className="flex justify-center mx-auto">
          <div className="max-w-2xl">
            <CaptionArticle className='text-center'>
              {action}
            </CaptionArticle>
            <div className="py-8 text-4xl text-center">{title}
            </div>
            <div className="text-center ">{ReactHtmlParser(content)}
            </div>
          </div>
        </div>
        <div className="grid w-11/12 grid-cols-3 mx-auto gap-x-10 2xl:py-16 xl:py-8">
          { articles.map((data, i) => {
            if (data.category_id === 1) {

              return (
                <>
                 


                    <div className="">
                      <div className="card-zoom">
                        {data.photos?.map((data) => (
                          <div className="imgBox ">
                            <img src={data.url} alt="" className="" />
                          </div>
                        ))}

                      </div>
                      <div className="p">

                        
                      <CaptionArticle className="py-4 text-left">{action}</CaptionArticle>
                      <p className="pb-4 font-semibold capitalize">{data.name}</p>
                      <div className="">
            {ReactHtmlParser(data.content)}
          </div>
                      </div>


                    </div>
                </>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}
