import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const allUsers = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(allUsers);

    return (
        <ul className="list-group">
            {
                who.map(who => {
                return(<WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );
}
export default WhoToFollowList;