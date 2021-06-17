import React, { useReducer, useRef } from "react";
import StackGrid, { transitions } from "react-stack-grid";

import Card from "./Card";
import { useFetch, useInfiniteScroll, useLazyLoading } from "../customHooks";
import "../index.css";
import imgReducer from "../redux/imgReducer";
import pageReducer from "../redux/pageReducer";
const MainBord = () => {
    const { scaleDown } = transitions;
     const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });
     const [imgData, imgDispatch] = useReducer(imgReducer, {
       images: [],
       fetching: true,
     });

     let bottomBoundaryRef = useRef(null);
     useFetch(pager, imgDispatch);
     useLazyLoading(".card-img-top", imgData.images);
     useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  return (
    <div className="">
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <h2>Images</h2>
          </a>
        </div>
      </nav>

      <div id="images">
        <StackGrid
          columnWidth={350}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          {imgData.images.map((image, index) => {
            const { author, download_url } = image;

            return <Card alt={author} data={download_url} key={index} />;
          })}
        </StackGrid>
      </div>

      <div id="page-bottom-boundary" ref={bottomBoundaryRef}></div>
    </div>
  );
};

export default MainBord;
