import React, { useState, useEffect } from "react";
import { getSectionsDetail, getMenuHeader } from "../../utils/Api";
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
    console.log('headerlogo', sectionsData);

    setPageSections(sectionsData);
    return pageSections;
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


  let career = []
  if (header) {
    let head = header;
    if (head && head.length !== 0) {
      head.forEach((data, i) => {
        // console.log('iniii' , data)
        switch (data.parent_id) {
          case 3:
            const s = data ?? data;
            if (s && s.length !== 0) {
              career.push({
                name: s.name
              });


                // console.log('iniiu', career)
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
        <div className="group  inline-block relative w-full">
          {sortedHeader.map((data, i) => {
            if (i === 0) {
              console.log(data.id)
              return (
                <>
                <ul className="flex  items-center space-x-10 text-sm block ">

                  <li className="flex block  "><Link to="/" className="text-gray-400 hover:text-gray-100">{data.name}</Link>


                  </li>
                </ul>
                
               {/* <p className="text-white"> {career}</p> */}
               <div className="">
               {career.map((data, i) => (
                 <div className="relative w-full  bg-gray-200">
                   <div className=" hidden group-hover:block w-full">

                   <p className=" rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{data.name}</p>
                   </div>
                 </div>

               ))}
               </div>
                </>
              )
            }

            
            
            


          })}
        </div>
        <div>
          <div class="p-20">
            <div class="group inline-block relative">
              <button
                class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <span class="mr-1">Dropdown</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >One</a
                  >
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >One</a
                  >
                </li>
                

              </ul>
            </div>
          </div>
          <Button text="Login" bg="bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
