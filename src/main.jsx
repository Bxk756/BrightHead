import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("A new version of BrightHead is available. Reload now?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("BrightHead is ready to work offline.");
  },
});

/**
 * PWA Install Prompt (Android + Desktop)
 */
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.createElement("button");
  installBtn.innerText = "Install BrightHead App";
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "20px";
  installBtn.style.right = "20px";
  installBtn.style.padding = "12px 16px";
  installBtn.style.background = "#2563eb";
  installBtn.style.color = "#fff";
  installBtn.style.border = "none";
  installBtn.style.borderRadius = "8px";
  installBtn.style.zIndex = "9999";

  installBtn.onclick = async () => {
    installBtn.remove();
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  };

  document.body.appendChild(installBtn);
});

/**
 * iOS Install Hint
 */
const isIOS =
  /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
  !window.matchMedia("(display-mode: standalone)").matches;

if (isIOS) {
  const iosHint = document.createElement("div");
  iosHint.innerHTML =
    "Install BrightHead: Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>";
  iosHint.style.position = "fixed";
  iosHint.style.bottom = "20px";
  iosHint.style.left = "50%";
  iosHint.style.transform = "translateX(-50%)";
  iosHint.style.background = "#020617";
  iosHint.style.color = "#fff";
  iosHint.style.padding = "12px 16px";
  iosHint.style.borderRadius = "8px";
  iosHint.style.zIndex = "9999";

  document.body.appendChild(iosHint);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
