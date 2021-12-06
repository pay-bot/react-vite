import React, { useState, useEffect } from "react";
import {  getSectionsDetail,getMenuHeader } from "../../utils/Api";
import _ from "lodash";



import {Link} from 'react-router-dom';

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}



function Navbar1() {
  const [pageSections, setPageSections] = useState([]);
  const getSectionDetail = async () => {
    const response = await getSectionsDetail(1);
    const parsedData = await response;
    const sectionsData = parsedData.pages.sections;
    console.log('headerlogo', sectionsData);
    setPageSections(sectionsData);
    return pageSections;
  };

  const [header, setHeader] = useState([]);
  const getHeader = async () => {
    const response = await getMenuHeader();
    const parsedData = await response;
    // console.log('navhom', parsedData);
    const HeaderData = parsedData;
    setHeader(HeaderData);
    return header;
  };
  const sortedHeader = _.sortBy(header, "list_order");

  useEffect(() => {
    getHeader();
    getSectionDetail();
  }, []);

  let logo;

  if (pageSections) {
    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec.forEach((section, i) => {
        switch (i) {
          case 1:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              s[0].photos?.map((data,i) => {
                // console.log("section content", data.url);
                logo = data.url
              })

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
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md bg-gray-900">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <img src={logo} alt="" className="w-10 h-10" />
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            {sortedHeader.map((data,i) => {
              return(

                <li><Link to="/" className="text-gray-400 hover:text-gray-100">{data.name}</Link></li>

              )

})}
          </ul>
        </div>
        <div>
          <Button text="Login" bg="bg-gradient-to-r from-purple-500 to-blue-500"/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
