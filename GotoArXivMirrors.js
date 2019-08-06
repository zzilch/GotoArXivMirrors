// ==UserScript==
// @name         GotoArXivMirrors
// @namespace    https://github.com/zzilch/GotoArXivMirrors
// @homepage     https://github.com/zzilch/GotoArXivMirrors
// @version      1.0
// @author       zzilch
// @description  Open arXiv sites with arXiv mirrors
// @include      /^https?://(.*\.)?arxiv\.org/.*/
// @include      http://xxx.itp.ac.cn/*
// @run-at       document-start
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    let mirrors = {
        'Main':'arxiv.org',
        'China':'xxx.itp.ac.cn',
        'Germany':'de.arxiv.org',
        'India':'in.arxiv.org',
    }
    for(let mirror in mirrors){
        console.log(mirror+':'+location.href.replace(location.hostname,mirrors[mirror]).replace('https','http'))
        GM_registerMenuCommand(mirror, function(){
            location.replace(
                location.href.replace(location.hostname,mirrors[mirror])
                .replace('https','http'))
        });
    }
})();


