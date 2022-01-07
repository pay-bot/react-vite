import React, { useState, useEffect, useRef } from "react";
import { getSectionsDetail } from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";

export default function MakingYourWorld() {
  const [pageSections, setPageSections] = useState([]);
  console.log("making", pageSections);
  useEffect(() => {
    let isSubscribed = true;
    getSectionsDetail(1).then((pageSections) => {
      if (isSubscribed) {
        setPageSections(pageSections);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let caption, title, content;
  let caption2, title2, content2, video;

  let image = [];
  if (pageSections) {
    let sec = pageSections?.pages?.sections;
    if (sec && sec.length !== 0) {
      sec.forEach((section, i) => {
        switch (i) {
          case 2:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              caption = s[0].caption;
              title = s[0].heading;
              content = s[0].content;
            }
            s[0].photos?.forEach((data, i) => {
              image.push(data);
            });
            caption2 = s[1].caption;
            title2 = s[1].heading;
            content2 = s[1].content;
            video = s[1].action_url;

            break;
          default:
            break;
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

  return (
    <div className="py-16 bg-white">
      <div className="relative w-full h-full py-16 ">
        <div className="flex items-center w-full h-full pl-32 pr-28">
          <div className="flex items-center justify-center w-4/12 h-full">
            <div className="">
              <p className="font-bold text-blue-600 uppercase">{caption}</p>
              <div className="py-8 text-5xl">{title}</div>
              <div className="text-lg">{ReactHtmlParser(content)}</div>
            </div>
          </div>
          <div className="w-8/12 h-full pl-32">
            <div className="grid h-full grid-cols-3 gap-10 ">
              {image.map((data) => (
                <div className="flex items-center justify-center h-full py-10 transition duration-500 transform bg-red-100 hover:scale-110">
                  <div className="">
                    <img src={data.url} alt="" className="w-20 h-20 mx-auto " />
                    <p className="text-center">{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="flex items-center w-full pl-36">
          <div className="w-3/12 ">
            <div className="">
              <p className="font-bold text-blue-600 uppercase">{caption2}</p>
              <div className="py-8 text-5xl">{title2}</div>
              <div className="text-lg">{ReactHtmlParser(content2)}</div>
            </div>
          </div>
          <div className="w-9/12 pl-10 pr-44">
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
