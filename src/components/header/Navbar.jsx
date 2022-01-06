import React,{ useState, useEffect} from 'react'
import { getTheme } from '../../utils/Api'
import Navbar2 from './Navbar2';
import Navbar1 from './Navbar1';

export default function Navbar() {
  const [theme, setTheme] = useState([]);
    // console.log('theme', themeData);
    
  useEffect(() => {
    let isSubscribed = true;
    getTheme().then(theme => {
      if (isSubscribed) {
        setTheme(theme);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let navStyle

  if (theme) {
    let tema = theme?.themes
    if (tema && tema.length !== 0) {
      tema.forEach((theme, i) => {
            const t = theme ?? theme;
            if (t && t.length !== 0) {
              navStyle = t.header
        }
      });
    }
  }  
  
  return (
    
    <>
    
    {navStyle === 'header1' && <Navbar1/>}
    {navStyle === 'header2' && <Navbar2/>}
    </>
  )
}
