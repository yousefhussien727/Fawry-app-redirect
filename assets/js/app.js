// Define your apps here
const apps = {
    TUB: {
        name: "UB Wallet",
        description: "Enjoy the most secured way of payment.",
        icon: "tub.png",
        android: "https://play.google.com/store/apps/details?id=com.emeint.android.mwallet.tub",
        ios: "https://apps.apple.com/eg/app/ub-digital-wallet/id1345952421"
    },
    QNB: {
        name: "QNB Egypt E-Wallet",
        description: "Your smart mobile payment application.",
        icon: "qnb.png",
        android: "https://play.google.com/store/apps/details?id=com.emeint.android.mwallet.qnb",
        ios: "https://apps.apple.com/eg/app/qnb-egypt-e-wallet/id1276086624"
    },
    default: {
        name: "App not Found!",
        description: "The app you are looking for does not exist. Please check the link and the app code.",
        icon: "fawry.png",
        android: "https://play.google.com/",
        ios: "https://apps.apple.com/"
    },
};

// Get query param ?code=appcode
const params = new URLSearchParams(window.location.search);
const appCode = params.get("code");
const app = apps[appCode] || apps.default; // redirect to default if code not found

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
