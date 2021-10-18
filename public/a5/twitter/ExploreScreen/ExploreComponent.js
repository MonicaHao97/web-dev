import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class=" row mt-2 mb-3">
            <div class="col-10 position-relative">
                <i class="fas fa-search wd-search-icon" style="color: rgb(110,118,125);"></i>
                <input class="input-section" type="text" placeholder="Search Twitter"/>
            </div>
            <div class="col-2">
                <a href="#"><i class="fas fa-cog fa-2x float-end text-primary"></i></a>
            </div>
        </div>
        <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
        <div class="row">
            <img src="../../../source/Background.jpeg" width="100%" height="50%">
            <span class="overlay-text">BTS Is Here</span>
            <div class="post-title">Music · Trending</div>
            <div class="mb-3 post-headline">BTS and Coldplay release their new song, My Universe</div>
        </div>
        ${PostSummaryList()} 
    `);
}
export default ExploreComponent;