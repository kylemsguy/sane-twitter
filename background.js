chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'User-Agent') {
            // console.log(details.requestHeaders[i]);
            details.requestHeaders[i].value = "Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18";
            break;
        }
      }
      return {requestHeaders: details.requestHeaders};
    },
    {urls: ["*://*.twitter.com/*"]},
    ["blocking", "requestHeaders"]);