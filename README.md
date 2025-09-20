# 📱 Fawry Banking Wallet Apps – Redirection Solution

This project provides a **simple and responsive landing page** for Fawry’s **banking wallet applications**.  
The page automatically redirects users to the correct app store (Google Play or Apple App Store) based on their device.

---

## ✨ Features
- 🔗 **Smart Redirects** – Detects Android/iOS and redirects users to the correct store.
- 📱 **Responsive UI** – Works seamlessly on both mobile and desktop.
- 🖼️ **Dynamic Branding** – App icon, name, and description are loaded dynamically via query parameters.
- ⚡ **Lightweight & Fast** – Built with plain HTML, CSS, and JavaScript.

---

## 🚀 Live Demo
👉 [View on GitHub Pages](https://yousefhussien727.github.io/fawry-app-redirect)  

---

## ⚙️ How It Works
1. Users open the page via a link with a single **query parameter**: `?code=APP_CODE`.
2. The script detects the user’s device using `navigator.userAgent`.
3. Depending on the device:
- **Android** → redirected to **Google Play Store** for that app.
- **iOS** → redirected to **Apple App Store** for that app.
- **Other devices** → stay on page with both store buttons visible for manual download.

---

## 📌 App Codes Reference Table
Each Wallet App has a unique code that references to the following:
- App Name
- Description
- App Icon
- Google play link
- App Store link

> *Add new app codes in `script.js` with their corresponding store links when new apps are published.*

---


## 📜 License
This project is intended for **internal/company use by Fawry**.  
Not licensed for public redistribution.
