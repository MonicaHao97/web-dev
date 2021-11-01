import React from "react";

const WhoToFollowListItem = (
    {
        who={
            avatarIcon:'../source/User-2.png',
            userName:'Virgin Galactic',
            handle:'virgingalactic',
        }
    }) => {
    return(
        <>
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xl-2 col-xxl-2">
                        <img src={who.avatarIcon} className="user-avatar"/>
                    </div>
                    <div className="col-xl-7 col-xxl-7">
                        <div className="user-title">{who.userName}
                            <i className="fas fa-check-circle" style={{color: "white", paddingLeft: "5px"}}/>
                        </div>
                        <div className="user-name">@{who.handle}</div>
                    </div>
                    <div className="col-xl-3 col-xxl-3">
                        <button className="btn btn-primary rounded-pill" style={{fontSize: "13px"}}>Follow</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WhoToFollowListItem;