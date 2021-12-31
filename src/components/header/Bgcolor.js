import React,{ useState, useEffect } from 'react'
import { getTheme } from '../../utils/Api';

export default function Bgcolor() {

    const [theme, setTheme] = useState([]);
  const getThemeDetail = async () => {
    const response = await getTheme();
    const parsedData = await response;
    const themeData = parsedData.themes;
    console.log('themesss', themeData);
    setTheme(themeData);
    return theme;
  }; 

  useEffect(() => {
    getThemeDetail();
  }, []);

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

  if(bgHead === 'bg-inherit' ? bgHead : bgHead) {}
  if(bgHead === 'bg-current' ? bgHead : bgHead) {}
  if(bgHead === 'bg-transparent' ? bgHead : bgHead) {}
  if(bgHead === 'bg-black' ? bgHead : bgHead) {}
  if(bgHead === 'bg-white' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-slate-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-gray-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-zinc-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-neutral-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-stone-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-red-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-orange-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-amber-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-yellow-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-lime-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-green-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-emerald-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-teal-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-cyan-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-sky-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-blue-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-indigo-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-violet-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-purple-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-fuchsia-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-pink-900' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-50' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-100' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-200' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-300' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-400' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-500' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-600' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-700' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-800' ? bgHead : bgHead) {}
  if(bgHead === 'bg-rose-900' ? bgHead : bgHead) {}
  
  
  
  
    // do some stuff
}
