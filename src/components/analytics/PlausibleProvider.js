import Script from "next/script";
import React from "react";

const PlausibleProvider = () => {
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        data-domain="developedbywill.com"
        src="https://analytics.developedbywill.com/js/script.js"
      />
      <Script id="plausible-setup" strategy="lazyOnload">
        {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>
    </>
  );
};

export default PlausibleProvider;
