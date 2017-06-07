javascript:(()=>{
  var list = [
    ['localhost:8000','www.easyuni.com', true],
    ['www.google.com.my/search?q=', 'duckduckgo.com/?q=', false],
    ['open.spotify.com', 'play.spotify.com', false],
    ['dontstarve.wikia.com/wiki', 'dontstarve.gamepedia.com', false],
    ['www.dotabuff.com/matches','www.opendota.com/matches',false],
  ];
  var url = location.toString().split('//')[1];
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
    url = '//'+url.replace(A, B);
    if (newwin) {
      void(window.open(url));
    } else {
      location.href = url;
    }
  }
})()

