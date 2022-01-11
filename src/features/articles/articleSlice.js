import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../common/apis/Api";

export const fetchAsyncArticles = createAsyncThunk(
  "articless/fetchAsyncArticles",
  async () => {
    const response = await Api.get(
      `articles`
    );
    // console.log('ini articles redux' , response)
    return response.data;
  }
);

// export const fetchAsyncShows = createAsyncThunk(
//   "movies/fetchAsyncShows",
//   async () => {
//     const seriesText = "Friends";
//     const response = await Api.get(
//       `?i=tt3896198&apiKey=${APIKey}&s=${seriesText}&type=series`
//     );
//     return response.data;
//   }
// );

// export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
//   "movies/fetchAsyncMovieOrShowDetail",
//   async (id) => {
//     const response = await Api.get(`?i=tt3896198&apiKey=${APIKey}&i=${id}&Plot=full`);
//     return response.data;
//   }
// );

const initialState = {
  articles: {},
  // shows: {},
  // selectMovieOrShow: {},
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncArticles.pending]: () => {
      //console.log("Pending");
    },
    [fetchAsyncArticles.fulfilled]: (state, { payload }) => {
      //console.log("Fetched Successfully!");
      return { ...state, articles: payload };
    },
    [fetchAsyncArticles.rejected]: () => {
      //console.log("Rejected!");
    },
    // [fetchAsyncShows.fulfilled]: (state, { payload }) => {
    //   //console.log("Fetched Successfully!");
    //   return { ...state, shows: payload };
    // },
    // [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
    //   //console.log("Fetched Successfully!");
    //   return { ...state, selectMovieOrShow: payload };
    // },
  },
});

// export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllArticles = (state) => state.articles.articles;
// export const getAllShows = (state) => state.movies.shows;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default articleSlice.reducer;
