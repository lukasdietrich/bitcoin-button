(function (elements, prefix, clazz, fetchURL, text) {
    var css = ".btc-button{display:inline-block;overflow:hidden;font-family:'Helvetica Neue',Arial,sans-serif;line-height:1.5em;padding:0 0 0 .5em;color:#FFF;border:2px solid #f39c12;background-color:#e67e22;text-decoration:none}.btc-button i{position:relative;padding:0 .5em;margin-left:1em;font-style:normal;float:right;background-color:#f39c12;white-space:nowrap}.btc-button i::before{position:absolute;top:0;left:-1.5em;content:'';border-style:solid;border-width:.75em;border-color:transparent #f39c12 transparent transparent}";
    
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
    } else {
        styleElement.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    
    var magic = function (button, address) {
        
        var r = new XMLHttpRequest(); 
            r.open("GET", fetchURL + address, true);
            r.onreadystatechange = function () {
        	    if (r.status != 200 || r.readyState != 4) return; 
                
                button.innerHTML += "<i>" + (Math.round(r.responseText / 10000) / 100) + " BTC</i>";
            };
            r.send();
        
        button.className += " " + clazz;
        button.innerHTML = text;
        
    };
    
    for(var i = elements.length - 1; i >= 0; i--) {
        if(elements[i].href.substring(0, prefix.length) === prefix) {
            magic(elements[i], elements[i].href.substring(prefix.length), text);
        }
    }
}(document.getElementsByTagName("a"), "bitcoin:", "btc-button", "https://blockchain.info/q/getreceivedbyaddress/", "Donate"));
