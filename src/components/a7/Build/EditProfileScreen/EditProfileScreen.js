import React, {useState} from "react";
import personalInfo from "../../../../data/personalInfo.json";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import NavigationSidebar from "../NavigationSideBar/index";

const EditProfileScreen = () => {
    let [name,setName] = useState({name: personalInfo.name})
    let [bio,setBio] = useState({bio: personalInfo.bio})
    let [local,setLocal] = useState({local: personalInfo.location})
    let [web,setWeb] = useState({web: personalInfo.website})
    let [birth,setBirth] = useState({birthday: personalInfo.dateOfBirth});
    const dispatch = useDispatch()

    const saveProfileClickHandle = () => {
        dispatch({type: 'save-profile',
            profile: {
                name: name,
                bio: bio,
                local: local,
                web: web,
                birth: birth,
            }
        });
    }

    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2" >
                    <NavigationSidebar active={'profile'}/>
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10">
                    <div className="row">
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            <Link to="/a7/twitter/profile">
                                <i className="fas fa-times mb-3" style={{color: "white"}}/>
                            </Link>
                        </div>
                        <div className="col-10" style={{fontSize: "20px", fontWeight:"bold", color: "white"}}>
                            <div >
                                Edit Profile
                            </div>
                        </div>
                        <div className="col-1">
                            <Link to="/a7/twitter/profile">
                                <button  className="btn btn-outline-dark m-1" style={{borderRadius: "20px"}}
                                         onClick={saveProfileClickHandle}>
                                    Save
                                </button>
                            </Link>
                        </div>
                    </div>
                    <img
                        src="../../../source/Thumbnail.jpeg"
                        height="200px" width="100%"
                    />
                    <div className="ms-2">
                        <div>
                            <img
                                src="../../../source/Profile.jpeg"
                                height="160px"
                                width="160px"
                                style={{ position: 'relative', border: 'black solid 5px', marginTop: '-55px', borderRadius:"50%"}}
                                alt="profile picture"/>
                        </div>
                        <div className="mt-2">
                            <label for="name">Name</label><br/>
                            <input className="bg-light text-white" id="name" rows="4"
                                   style={{width: "100%"}}
                                   value = {name.name}
                                   onChange={(e)=>setName({...personalInfo,name:e.target.value})}/>
                            {personalInfo.name}
                        </div>
                        <div className="mt-2">
                            <label for="bio">Bio</label><br/>
                            <textarea className="bg-light text-white" id="bio" rows="4"
                                      style={{width: "100%"}}
                                      value={bio.bio}
                                      onChange={(e)=>setBio({...personalInfo,bio:e.target.value})}/>
                            {personalInfo.bio}
                        </div>
                        <div className="mt-2">
                            <label for="location">Location</label><br/>
                            <input className="bg-light text-white" id="location" rows="4"
                                   style={{width: "100%"}}
                                   value={local.local}
                                   onChange={(e)=>setLocal({...personalInfo,local:e.target.value})}/>
                            {personalInfo.location}
                        </div>
                        <div className="mt-2">
                            <label for="website">Website</label><br/>
                            <input className="bg-light text-white" id="website" rows="4"
                                   style={{width: "100%"}}
                                   value={web.web}
                                   onChange={(e)=>setWeb({...personalInfo,website:e.target.value})}/>
                            {personalInfo.website}
                        </div>
                        <label for="birthday">Birth date - Edit </label><br/>
                        <input className="bg-light text-white" id="birthday" type="date"
                               value={birth.birthday}
                               onChange={(e)=>setBirth({...personalInfo,birth:e.target.value})}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfileScreen;