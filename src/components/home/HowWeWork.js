import React, { useState, useEffect, useRef } from "react";
import { getSectionsDetail, getTheme, getArticle } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

export default function HowWeWork() {
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
    let tema = theme?.themes;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgSect = t.bgroundSection;
        }
      });
    }
  }

  // let articleId

  // if (article) {
  //   let art = article;
  //   if (art && art.length !== 0) {
  //     art.forEach((data, i) => {
  //       data?.category?.map((data) => {
          
  //         articleId = data.id
  //       })
       
           
  //       }
  //     )
  //   }
  // }
  // console.log('ll' , articleId)

  
  return (
    <div className="flex py-16 bg-white ">
      <div className="">
        <div className="flex mx-auto">
        <div className="max-w-2xl">
          <div className="text-center">{caption}</div>
          <div className="py-8 text-4xl text-center">{title}</div>
          <div className="text-center ">{ReactHtmlParser(content)}</div>
        </div>
        </div>
        <div className="grid w-11/12 grid-cols-3 mx-auto gap-x-10">
        {article.map((data) => {
            if(data.id === data.category_id) {
              return (
                <div className="">
                <p className="">{data.name}</p>
                {data.photos?.map((data)=> (
                  <img src={data.url} alt="" className="" />
                ))}
                <div className="text-center">{caption}</div>
      
                </div>      
              )
            }
            
          
          
        })}
        </div>
      </div>
    </div>
  );
}
