import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="list-group">
                <Link to="/a7/"className="list-group-item">
                        <i className="fab fa-twitter"/>
                </Link>
                <Link to="/a7/twitter/home" className={`list-group-item ${active === 'home' ? 'active':''}`}>
                    <i className="fas fa-home" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                          style={{paddingLeft: "5px"}}>Home</span>
                </Link>
                <Link to="/a7/twitter/explore" className={`list-group-item ${active === 'explore' ? 'active':''}`}>
                    <i className="fas fa-hashtag" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                    style={{paddingLeft: "5px"}}>Explore</span>
                </Link>
                <Link to="/a7/twitter/notifications" className={`list-group-item ${active === 'notifications' ? 'active':''}`}>
                    <i className="fas fa-bell" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                          style={{paddingLeft: "5px"}}>Notifications</span>
                </Link>
                <Link to="/a7/twitter/messages" className={`list-group-item ${active === 'messages' ? 'active':''}`}>
                    <i className="fas fa-envelope" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                          style={{paddingLeft: "5px"}}>Messages</span>
                </Link>
                <Link to="/a7/twitter/bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active':''}`}>
                    <i className="far fa-bookmark" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                          style={{paddingLeft: "5px"}}>Bookmarks</span>
                </Link>
                <Link to="/a7/twitter/lists" className={`list-group-item ${active === 'lists' ? 'active':''}`}>
                    <i className="fas fa-list" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                          style={{paddingLeft: "5px"}}>Lists</span>
                </Link>
                <Link to="/a7/twitter/profile" className={`list-group-item ${active === 'profile' ? 'active':''}`}>
                    <i className="far fa-user-circle" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                          style={{paddingLeft: "5px"}}>Profile</span>
                </Link>
                <Link to="/a7/twitter/more" className={`list-group-item ${active === 'more' ? 'active':''}`}>
                    <i className="fas fa-info-circle" style={{color: "lightgray"}}/>
                    <span className="d-none d-xl-inline-block d-xxl-inline-block list-content"
                          style={{paddingLeft: "5px"}}>More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <Link to="/a7/" className="btn btn-primary btn-block rounded-pill">Tweet</Link>
            </div>
        </>
    );
}
export default NavigationSidebar;