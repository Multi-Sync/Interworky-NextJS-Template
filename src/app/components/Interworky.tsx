// components/Interworky.tsx
'use client';
import Script from 'next/script';
import { FC } from 'react';

const Interworky: FC = () => {
  const apiKey = "YjE5MzYyNTgtZmFhYS00OWRiLWJlYTktYzc1ZDU5NjNjYTk4JCRhc3N0X2tBcXhOM1pZSTh1ekhBaFJxemh6OTdHVQ==";

  return (
    <Script
      src="https://storage.googleapis.com/multisync/interworky/production/interworky.js"
      data-api-key={apiKey}
      strategy="lazyOnload"
      onLoad={async()=>{
        window?.Interworky.init();
      }}
    />
  );
};

export default Interworky;
