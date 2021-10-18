const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i>
            </a> 
            <a href="../HomeScreen/home.html" class="list-group-item ${active==='home' ? 'active':''}">
                    <i class="fas fa-home" style="color: lightgray"></i>
                    <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">Home</span>
            </a>
            <a href="../ExploreScreen/explore.html" class="list-group-item ${active==='explore' ? 'active':''}">
                <i class="fas fa-hashtag" style="color: lightgray"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">Explore</span>
            </a>
            <a href="#" class="list-group-item ${active==='notifications' ? 'active':''}">
                <i class="fas fa-bell" style="color: lightgray"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">Notifications</span>
            </a>
            <a href="#" class="list-group-item ${active==='messages' ? 'active':''}">
                <i class="fas fa-envelope" style="color: lightgray"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">Messages</span>
            </a>
            <a href="#" class="list-group-item ${active==='bookmarks' ? 'active':''}">
                <i class=" far fa-bookmark" style="color: lightgray"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item ${active==='lists' ? 'active':''}">
                <i class="fas fa-list" style="color: lightgray"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">Lists</span>
            </a>
            <a href="#" class="list-group-item ${active==='profile' ? 'active':''}">
                <i class="far fa-user-circle" style="color: lightgray"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">Profile</span>
            </a>
            <a href="#" class="list-group-item ${active==='more' ? 'active':''}">
                <i class="fas fa-info-circle" style="color: lightgray"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block list-content">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="../tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a> 
        </div>
`);
}
export default NavigationSidebar;