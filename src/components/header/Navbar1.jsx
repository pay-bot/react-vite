import React, { useState, useEffect } from "react";
import { getSectionsDetail, getMenuHeader, getTheme } from "../../utils/Api";
import _ from "lodash";



import { Link } from 'react-router-dom';

function Button({ text, bg, padding }) {
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
    // console.log('headerlogo', sectionsData);

    setPageSections(sectionsData);
    return pageSections;
  };


  const [theme, setTheme] = useState([]);
  const getThemeDetail = async () => {
    const response = await getTheme();
    const parsedData = await response;
    const themeData = parsedData.themes;
    // console.log('theme', themeData);
    setTheme(themeData);
    return theme;
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
    getThemeDetail();
    getSectionDetail();
  }, []);

// Menu Header Fetching

  const sortedHeaderChild = _.sortBy(header, "list_order");
  
  if (header) {
    let sec = header;
    if (sec && sec.length !== 0) {
        sec.forEach((section, i) => {
          sortedHeaderChild.push({
            name: section.name,
          });
      });
    }
  }

  let 
  bgPage,
  headerStyle,
  bgHead,
  txtcolorprmHead,
  txtcolorscdHead,
  fontHead,
  alignHead
  

  if (theme) {
    let tema = theme;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
       
            const t = theme ?? theme;
            if (t && t.length !== 0) {
              bgPage = t.bgroundPage
              headerStyle = t.header
              bgHead = t.bgroundHeader
              txtcolorprmHead = t.txtcolorprmHeader
              txtcolorscdHead = t.txtcolorscdHeader
              fontHead = t.fontHeader
              alignHead = t.alignHeader
        }
      });
    }
  }

  // logo fetching

  let logo;

  if (pageSections) {
    let sec = pageSections;
    if (sec && sec.length !== 0) {
      sec.forEach((section, i) => {
        switch (i) {
          case 1:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              s[0].photos?.map((data, i) => {
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
 const bg = bgHead
  
  return (
    
    <div className={`fixed left-0 right-0 top-0 h-16 shadow-md  md:${bg} bg-red-400 `}>{bgHead}
      <nav className="flex items-center container mx-auto h-full ">
        <img src={logo} alt="" className="w-10 h-10" />
        <div className=" justify-center flex gap-x-10 w-full">
          {sortedHeader.map((data,i) => 
                <>
                <ul className=" flex flex-wrap p-1 md:p-2 sm:bg-gray-300 sm:rounded-full text-sm md:text-base">

                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0 "><Link to="/" className="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800">{data.parent_id === 0 ? data.name : ''}</Link>
                {sortedHeaderChild.map((child,i) =>{
              if (data.id === child.parent_id) {
                return(
                  <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                    <li className="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                    <Link to="/" className="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800">
{child.name}
                    </Link>
                    </li>
                  </ul>
                )
              }
                
            })}
                  </li>
                </ul>
                
               
                </>
                
          )}
        </div>

      </nav>
    </div>
  );
}

export default Navbar1;

{/* <p className="text-white"> {career}</p> */}
               {/* <div className="">
               {career.map((data, i) => (
                 <div className="relative w-full  bg-gray-200">
                   <div className=" hidden group-hover:block w-full">

                   <p className=" rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{data.name}</p>
                   </div>
                 </div>

               ))}
               </div> */}