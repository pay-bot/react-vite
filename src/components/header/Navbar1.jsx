import React, { useState, useEffect } from "react";
import { getSectionsDetail, getMenuHeader, getTheme } from "../../utils/Api";
import _ from "lodash";
import classNames from "classnames";
import clsx from "clsx";
import cx from "clsx";
import tw, { styled } from "twin.macro";

import { Link } from "react-router-dom";

function Button({ text, bg, padding }) {
  return (
    <div>
      <button
        className={`
          ${padding || "px-6 py-2"} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

function Navbar1(props) {
  // console.log(process.env.REACT_APP_API_URL)
  const [pageSections, setPageSections] = useState([]);
  const getSectionDetail = async () => {
    const response = await getSectionsDetail(1);
    const parsedData = await response;
    const sectionsData = parsedData.pages.sections;
    console.log("headerlogo", sectionsData);

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
    console.log("navhom", parsedData);
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

  let bgPage,
    headerStyle,
    bgHead,
    txtcolorprmHead,
    txtcolorscdHead,
    fontHead,
    alignHead;

  if (theme) {
    let tema = theme;
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
        const t = theme ?? theme;
        if (t && t.length !== 0) {
          bgPage = t.bgroundPage;
          headerStyle = t.header;
          bgHead = t.bgroundHeader;
          txtcolorprmHead = t.txtcolorprmHeader;
          txtcolorscdHead = t.txtcolorscdHeader;
          fontHead = t.fontHeader;
          alignHead = t.alignHeader;
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
                logo = data.url;
              });

              //  content = s[0].heading
            }
            break;
          default:
            break;
        }
      });
    }
  }

  const bg = {
    'background-color': bgHead
  }

const list = {
  'color' : txtcolorprmHead
}  

const lost = {
  'color' : txtcolorscdHead
}  
  const [isHover, setIsHover] = useState(list);
  const [pos, setPos] = useState(0);

  function mouseEnter(e) {
    const rect = e.target.getBoundingClientRect();
    setPos(rect.left);
    setIsHover(lost);
  }
  function mouseLeave() {
    setIsHover(list);
  }

 

const Nav = styled(Link)`
  ${tw`font-semibold whitespace-nowrap `}
  &:hover {
    color: ${txtcolorscdHead};
    border-bottom: 4px solid ${txtcolorscdHead};
    transition: all 0.2s;
  }
`;

const ChildNav = styled.li`
  ${tw`px-2 py-4 m-1 text-sm whitespace-nowrap w-80 md:text-base `}
  &:hover {
    background-color: ${bgPage};
    transition: all 0.2s;
  }
`;

  return (
    <div className={bgHead} style={bg}>
      <nav className="container flex items-center h-full mx-auto ">
        {logo ? <img src={logo} alt="" className="w-10 h-10" /> : null}
        <div className={`${alignHead} flex w-full`}>
          {sortedHeader.map((data, i) => {
            if (data.parent_id === 0)
              return (
                <ul className="flex flex-wrap py-10 text-sm md:text-base">
                  <p></p>
                  <li   className={`w-full p-5 relative mx-1 group`}>
                    <Nav
                    
                      to="/"
                      
                    >
                      {data.parent_id === 0 ? data.name : ""}
                    </Nav>
                    <ul
                      className={`absolute bg-white left-0 mt-5  z-10 hidden group-hover:block nav-shad`}
                    >
                      {sortedHeaderChild.map((child, i) => {
                        if (data.id === child.parent_id) {
                          return (
                            <>
                              {/* <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg> */}
                              <ChildNav
                                className={`${bgHead}`}
                              >
                                <Link
                                  to="/"
                                >
                                  {child.name}
                                </Link>
                              </ChildNav>
                            </>
                          );
                        }
                      })}
                    </ul>
                  </li>
                </ul>
              );
          })}
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar1;

{
  /* <p className="text-white"> {career}</p> */
}
{
  /* <div className="">
               {career.map((data, i) => (
                 <div className="relative w-full bg-gray-200">
                   <div className="hidden w-full group-hover:block">

                   <p className="block px-4 py-2 whitespace-no-wrap rounded-t hover:bg-gray-400">{data.name}</p>
                   </div>
                 </div>

               ))}
               </div> */
}
