import React from "react";
import NavigationSidebar from "../NavigationSideBar";
import ProfilePage from "./ProfilePage";

const ProfileScreen = () => {

    return(

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ProfilePage/>
            </div>

        </div>
    )
}

export default ProfileScreen;