//default info if code not found
const defaultApp = {
        name: "App not Found!",
        description: "The app you are looking for does not exist. Please check the link and the app code.",
        icon: "fawry.png",
        android: "https://play.google.com/",
        ios: "https://apps.apple.com/"
    }

// Get query param ?code=appcode
const params = new URLSearchParams(window.location.search);
const appCode = params.get("code");
const app = apps[appCode] || defaultApp; // redirect to default if code not found

// Fill in content
document.getElementById("app-icon").src = "./assets/app-icon/" + app.icon;
document.getElementById("app-name").textContent = app.name;
document.getElementById("app-description").textContent = app.description;
document.getElementById("android-link").href = app.android;
document.getElementById("ios-link").href = app.ios;

// Auto redirect
const userAgent = navigator.userAgent || navigator.vendor || window.opera;
if (/android/i.test(userAgent)) {
  window.location.href = app.android;
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  window.location.href = app.ios;
} else {
//   window.location.href = app.android; // On Desktop, fallback to Android link
}
