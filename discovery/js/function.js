const handleClick = (jobadId) => {
    console.log("Click on job ad: ", jobadId)
    $('.preview-panel').hide();
    $('#' + jobadId).show();
}

const init = () => {
    console.log('init')
    $('#100003006185288').show();
}

$(document).ready(function() {
    init()
});