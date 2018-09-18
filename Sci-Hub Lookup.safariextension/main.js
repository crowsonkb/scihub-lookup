function performCommand(event) {
    if (event.command == "button") {
        var scihubDomain = safari.extension.settings.scihubDomain;
        var url = safari.application.activeBrowserWindow.activeTab.url;
        url = url.replace(/https?:\/\/(.+?)\//, `http://$1.${scihubDomain}/`);
        safari.application.activeBrowserWindow.activeTab.url = url;
    }
}

safari.application.addEventListener("command", performCommand, false);
