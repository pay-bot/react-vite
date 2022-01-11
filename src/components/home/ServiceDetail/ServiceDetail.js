import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAsyncArticleDetail,
    getSelectedArticle,
    removeSelectedArticle,
  } from "../../../features/articles/articleSlice";

export default function ServiceDetail() {
    const { slug } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedArticle);
  console.log('inidd',data);
  useEffect(() => {
    dispatch(fetchAsyncArticleDetail(slug));
    return () => {
      dispatch(removeSelectedArticle());
    };
  }, [dispatch, slug]);
    return (
        <div className="movie-section">
        {Object.entries(data).map(data =>
        (
          <p className="">{data[1].name}</p>
        ))}
      </div>
    )
}
