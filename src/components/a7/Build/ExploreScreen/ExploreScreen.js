import React from "react";
import NavigationSidebar from "../NavigationSideBar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                    <ExploreComponent/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    )
}

export default ExploreScreen;