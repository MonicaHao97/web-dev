import React from "react";
import NavigationSidebar from "../NavigationSideBar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

const HomeScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                    <PostList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                    <PostSummaryList/>
                </div>
            </div>
        </>
    )
}

export default HomeScreen;
