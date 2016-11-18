src = ["/images/screenshot/c.jpg","images/screenshot/h.jpg", "images/screenshot/m.jpg", "images/screenshot/flower.jpg"]

duration = 2;

ads=[]; ct=0;
function switchAd() {
var n=(ct+1)%src.length;
if (ads[n] && (ads[n].complete || ads[n].complete==null)) {
document["Ad_Image"].src = ads[ct=n].src;
}
ads[n=(ct+1)%src.length] = new Image;
ads[n].src = src[n];
setTimeout("switchAd()",duration*1000);
}
function doLink(){
location.href = url[ct];
} onload = function(){
if (document.images)
switchAd();
}

