import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import tw, { styled } from "twin.macro";
import ReactHtmlParser from "react-html-parser";
import { useArticleQuery, useThemesQuery, usePagesQuery } from "../../../features/api/apiSlice";
import Navbar from "../../header/Navbar";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { data: article = [], isLoading, isError, isSuccess } = useArticleQuery(slug);
  const { data: theme = [] } = useThemesQuery();
  const { data: pageSections = [] } = usePagesQuery();
  console.log(article)

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

  const PageWrapper = styled.div`
  ${tw`w-full `}
  background-color: ${bgPage};
  
`;
  
    return (
      <PageWrapper>
        
      <div className="mx-auto bg-white max-w-screen-2xl ">
        <Navbar/>
          {isSuccess && (
            <div className="py-24 pl-40">
          {Object.entries(article).map(data => (
            <div className="flex items-center w-full">
              <div className="w-5/12 pr-16">
            <div className="">{data[1].name}</div>
            <div className="py-8 text-6xl font-semibold">{data[1].summary}</div>
            <div className="text-lg prose">{ReactHtmlParser(data[1].content)}</div>
                
              </div>
              <div className="w-7/12">
                <img src={data[1].photos[0].url} alt="" className="object-cover" />
              </div>
            </div>
          ))}
          </div>
          )}
      </div>
      </PageWrapper>
    )
}
