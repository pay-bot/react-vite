import React from 'react'
import ReactHtmlParser from "react-html-parser";
import tw, { styled } from "twin.macro";
import { useThemesQuery, usePagesQuery } from '../../features/api/apiSlice'

export default function StayUpToDate() {
    const { data: theme = [] } = useThemesQuery();
  const { data: pageSections = [] } = usePagesQuery();
  
  let bgPage, bgSect, txtColorSection;

  if (theme) {
    let tema = theme?.themes;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgPage = t.bgroundPage;
          bgSect = t.bgroundSection;
          txtColorSection = t.txtcolorscdSection;
        }
      });
    }
  }

  let action, title, content, media;

  if (pageSections) {
    let sec = pageSections[0]?.sections;
    if (sec && sec.length !== 0) {
      const s = sec ?? sec;
      if (s && s.length !== 0) {
        s?.forEach((section, i) => {
          switch (section.id) {
            case 12:
              // console.log("section contentrrr", section);
              action = section?.components[0]?.action_name;
              title = section?.components[0]?.heading;
              content = section?.components[0]?.content;
              media = section?.components[0]?.media;
              break;
            default:
              break;
          }
        });
      }
    }
  }

  const SectionWrapper = styled.div`
  ${tw`w-full h-full py-8 xl:py-16`}
  background-color: ${bgSect} ;
`;

    return (
      <div className="flex py-8 bg-white xl:py-16 ">
        <SectionWrapper>
        <div className="flex items-center justify-center max-w-2xl mx-auto ">
          <div className="">
  
            <img src={`${process.env.REACT_APP_API_ASSET_URL}/uploads/images/${media}`} alt="" className="w-10 h-10 mx-auto mb-8 lg:mb-16" />
            <div className="pb-8 text-3xl font-semibold text-center text-white lg:pb-16 lg:text-5xl">{title}</div>
            <div className="text-center text-white ">
              {ReactHtmlParser(content)}
            </div>
          </div>
        </div>
      </SectionWrapper>
      </div>
    )
}
