// ----------------------------------------------------------------------- 域名
// local
// var PMT_URL = "http://192.168.3.62:8080/";
// dev
// var PMT_URL = "http://192.168.3.95:82/";
// devtag
// var PMT_URL = "http://192.168.3.95:84/";
// audit
// var PMT_URL = "http://prepublish-api.gametoycups.com/";
// pre
// var PMT_URL = "https://prepublish-api.tongitspinoy.com/";
// pro
// var PMT_URL = "https://api.tongitspinoy.com/";

export function getBaseUrl() {
  var protocol = window.location.protocol;
  var host = window.location.hostname;
  var port = window.location.port;

  var url = protocol + "//" + host + (port ? ":" + port : "");

  return url;
}

export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
