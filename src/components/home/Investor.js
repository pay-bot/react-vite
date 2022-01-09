import React, { useState, useEffect, useRef } from "react";

import { getSectionsDetail, getTheme } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";

export default function Investor() {
  const [pageSections, setPageSections] = useState([]);
  const [theme, setTheme] = useState([]);

  console.log("making", pageSections);
  useEffect(() => {
    let isSubscribed = true;
    getSectionsDetail(1).then(pageSections => {
      if (isSubscribed) {
        setPageSections(pageSections);
      }
    });
    getTheme().then(theme => {
      if (isSubscribed) {
        setTheme(theme);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let title, content, media;


  if (pageSections) {

    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec[0].forEach((section, i) => {
        switch (i) {
          case 1:
            const s = section?.sections ?? section.sections;
            if (s && s.length !== 0) {

              title = s[6]?.components[0]?.heading;
              content = s[6]?.components[0]?.content;
              media = s[5]?.components[0]?.media;
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
    let tema = theme?.themes
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgSect = t.bgroundSection

        }
      });
    }
  }
  return (
    <div className="flex py-16 bg-white ">
      <div className="">
        <div className="flex mx-auto">
          <div className="max-w-2xl">
            <div className="py-8 text-4xl text-center">{title}</div>
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
