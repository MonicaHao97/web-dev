import React from "react";
import PostItem from "./PostItem.js";
import post from "./post.json";

const PostList = () => {
    return(
        <>
            {
                post.map(post => {
                    return(<PostItem post={post}/>);
                })
            }
        </>
    );
}
export default PostList;