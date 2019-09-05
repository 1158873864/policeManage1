var address = "https://www.shaoshanlu.com:8080";
//var address = "https://junrongcenter.com:8080";
var imagePath="../";
function getUrl() {
    return address;
}

function getToken(){
    var storage = window.localStorage;
    var token=storage["token"];
    return token;
}

function getImagePath(){
    return imagePath;
}
