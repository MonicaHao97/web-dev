const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-xl-2 col-xxl-2">
                    <img src="${who.avatarIcon}" class="user-avatar"/>
                </div>
                <div class="col-xl-7 col-xxl-7">
                    <div class="user-title">${who.userName}
                        <i class="fas fa-check-circle" style="color: white"></i>
                    </div>
                    <div class="user-name">@${who.handle}</div>
                </div>
                <div class="col-xl-3 col-xxl-3">
                    <button class="btn btn-primary rounded-pill" style="font-size: 13px">Follow</button>
                </div>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;