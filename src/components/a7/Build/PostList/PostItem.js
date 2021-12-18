import React from "react";

const PostItem = (
    {
        post = {
            "image":"../source/New-York-Post.jpeg",
            "userName":"New York Post",
            "time":"23h",
            "handle":"nypost",
            "tweet":"Grimes seen reading Karl Max following split with world's richest man Elon Musk trib.al/nx2Gfaq",
            "cover":"../source/Cover-2.jpeg",
            "title":"", "content":"","site":"",
            "comments":"965", "repost":"2.4K","likes":"4K"
        }
    }) => {
    return(
        <>
            <div className="row wd-post-section-1">
                <div className="col-1 mt-3">
                    <img className="wd-user-avatar" src={post.image}/>
                </div>
                <div className="col-10 ms-2 mt-3">
                    <p className="wd-user-name">{post.userName}
                        <i className="fas fa-check-circle" style={{color: "white", paddingLeft: "5px"}}/>
                        <span className="wd-user-handle" style={{paddingLeft: "5px"}}>@{post.handle} · {post.time}</span></p>
                        <p className="wd-post-tweet">{post.tweet}</p>
                        <img className="wd-post-cover" src={post.cover}/>
                        <p className={`${post.title==='' ? 'wd-hidden':''} wd-post-title 
                    wd-post-section-2 p-2`}>{post.title}<br/>
                            <span className="wd-post-content">{post.content}</span><br/>
                            <span className="wd-post-content"><i className="fas fa-link"/>{post.site}</span></p>
                        <div className="row mb-2 mt-3">
                            <a className="wd-post-number col-3" href="#">
                                <i className="fas fa-comment-alt"/>
                                <span className="wd-post-number-padding"/>{post.comments}</a>
                            <a className="wd-post-number col-3" href="#">
                                <i className="fas fa-retweet"/>
                                <span className="wd-post-number-padding"/>{post.repost}</a>
                            <a className="wd-post-number col-3" href="#">
                                <i className="fas fa-heart"/>
                                <span className="wd-post-number-padding"/>{post.likes}</a>
                            <a className="wd-post-number col-3" href="#">
                                <i className="fas fa-external-link-alt"/></a>
                        </div>
                </div>
            </div>
        </>
    );
}
export default PostItem;