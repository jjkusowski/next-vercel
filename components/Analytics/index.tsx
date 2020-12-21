import React from "react";
import { GA_TRACKING_ID } from "../../lib/google/gtag";

const Analytics = (): JSX.Element => (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `,
      }}
    />
  </>
);

export default Analytics;
