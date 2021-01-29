var __darkMode__ = "#575757";
var __lightMode = "#ffffff";

var __ess__ = "Web Essentials concept by Player_X_YT\n\nDownload at https://githum.com/PlayerXYT/ess\n\nAdd to this at https://forms.gle/CUv5EsWZQvfnYGv87\n\nTo get help do __essman__.SEARCH, or __essman__.help for posible search terms";

var __essman__ = new Object;
__essman__.help = "Possible manual searches: darkMode, redirect, cookie";
__essman__.darkMode = "All text will change to their respective theme if given the class 'dmColor'\nAll backgrounds will change to their respective theme if given the class 'dmBackground'\n\nTo invert the effect use the classes lmColor and lmBackground respectivly\n\nTo toggle dark mode run darkMode(), to set dark mode run darkMode(true) or darkMode(false)\nYou can also set the value of the darkMode color by changing the '__darkMode__' variable";
__essman__.redirect = "To redirect use redirect(URL) and to open it in a new tab use redirect(URL, true)";
__essman__.cookie = "A cookie can be set with setCookie(name, value) if you wish you can also add expiry and path with setCookie(name, value, expiry, path) and to skip the expiry do setCookie(name, value, false, path)\n\nTo get the value of a cookie do getCookie(name)\n\nTo remove a cookie do delCookie(name)";

if(document.cookie == "darkMode=true;") {
 document.getElementsByTagName("body")[0].bgcolor = __darkMode__;

 for(i=0;i<document.getElementsByName("dmColor").length;i++)
  document.getElementsByName("dmColor")[i].style.color = __darkMode__ ;

 for(i=0;i<document.getElementsByName("dmBackground").length;i++)
  document.getElementsByName("dmBackground")[i].style.backgroundcolor = __darkMode__;

 for(i=0;i<document.getElementsByName("lmColor").length;i++)
  document.getElementsByName("dmColor")[i].style.color = __lightMode__;

 for(i=0;i<document.getElementsByName("lmBackground").length;i++)
  document.getElementsByName("lmBackground")[i].style.backgroundcolor = __lightMode__;
}

function redirect(url, newtab=false) {
 if(newtab)
  window.open(url);
 else
  window.location.assign(url);
}

function getCookie(name) {
 for(i=0;i<document.cookie.split(";").length;i++)
  if(document.cookie.split(";")[i].split("=")[0] == name)
   return document.cookie.split(";")[i].split("=")[1];
 return false;
}

function setCookie(name, value, exp=false, path="/") {
 if(!exp)
  document.cookie = name+"="+value+";";
 else
  document.cookie = name+"="+value+";"+"expires="+exp+";"+"path="+path;
}

function delCookie(name) {
 document.cookie = name+"=null;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function darkMode(newvalue=0) {
 if(newvalue)
  setCookie("darkMode", "true");
 else if(!newvalue)
  setCookie("darkMode", "false");
 else
 {
  if(getCookie("darkMode")=="true")
   setCookie("darkMode", "false")
  else
    setCookie("darkMode", "true")
 }
}