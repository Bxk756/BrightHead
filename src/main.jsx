import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

/**
 * Register Service Worker (no blocking dialogs, Lighthouse-safe)
 */
const updateSW = registerSW({
  onNeedRefresh() {
    const banner = document.createElement("div");
    banner.setAttribute("role", "status");
    banner.style.position = "fixed";
    banner.style.bottom = "16px";
    banner.style.left = "50%";
    banner.style.transform = "translateX(-50%)";
    banner.style.background = "#020617";
    banner.style.color = "#ffffff";
    banner.style.padding = "12px 16px";
    banner.style.borderRadius = "8px";
    banner.style.zIndex = "9999";
    banner.style.fontSize = "14px";

    const btn = document.createElement("button");
    btn.textContent = "Update";
    btn.style.marginLeft = "12px";
    btn.style.background = "#2563eb";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.padding = "6px 10px";
    btn.onclick = () => updateSW(true);

    banner.textContent = "New version available.";
    banner.appendChild(btn);
    document.body.appendChild(banner);
  },
});

/**
 * Android / Desktop PWA Install Prompt
 */
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.createElement("button");
  installBtn.textContent = "Install App";
  installBtn.setAttribute("aria-label", "Install BrightHead app");
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "16px";
  installBtn.style.right = "16px";
  installBtn.style.background = "#2563eb";
  installBtn.style.color = "#ffffff";
  installBtn.style.border = "none";
  installBtn.style.borderRadius = "8px";
  installBtn.style.padding = "10px 14px";
  installBtn.style.zIndex = "9999";

  installBtn.onclick = async () => {
    installBtn.remove();
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  };

  document.body.appendChild(installBtn);
});

/**
 * iOS Install Hint (Lighthouse-safe)
 */
const isIOS =
  /iphone|ipad|ipod/i.test(navigator.userAgent) &&
  !window.matchMedia("(display-mode: standalone)").matches;

if (isIOS) {
  const iosBanner = document.createElement("div");
  iosBanner.setAttribute("role", "status");
  iosBanner.style.position = "fixed";
  iosBanner.style.bottom = "16px";
  iosBanner.style.left = "50%";
  iosBanner.style.transform = "translateX(-50%)";
  iosBanner.style.background = "#020617";
  iosBanner.style.color = "#ffffff";
  iosBanner.style.padding = "12px 16px";
  iosBanner.style.borderRadius = "8px";
  iosBanner.style.fontSize = "14px";
  iosBanner.style.zIndex = "9999";

  iosBanner.innerHTML =
    "Install BrightHead: Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>";

  document.body.appendChild(iosBanner);
}

/**
 * React App Mount
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
