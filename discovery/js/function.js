const handleClick = (jobadId) => {
    console.log("Click on job ad: ", jobadId)

    // toggle preview panel job ad
    $('.preview-panel').hide();
    $('#' + jobadId).show();

    // toggle active class on job card
    $('.list-card').removeClass('active');
    $('#jobcard' + jobadId).addClass('active');

    $('#preview-container').scrollTop(0);
}

const init = () => {
    console.log('init')
    $('#100003006185288').show();
}

$(document).ready(function() {
    init()
});