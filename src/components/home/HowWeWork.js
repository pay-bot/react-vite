import React, { useState, useEffect, useRef } from "react";
import { getSectionsDetail, getTheme, getArticle } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";

export default function HowWeWork() {
  const [pageSections, setPageSections] = useState([]);
  const [theme, setTheme] = useState([]);
  const [article, setArticle] = useState([]);

  //console.log("making", pageSections);
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
    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec[0].forEach((section, i) => {
        switch (i) {
          case 1:
            const s = section?.sections ?? section.sections;
            if (s && s.length !== 0 ) {
              s.forEach((section, i) => {
                switch (section.id) {
                  case 10:
            if (s && s.length !== 0) {

              title = section?.components[0]?.heading;
              content = section?.components[0]?.content;
              caption = section?.components[0]?.caption;
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

  let articleId = []

  if (article) {
    let art = article;
    if (art && art.length !== 0) {
      art.map((data, i) => {
        articleId.push(data);

      }
      )

    }
  }

  let test = []
  {
    articleId.map((data) => {
      data.map((data) => {


        test.push(data)

      })
    })
  }

  const CaptionArticle = styled.p`
  ${tw`font-bold text-center uppercase`}
  color : ${txtColorSection};
`;



  return (
    <div className="flex py-16 bg-white ">
      <div className="">
        <div className="flex justify-center mx-auto">
          <div className="max-w-2xl">
            <CaptionArticle>
              {caption}
            </CaptionArticle>
            <div className="py-8 text-4xl text-center">{title}
            </div>
            <div className="text-center ">{ReactHtmlParser(content)}
            </div>
          </div>
        </div>
        <div className="grid w-11/12 grid-cols-3 mx-auto gap-x-10">
          {test.map((data, i) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
