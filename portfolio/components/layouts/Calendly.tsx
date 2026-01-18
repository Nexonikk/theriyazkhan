"use client";

import Script from "next/script";

export default function Calendly() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div
        className="calendly-inline-widget rounded-2xl overflow-hidden"
        data-url="https://calendly.com/khanriyaz-160621/30min?hide_gdpr_banner=1"
        style={{
          width: "100%",
          height: "700px",
        }}
      />
    </>
  );
}
