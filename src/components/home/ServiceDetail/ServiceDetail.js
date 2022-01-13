import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import tw, { styled } from "twin.macro";
import ReactHtmlParser from "react-html-parser";
import {
  useArticleQuery,
  useThemesQuery,
  usePagesQuery,
} from "../../../features/api/apiSlice";
import Navbar from "../../header/Navbar";
import StayUpToDate from "../StayUpToDate";
import Footer from "../Footer";

export default function ServiceDetail() {
  const { slug } = useParams();
  const {
    data: article = [],
    isLoading,
    isError,
    isSuccess,
  } = useArticleQuery(slug);
  const { data: theme = [] } = useThemesQuery();
  const { data: pageSections = [] } = usePagesQuery();
  console.log(article);

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
  const CaptionArticle = styled.p`
    ${tw`font-bold uppercase `}
    color : ${txtColorSection};
  `;

  return (
    <PageWrapper>
      <div className="mx-auto bg-white max-w-screen-2xl ">
        <Navbar />
        {isSuccess && (
          <div className="py-24 pl-0 2xl:pl-32 hd:pl-16 xl:pl-20 lg:pl-8">
            {Object.entries(article).map((data) => (
              <div className="flex flex-col-reverse items-center w-full lg:flex-row">
                <div className="w-11/12 pr-16 lg:w-5/12">
                  <CaptionArticle className="">{data[1].name}</CaptionArticle>
                  <div className="py-8 text-3xl font-semibold lg:text-5xl">
                    {data[1].summary}
                  </div>
                  <div className="text-lg prose">
                    {ReactHtmlParser(data[1].content)}
                  </div>
                </div>
                <div className="w-full lg:w-7/12">
                  <img
                    src={data[1].photos[0].url}
                    alt=""
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mx-auto bg-white max-w-screen-2xl ">
        <StayUpToDate />
      </div>
      <div className="mx-auto bg-white max-w-screen-2xl ">
        <Footer />
      </div>
    </PageWrapper>
  );
}
