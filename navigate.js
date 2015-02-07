chrome.commands.onCommand.addListener(function(command) {
chrome.tabs.getSelected(null,function(tab) {
url = tab.url;
parts = url.split("/");
lastPart = parts[parts.length-1];

parts=lastPart.split("?");
if(parts.length == 2)
	lastPart = parts[1]

stringNumberInName = lastPart.replace(/[^0-9]/gi, '');
numberInName = Number(stringNumberInName);
if(command == "navigate_plus")
	newNumberInName = numberInName + 1;
if(command == "navigate_minus" && numberInName > 1)
	newNumberInName = numberInName - 1;

url = url.replace(lastPart, lastPart.replace(stringNumberInName,newNumberInName));
chrome.tabs.update(tab.id, {url: url});
});
});

