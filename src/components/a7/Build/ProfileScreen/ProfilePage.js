import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const info = (state) => state.profile;

const Profile = () => {
    const profile = useSelector(info);
    console.log(profile);

    return(
        <>
            <div className="row">
                <div className="col-1 mt-2">
                        <i className="fas fa-arrow-left"/>
                </div>
                <div className="col-9">
                    <div style={{fontSize: '20px',color:'white', fontWeight:'bold'}}>
                        {profile[0].name}
                    </div>

                    <div style={{fontSize: '15px',color: 'darkgray'}}>
                        5,196 Tweets
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="../../../source/bg.png"
                    height="400px" width="100%" style={{objectFit: 'cover'}}/>
            </div>
            <div className="row">
                <div>
                    <img
                        src="../../../source/User-3.png"
                        className="rounded-circle"
                        height="160px"
                        width="160px"
                        style={{border:'black solid 4px',marginTop: "-100px"}}
                    />
                    <div className= "mb-2">
                        <span style={{fontSize: '24px',fontWeight: "bold",color:"white"}}>
                            {profile[0].name}
                        </span>
                        <br/>
                        <span style={{color: 'gray'}}>
                            @{profile[0].handle}
                        </span>
                    </div>
                </div>
                <div className="col">
                    <Link to="/a7/twitter/edit">
                        <button type="button" className="btn btn-outline-dark"
                                style={{float: 'right',marginTop: "-80px",borderRadius: "20px"}}>Edit Profile</button>
                    </Link>
                </div>
            </div>
            <div style={{color: 'white'}}>
                <div>
                    {profile[0].bio}
                </div>
                <div className="row mt-2 mb-2" style={{color: 'darkgray'}}>
                    <div className="col-4">
                        <i className="fas fa-map-marker-alt pe-2"/>
                        {profile[0].location}
                    </div>
                    <div className="col-4">
                        <i className="fas fa-birthday-cake pe-2"/>
                        Born {profile[0].dateOfBirth}
                    </div>
                    <div className="col-4">
                        <i className="fas fa-calendar-alt pe-2"/>
                        Joined {profile[0].dateJoined}
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <span style={{color: 'white',fontWeight:'bold'}}>{profile[0].followingCount}</span>
                        <span className="ps-2" style={{color: 'darkgray'}}>Following</span>
                    </div>
                    <div className="col-5">
                        <span style={{color: 'white',fontWeight:'bold'}}>{profile[0].followersCount}</span>
                        <span className="ps-2" style={{color: 'darkgray'}} >Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;