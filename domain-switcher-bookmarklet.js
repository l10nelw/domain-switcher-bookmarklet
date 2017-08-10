javascript:(()=>{
    var list = [
        ['http://localhost:8000','https://www.easyuni.com', true],
        ['https://www.google.com.my/search?q=', 'https://duckduckgo.com/?q=', false],
        ['https://open.spotify.com', 'https://play.spotify.com', false],
        ['https://en.wikipedia.org/wiki', 'https://www.wikiwand.com/en', false],
        ['https://www.dotabuff.com/matches','https://www.opendota.com/matches',false],
    ];
    var url = location.toString();
    var heads = [];
    for (i in list) {
        heads = heads.concat(list[i].slice(0,2));
    }
    for (i in heads) {
        var A = heads[i];
        if (url.startsWith(A)) {
            var odd = i%2;
            var col0idx = i-odd;
            var B = heads[col0idx+!odd];
            var newwin = list[col0idx/2][2];
            break;
        }
    }
    if (B) {
        url = url.replace(A, B);
        if (newwin) {
              void(window.open(url));
        } else {
          location.href = url;
        }
    }
})()

