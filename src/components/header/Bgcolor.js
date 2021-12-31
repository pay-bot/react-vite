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
  
  
if( txtcolorprmHead === 'text-inherit' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-current' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-transparent' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-black' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-white' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-slate-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-gray-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-zinc-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-neutral-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-stone-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-red-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-orange-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-amber-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-yellow-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-lime-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-green-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-emerald-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-teal-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-cyan-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-sky-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-blue-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-indigo-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-violet-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-purple-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-fuchsia-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-pink-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'text-rose-900' ? txtcolorprmHead : txtcolorprmHead) {}



if( txtcolorprmHead === 'hover:text-inherit' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-current' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-transparent' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-black' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-white' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-slate-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-gray-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-zinc-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-neutral-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-stone-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-red-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-orange-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-amber-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-yellow-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-lime-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-green-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-emerald-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-teal-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-cyan-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-sky-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-blue-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-indigo-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-violet-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-purple-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-fuchsia-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-pink-900' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-50' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-100' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-200' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-300' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-400' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-500' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-600' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-700' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-800' ? txtcolorprmHead : txtcolorprmHead) {}
if( txtcolorprmHead === 'hover:text-rose-900' ? txtcolorprmHead : txtcolorprmHead) {}

  
  
    // do some stuff
}
