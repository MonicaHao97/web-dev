const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="post-topic">${post.topic}</div>
                    <div class="post-title">
                        ${post.userName} <i class="fas fa-check-circle" style="color: white"></i>
                        <span class="post-topic"> - ${post.time}</span>
                    </div>
                    <div class="post-title">
                        ${post.title}
                    </div>
                </div>
                <div class="col-3">
                    <img src="${post.image}" class="img">
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;