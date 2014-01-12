Bitcoin-button
==============

A simple button to donate bitcoins.

All you have to do is to place a link like:

```HTML
<a href="bitcoin:address"></a>
```
  
and on the bottom of your page

```HTML
<script type="text/javascript">
  (function(e,t,n,r,i){var s=".btc-button{display:inline-block;overflow:hidden;font-family:'Helvetica Neue',Arial,sans-serif;line-height:1.5em;padding:0 0 0 .5em;color:#FFF;border:2px solid #f39c12;background-color:#e67e22;text-decoration:none}.btc-button i{position:relative;padding:0 .5em;margin-left:1em;font-style:normal;float:right;background-color:#f39c12;white-space:nowrap}.btc-button i::before{position:absolute;top:0;left:-1.5em;content:'';border-style:solid;border-width:.75em;border-color:transparent #f39c12 transparent transparent}";var o=document.createElement("style");o.type="text/css";if(o.styleSheet){o.styleSheet.cssText=s}else{o.appendChild(document.createTextNode(s))}document.getElementsByTagName("head")[0].appendChild(o);var u=function(e,t){var s=new XMLHttpRequest;s.open("GET",r+t,true);s.onreadystatechange=function(){if(s.status!=200||s.readyState!=4)return;e.innerHTML+="<i>"+Math.round(s.responseText/1e4)/100+" BTC</i>"};s.send();e.className+=" "+n;e.innerHTML=i};for(var a=e.length-1;a>=0;a--){if(e[a].href.substring(0,t.length)===t){u(e[a],e[a].href.substring(t.length),i)}}})
  (document.getElementsByTagName("a"),"bitcoin:","btc-button","https://blockchain.info/q/getreceivedbyaddress/","Donate");
</script>
```
