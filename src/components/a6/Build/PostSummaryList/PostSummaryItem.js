import React from "react";

const PostSummaryItem = (
    {
        post={
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very" +
                "easy to build Single Page Applications or SPAs.",
            "image": "../source/Post-1.png"
        }
    }) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-9">
                        <div className="post-topic">{post.topic}</div>
                        <div className="post-title">
                            {post.userName}
                            <i className="fas fa-check-circle" style={{color: "white"}}/>
                            <span className="post-topic"> - {post.time}</span>
                        </div>
                        <div className="post-title">
                            {post.title}
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={post.image} className="img"/>
                    </div>
                </div>
            </li>
        </>
    );
}
export default PostSummaryItem;