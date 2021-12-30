import React, { useState, useEffect } from "react";
import { getSectionsDetail, getMenuHeader, getTheme } from "../../utils/Api";
import _ from "lodash";
import classnames from 'classnames';



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
  // console.log(process.env.REACT_APP_API_URL)
  const [pageSections, setPageSections] = useState([]);
  const getSectionDetail = async () => {
    const response = await getSectionsDetail(1);
    const parsedData = await response;
    const sectionsData = parsedData.pages.sections;
    console.log('headerlogo', sectionsData);

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
    console.log('navhom', parsedData);
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
          case 0:
            const s = section?.components ?? section.components[0];
            if (s && s.length !== 0) {
              s[0].photos?.map((data, i) => {
                console.log("section content", data.url);
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
    
    <div className={classnames(
      'w-full ' +bgHead
    )}>
      <nav className="flex items-center container mx-auto h-full ">
        {logo ? (<img src={logo} alt="" className="w-10 h-10" />) : null }
        <div className={`${alignHead} flex w-full`} >
          {sortedHeader.map((data,i) => 
          {
            if(data.parent_id === 0)
            return(
                <ul className=" flex flex-wrap py-10 text-sm md:text-base">

                  <li className={`w-full p-5 relative mx-1 group`}  ><Link to="/" className={`font-semibold whitespace-no-wrap ${txtcolorprmHead} hover:${txtcolorscdHead}  hover:border-b-4 border-red-300 py-2`} >{data.parent_id === 0 ? data.name : ''}</Link>
                  <ul className={`absolute bg-white left-0 mt-5  z-10 hidden group-hover:block nav-shad`}>
                {sortedHeaderChild.map((child,i) =>{
              if (data.id === child.parent_id) {
                return(
                  <>
                  {/* <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg> */}
                    <li className={`w-80 py-4 px-2 m-1 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-200  ${bgHead}`}>
                    <Link to="/" className="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800">
{child.name}
                    </Link>
                    </li>
                    </>
                )
              }
                
            })}
                  </ul>
                  </li>
                </ul>
                
               
            )
          }
                
                
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