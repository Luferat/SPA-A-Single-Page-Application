
let siteName = 'SPA';
let siteSlogan = 'A Single Page Application';

function runApp() {

    getPage('home');

    $('a').click(getRoute);

}

function getRoute() {

    let route = $(this).attr('href');

    if (route.substring(0, 7) == 'http://' || route.substring(0, 8) == 'https://' || route.substring(0, 1) == '#') return true;

    getPage(route);

    return false;
}

function getPage(page) {

    $('#pageCSS').attr('href', `/pages/${page}/style.css`);

    $.get(`/pages/${page}/index.html`, (content) => {
        $('#content').html(content);
        $.getScript(`/pages/${page}/script.js`);
    });

}

function setTitle(title = '') {

    if (title == '')
        $('title').html(`${siteName} .:. ${siteSlogan}`);
    else
        $('title').html(`${siteName} .:. ${pageTitle}`);

}

$(document).ready(runApp);