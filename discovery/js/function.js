const handleClick = (jobadId) => {
    // console.log("Click on job ad: ", jobadId)

    // toggle preview panel job ad
    $('.preview-panel').hide();
    $('#' + jobadId).show();

    // toggle active class on job card
    $('.list-card').removeClass('active');
    $('#jobcard' + jobadId).addClass('active');

    // scroll to top of preview panel
    $('#preview-container').scrollTop(0);

    // change view in new tab link
    $('#jobad-newtab').prop("href", 'jobad-' + jobadId + '.html')

}

const splitviewToggle = (jobadId) => {
    console.log("Click on job ad: ", jobadId);
    // $('.joblist-columns').toggle();
}

const init = () => {
    const initAd = '100003006185288';
    handleClick(initAd);
}

const toggleFilter = () => {
    $('#filters').slideToggle('fast');
}

const checkVisible = (el) => {
    let elVislble = true;
    if(el.getBoundingClientRect().bottom <= 0) {
        elVislble = false
    } else {
        elVislble = true
    }
    return elVislble
}