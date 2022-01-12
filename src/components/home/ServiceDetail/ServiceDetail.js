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
            <div className="py-32 pl-40">
          {Object.entries(article).map(data => (
            <div className="">
            <div className="">{data[1].name}</div>
            <div className="">{data[1].summary}</div>
            <div className="text-lg">{ReactHtmlParser(data[1].content)}</div>
            </div>
          ))}
          </div>
          )}
      </div>
      </PageWrapper>
    )
}
