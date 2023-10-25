const appsContainer = document.getElementById("apps");

function isAppInstalled(appId, relatedApps) {
  return relatedApps.some(function(app) {
    return app.id === appId;
  });
}

if ('getInstalledRelatedApps' in navigator) {
  navigator.getInstalledRelatedApps()
    .then(function(relatedApps) {
      console.log(relatedApps);
      const snapchatAppId = 'com.snapchat.android';
      const isSnapchatInstalled = isAppInstalled(snapchatAppId, relatedApps);

      if (isSnapchatInstalled) {
        appsContainer.innerHTML = "Snapchat is installed on your device.";
      } else {
        appsContainer.innerHTML = "Snapchat is not installed on your device.";
      }
    })
    .catch(function(error) {
      console.error(error);
      appsContainer.innerHTML = "Error retrieving the list of installed apps.";
    });
} else {
  appsContainer.innerHTML = "The getInstalledRelatedApps API is not supported in this browser.";
}
