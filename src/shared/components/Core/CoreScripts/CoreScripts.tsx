import Script from 'next/script';

import React from 'react';

const CoreScripts = () => {
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js?57"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('Telegram Web App SDK загружен');
        }}
        async
      />
    </>
  );
};

export default CoreScripts;
