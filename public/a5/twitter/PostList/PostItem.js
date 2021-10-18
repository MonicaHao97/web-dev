const PostItem = (post) => {
    return(`
                <div class="row wd-post-section-1">
                    <div class="col-1 mt-3">
                        <img class="wd-user-avatar" src="${post.image}"/>
                    </div>
                    <div class="col-10 ms-2 mt-3">
                        <p class="wd-user-name">${post.userName}
                            <i class="fas fa-check-circle" style="color: white"></i>
                            <span class="wd-user-handle">@${post.handle} · ${post.time}</span>
                        <p class="wd-post-tweet">${post.tweet}</p>
                        <img class="wd-post-cover" src="${post.cover}"/>
                        <p class="${post.title==='' ? 'wd-hidden':''} wd-post-title 
                        wd-post-section-2 p-2">${post.title}<br/>
                            <span class="wd-post-content">${post.content}</span><br/>
                            <span class="wd-post-content"><i class="fas fa-link"></i> ${post.site}</span></p>
                        <div class="row mb-2 mt-3">
                            <a class="wd-post-number col-3" href="#">
                                <i class="fas fa-comment-alt"></i>
                                <span class="wd-post-number-padding"></span>${post.comments}</a>
                            <a class="wd-post-number col-3" href="#">
                                <i class="fas fa-retweet"></i>
                                <span class="wd-post-number-padding"></span>${post.repost}</a>
                            <a class="wd-post-number col-3" href="#">
                                <i class="fas fa-heart"></i>
                                <span class="wd-post-number-padding"></span>${post.likes}</a>
                            <a class="wd-post-number col-3" href="#">
                                <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
    `);
}
export default PostItem;