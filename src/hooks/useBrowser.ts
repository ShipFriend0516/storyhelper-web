import { useState, useEffect } from "react";

type BrowserType =
  | "Chrome"
  | "Arc"
  | "Edge"
  | "Brave"
  | "Opera"
  | "Whale"
  | "Vivaldi";

function detectBrowser(): BrowserType {
  const ua = navigator.userAgent;

  if (ua.includes("Arc")) {
    return "Arc";
  } else if (ua.includes("Edg")) {
    return "Edge";
  } else if (ua.includes("OPR") || ua.includes("Opera")) {
    return "Opera";
  } else if (ua.includes("Whale")) {
    return "Whale";
  } else if (ua.includes("Vivaldi")) {
    return "Vivaldi";
  } else if (
    (navigator as { brave?: { isBrave?: () => Promise<boolean> } }).brave
      ?.isBrave
  ) {
    return "Brave";
  } else if (ua.includes("Chrome")) {
    return "Chrome";
  }
  return "Chrome";
}

export function useBrowser() {
  const [browser] = useState<BrowserType>(detectBrowser);

  return browser;
}
