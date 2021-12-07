import React, { useState, useEffect } from "react";
import Acara from "../components/home/Acara";
import Welcome from "../components/home/Welcome";
import { getSectionsDetail } from "../utils/Api";
import _ from "lodash";



export default function Home() {
  const [pageSections, setPageSections] = useState([]);
  const getSectionDetail = async () => {
    const response = await getSectionsDetail(2);
    const parsedData = await response;
    const sectionsData = parsedData.pages.sections;
    console.log('re1hom', sectionsData);
    setPageSections(sectionsData);
    return pageSections;
  };

  useEffect(() => {
    getSectionDetail();
  }, []);

  const sortedCols = _.sortBy(pageSections, "list_order");
  return (
    <div className="">
{sortedCols.map((data,i) => {
  if(data.id === 6) {
    return(

    <Welcome />
    )
  }
  if(data.id === 7) {
    return(

    <Acara />
    )
  }
  
})}
</div>
  )
}

