javascript:(_=>{
    
    const SETS = [
        // [ array_url_heads_to_match, bool_open_in_new_tab ],
        [['https://www.google.com/search?q=', 'https://duckduckgo.com/?q=', 'https://www.bing.com/search?q='], false],
        [['https://en.wikipedia.org/wiki', 'https://www.wikiwand.com/en'], false],
        [['https://www.dotabuff.com/matches', 'https://www.opendota.com/matches'], false],
    ];
    
    var url = location.toString(),
        newtab = false,
        match = '',
        dest = [];
    
    (_=>{
        for (let set of SETS) {
            let heads  = set[0],
                newtab = set[1];
            for (let head of heads) {
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
    newtab ? void(open(url)) : location.href = url;
    
})()
