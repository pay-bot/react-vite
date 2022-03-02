import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

import {
  useThemesQuery,
  useHeadersQuery,
  usePagesQuery,
} from "../../features/api/apiSlice";
import { HiMenuAlt3 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

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
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAsyncSections());
  //   dispatch(fetchAsyncThemes());
  //   dispatch(fetchAsyncHeaders());
  // }, [dispatch]);

  // const pageSections = useSelector(getAllSections);
  // const theme = useSelector(getThemes);
  // const header = useSelector(getHeaders);
  const { data: theme = [] } = useThemesQuery();
  const { data: header = [] } = useHeadersQuery();
  const { data: pageSections = [] } = usePagesQuery();

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
    let tema = theme?.themes;
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
    let sec = pageSections?.model?.sections;
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

  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  const bg = {
    backgroundColor: bgHead,
  };

  const NavWrapper = styled.div`
    ${tw`w-full `}
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

  const dispatch = useDispatch();

  return (
    <div style={bg} className="z-100">
      <nav className="container flex items-center h-full py-4 pl-4 mx-auto lg:pl-16 lg:py-0">
        <Link to="/">
          {logo ? (
            <img src={logo} alt="" className="w-12 h-12 md:h-16 md:w-16" />
          ) : null}
        </Link>
        <NavWrapper className="hidden lg:flex z-30">
          {sortedHeader.map((data, i) => {
            if (data.parent_id === 0)
              return (
                <ul className="flex flex-wrap py-5 text-sm md:text-base">
                  <p></p>
                  <li className={`w-full p-5 relative mx-1 group`}>
                    <Nav to="/">{data.parent_id === 0 ? data.name : ""}</Nav>
                    <ul
                      className={`absolute bg-white left-0 mt-5  z-30 hidden group-hover:block  nav-shad`}
                    >
                      {sortedHeaderChild.map((child, i) => {
                        if (data.id === child.parent_id) {
                          return (
                            <>
                              <svg
                                className="absolute top-0 left-0 z-100 block w-4 h-4 ml-3 -mt-3 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                              </svg>
                              <ChildNav className={`${bgHead} z-100`}>
                                <Link to="/">{child.name}</Link>
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
          {/* <ul className='header-left'>
        <li
          onClick={() =>
            dispatch(
              openModal({
                name: 'Login',
                childrenProps: { name: 'kareem', email: 'kareem@gmail.com' },
              })
            )
          }
        >
          Login
        </li>
        <li
          onClick={() =>
            dispatch(openModal({ name: 'Register', position: 'bottom' }))
          }
        >
          Register
        </li>
      </ul> */}
        </NavWrapper>
        <div className="flex justify-end ml-auto lg:hidden" ref={ref}>
          <HiMenuAlt3
            onClick={() => setIsMenuOpen((oldState) => !oldState)}
            className="w-10 h-10 p-2 mr-4 text-gray-700 transition duration-200 transform border border-gray-400 rounded-lg cursor-pointer ring-blue-300 focus:ring-4 hover:scale-110"
          />
          {isMenuOpen && (
            <NavWrapper className="absolute inset-x-0 z-30 block w-11/12 py-4 mx-auto bg-white shadow-lg top-20 lg:hidden">
              {sortedHeader.map((data, i) => {
                if (data.parent_id === 0)
                  return (
                    <ul className="flex flex-wrap py-5 text-sm md:text-base">
                      <p></p>
                      <li className={`w-full p-5 relative mx-1 group`}>
                        <Nav to="/">
                          {data.parent_id === 0 ? data.name : ""}
                        </Nav>
                        <ul
                          className={`absolute bg-white left-0 mt-5  z-10 hidden group-hover:block  nav-shad`}
                        >
                          {sortedHeaderChild.map((child, i) => {
                            if (data.id === child.parent_id) {
                              return (
                                <>
                                  <svg
                                    className="absolute top-0 left-0 z-0 block w-4 h-4 ml-3 -mt-3 text-white fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                  </svg>
                                  <ChildNav className={`${bgHead}`}>
                                    <Link to="/">{child.name}</Link>
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
          )}
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
