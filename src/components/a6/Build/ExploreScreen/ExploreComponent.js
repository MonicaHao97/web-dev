import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className=" row mt-2 mb-3">
                <div className="col-10 position-relative">
                    <i className="fas fa-search wd-search-icon" style={{color: "rgb(110,118,125);"}}/>
                    <input className="input-section" type="text" placeholder="Search Twitter"/>
                </div>
                <div className="col-2">
                    <a href="#"><i className="fas fa-cog fa-2x float-end text-primary"/></a>
                </div>
            </div>
            <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="row">
                <img src="../../../source/Background.jpeg" style={{width: "100%", height: "50%"}}/>
                    <span className="overlay-text">BTS Is Here</span>
                    <div className="post-title">Music · Trending</div>
                    <div className="mb-3 post-headline">BTS and Coldplay release their new song, My Universe</div>
            </div>
            {PostSummaryList()}
        </>
    );
}
export default ExploreComponent;