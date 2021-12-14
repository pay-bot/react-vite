import React, { useState, useEffect } from "react";
import { getSectionsDetail, getText } from "../../utils/Api";

export default function Welcome() {
    const [pageSections, setPageSections] = useState([]);
    const getSectionDetail = async () => {
      const response = await getSectionsDetail(2);
      const parsedData = await response;
      const sectionsData = parsedData.pages.sections;
      console.log('re1', sectionsData);
      setPageSections(sectionsData);
      return pageSections;
    };
  
    useEffect(() => {
      getSectionDetail();
    }, []);

  const contenId = 2;
    const [texts, setTexts] = useState([]);
    const getTexts = async () => {
      const response = await getText();
      const parsedData = await response;
      const textsData = parsedData;
      console.log('text', textsData);
      setTexts(textsData);
      return texts;
    };
  
    useEffect(() => {
      getSectionDetail();
      getTexts();
    }, []);


    let content;
  
    if (pageSections) {
      let sec = pageSections;
      if (sec && sec.length !== 0) {
          sec[0].components.forEach((section, i) => {
            switch (i) {
                case 0:
                  if (section && section.length !== 0) {
                    console.log("section contetnt", section);
      
                    //  content = s[0].heading
                  }
                  break;
                default:
                  break;
              }
        });
      }
    }
  
  
    return (
      <div>
        {content}
      </div>
    )
  }
  
  