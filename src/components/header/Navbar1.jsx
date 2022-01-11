import React, { useState, useEffect } from "react";
import _ from "lodash";
import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAsyncSections, getAllSections } from "../../features/sections/sectionSlice"
import { fetchAsyncThemes, getThemes } from "../../features/themes/themeSlice"
import { fetchAsyncHeaders, getHeaders } from "../../features/menus/menuSlice";



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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncSections());
    dispatch(fetchAsyncThemes());
    dispatch(fetchAsyncHeaders());
  }, [dispatch]);

  const pageSections = useSelector(getAllSections);
  const theme = useSelector(getThemes);
  const header = useSelector(getHeaders);
  
 
  const sortedHeader = _.sortBy(header, "list_order");
  const sortedHeaderChild = _.sortBy(header, "list_order");

  if (header) {
    let head = header;
    if (head && head.length !== 0) {
        sortedHeaderChild.push({
          name: head.name,
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
    let tema = theme?.themes
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
    let sec = pageSections[0]?.sections;
    if (sec && sec.length !== 0) {
      const s = sec ?? sec;
      if (s && s.length !== 0) {
        s?.forEach((section, i) => {
          switch (section.id) {
            case 1:
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

  const bg = {
    'backgroundColor': bgHead
  }

  const NavWrapper = styled.div`
  ${tw`flex w-full `}
  justify-content: ${alignHead};
`;

const Nav = styled(Link)`
  ${tw`font-semibold uppercase whitespace-nowrap `}
  &:hover {
    padding-bottom: 8px;
    color: ${txtcolorscdHead};
    border-bottom: 4px solid ${txtcolorscdHead};
    transition: all 0.2s;
  }
`;

const ChildNav = styled.li`
  ${tw`p-2 py-4 m-1 text-sm whitespace-nowrap w-80 md:text-base `}
  &:hover {
    background-color: ${bgPage};
    transition: all 0.2s;
  }
`;



  return (
    <div style={bg}>
      <nav className="container flex items-center h-full pl-16 mx-auto ">
        {logo ? <img src={logo} alt="" className="w-16 h-16" /> : null}
        <NavWrapper>
          {sortedHeader.map((data, i) => {
            if (data.parent_id === 0)
              return (
                <ul className="flex flex-wrap py-5 text-sm md:text-base">
                  <p></p>
                  <li   className={`w-full p-5 relative mx-1 group`}>
                    <Nav
                    
                      to="/"
                      
                    >
                      {data.parent_id === 0 ? data.name : ""}
                    </Nav>
                    <ul
                      className={`absolute bg-white left-0 mt-5  z-10 hidden group-hover:block  nav-shad`}
                    >
                      {sortedHeaderChild.map((child, i) => {
                        if (data.id === child.parent_id) {
                          return (
                            <>
                              <svg className="absolute top-0 left-0 z-0 block w-4 h-4 ml-3 -mt-3 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
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
        </NavWrapper>
        
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
