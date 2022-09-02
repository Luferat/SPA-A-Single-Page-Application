
// Define as características iniciais do aplicativo:
let siteName = 'SPA';
let siteSlogan = 'A Single Page Application';

// Aplicativo principal:
function runApp() {

    // Carrega a página inicial:
    getPage('home');

    // Monitora cliques nos links:
    $('a').click(getRoute);

}

// Quando um link é clicado:
function getRoute() {

    // Obtém o atributo 'href' do link:
    let route = $(this).attr('href');

    // Se é uma página externa ou uma âncora, encerra a função e libera o funcionamento normal do link:
    if (route.substring(0, 7) == 'http://' || route.substring(0, 8) == 'https://' || route.substring(0, 1) == '#') return true;

    // Exibe a página relacionada ao link clicado:
    getPage(route);

    // Encerra a função e bloqueia a ação normal do link:
    return false;
}

// Exibe uma página:
function getPage(page) {

    // Carrega o CSS da página no <head> do codumento:
    $('#pageCSS').attr('href', `/pages/${page}/style.css`);

    // Obtém o HTML da página:
    $.get(`/pages/${page}/index.html`, (content) => {

        // Exibe o HTML da página no documento:
        $('#content').html(content);

        // Obtém e executa o JavaScript da página:
        $.getScript(`/pages/${page}/script.js`);
    });

}

// Altera o <title> do documento:
function setTitle(title = '') {

    // Se não especificou um título, por exemplo, na 'home', exibe o nome e o slogan do aplicativo:
    if (title == '') $('title').html(`${siteName} .:. ${siteSlogan}`);

    // Se especificou um título, exibe o nome do aplicativo e o nome da página:
    else $('title').html(`${siteName} .:. ${pageTitle}`);

}

// Quando o documento estiver pronto, executa o aplicativo:
$(document).ready(runApp);