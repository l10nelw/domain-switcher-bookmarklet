javascript:(_=>{
    var sets = [
        [['http://localhost:8000', 'http://staging.easyuni.com', 'https://www.easyuni.com'], true],
        [['https://www.google.com/search?q=', 'https://duckduckgo.com/?q='], false],
        [['https://en.wikipedia.org/wiki', 'https://www.wikiwand.com/en'], false],
        [['https://www.dotabuff.com/matches', 'https://www.opendota.com/matches'], false],
    ];
    var url = location.toString();
    var newwin = false, match = '', dest = [];
    (_=>{
        for (var set of sets) {
            var heads = set[0];
            newwin = set[1];
            for (var head of heads) {
                if (url.startsWith(head)) {
                    match = head;
                    dest = heads.filter(x => x !== match);
                    return;
                }
            }
        }
        throw 'Site not in array set';
    })();
    if (!dest.length) {
        throw 'Error: No destination url produced';
    } else if (dest.length > 1) {
        dest = confirm(`Cancel = ${dest[1]}\nOK = ${dest[0]}`) ? dest[0] : dest[1];
    } else {
        dest = dest[0];
    }
    url = url.replace(match, dest);
    newwin ? void(open(url)) : location.href = url;
})()
