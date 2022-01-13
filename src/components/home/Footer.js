import React from "react";
import {
  useThemesQuery,
  usePagesQuery,
  useFootersQuery,
} from "../../features/api/apiSlice";
import tw, { styled } from "twin.macro";
import ReactHtmlParser from "react-html-parser";

export default function Footer() {
  const { data: theme = [] } = useThemesQuery();
  const { data: pageSections = [] } = usePagesQuery();
  const { data: footer = [] } = useFootersQuery();

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
  let bgEachSection;
  let action, title, content, logo, contentFooter;

  if (pageSections) {
    let sec = pageSections[0]?.sections;
    if (sec && sec.length !== 0) {
      const s = sec ?? sec;
      if (s && s.length !== 0) {
        s?.forEach((section, i) => {
          switch (section.id) {
            case 13:
              bgEachSection = section.bgroundsection;
              action = section?.components[1]?.action_name;
              title = section?.components[1]?.heading;
              content = section?.components[1]?.content;
              contentFooter = section?.components[2]?.content;
              section?.components[0]?.photos?.map((data, i) => {
                logo = data.url;
              });

              break;
            default:
              break;
          }
        });
      }
    }
  }

  const SectionWrapper = styled.div`
    ${tw`w-full h-full mt-16`}
    background-color: ${bgEachSection};
  `;
  const FooterWrapper = styled.div`
    ${tw`w-full h-full px-8 py-16`}
    background-color: ${bgSect};
  `;

  return (
    <>
      <SectionWrapper>
        <div className="flex items-center justify-center max-w-2xl py-8 mx-auto xl:py-10 2xl:py-24">
          <div className="">
            <div className="pb-4 text-sm font-semibold text-center text-white">
              {action}
            </div>
            <div className="text-4xl text-center text-white ">
              {ReactHtmlParser(content)}
            </div>
          </div>
        </div>
      </SectionWrapper>
      <FooterWrapper>
        <div className="flex justify-around w-full">
          <div className="w-1/12">
            <img src={logo} alt="" className="w-20 h-20" />
          </div>
          <div className="flex grid w-7/12 grid-cols-3">
            {footer.map((data) => (
              <p className="text-white">{data.name}</p>
            ))}
          </div>
          <div className="w-4/12">
              <div className="prose text-gray-300">{ReactHtmlParser(contentFooter)}</div>
          </div>
        </div>
      </FooterWrapper>
    </>
  );
}
