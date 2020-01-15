chrome.browserAction.onClicked.addListener(function(tab){
    var url = "https://mg5.ro";
    chrome.tabs.create({url: url});
});