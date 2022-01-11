import { configureStore } from "@reduxjs/toolkit";
import sectionsReducer from "./sections/sectionSlice";
import themesReducer from "./themes/themeSlice"
import menusReducer from "./menus/menuSlice"
import articlesReducer from "./articles/articleSlice"



export const store = configureStore({
  reducer: {
    headers : menusReducer,
    themes: themesReducer,
    sections: sectionsReducer,
    articles: articlesReducer,
  },
});
