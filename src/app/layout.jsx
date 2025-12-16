import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Provider from './Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Stonehaus | Piedras naturales',
    template: '%s - Stonehaus',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.stonehaus.com.mx/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'StoneHaus',
    description:
      'Mármoles, granitos, cuarzos, travertinos, canteras, cuarcitas y calizas',
    url: 'https://www.stonehaus.com.mx/',
    siteName: 'Stonehaus',
    images: '/og-image.png',
  },
  description:
    'Mármoles, granitos, cuarzos, travertinos, canteras, cuarcitas y calizas',
  keywords: [
    'piedras',
    'naturales',
    'stone',
    'haus',
    'stonehaus',
    'marmol',
    'mármol',
    'marmoles',
    'mármoles',
    'calizas',
    'granito',
    'granitos',
    'cuarcitas',
    'travertinos',
    'cuarzo',
    'cuarzos',
    'canteras',
    'marbles',
    'granites',
    'quartzites',
    'limestone',
    'travertine',
  ],
  creator: 'Luis Hernández Nava',
  publisher: 'Boom Partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KRH9BDR');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11049180638"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11049180638');
        `}
        </Script>
        {/* End Google Ads */}

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '673824403922591');
    fbq('track', 'PageView');
  `}
        </Script>
        {/* End Meta Pixel */}
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRH9BDR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
