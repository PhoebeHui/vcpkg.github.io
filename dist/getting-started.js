var os = detectOS();
$(document).ready(function () {
    clickGetStartedTab(os); //initialized to user's current platform
    $('.gs-copy-btn').click(function () {
        var step = $(this).attr('id');
        if (os === 'windows')
            copyCodePanel('windows-' + step);
        else
            copyCodePanel('unix-' + step);
    });
    $('.gs-tab-btn').click(function () {
        var id = $(this).attr('id');
        clickGetStartedTab(id.split('-')[2]);
    });
});
function clickGetStartedTab(platform) {
    os = platform;
    var elems = document.getElementsByClassName(os);
    var e;
    $('.show').removeClass('show');
    $('.selected').removeClass('selected');
    document.getElementById('gs-btn-' + os).classList.add('selected');
    for (var i = 0; i < elems.length; i++) {
        e = elems[i];
        e.classList.add('show');
    }
    if (os === 'linux' || os === 'mac') {
        elems = document.getElementsByClassName('unix');
        for (var i = 0; i < elems.length; i++) {
            e = elems[i];
            e.classList.add('show');
        }
    }
}
