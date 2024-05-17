// import '../assets/css/global.scss'
import '../src/assets/css/global.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Ammar Hussain Portfolio</title>
                <meta name="description" content="Portfolio of Ammar, a Frontend developer" />
                <meta name="keywords" content="Ammar, portfolio,  Frontend, developer, web development" />
                <meta name="author" content="Ammar" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/AM+logo.png"  sizes="16x16" />
                <meta property="og:title" content="Ammar Hussain Portfolio" />
                <meta property="og:description" content="Portfolio of Ammar, a Frontend developer" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:url" content="https://portfolio-nu-pink-58.vercel.app/" /> */}
                {/* <meta property="og:image" content="https://portfolio-nu-pink-58.vercel.app/SharedScreenshot.jpg" /> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Ammar Hussain Portfolio" />
                <meta name="twitter:description" content="Portfolio of Ammar, a  Frontend developer" />
                {/* <meta name="twitter:image" content="https://portfolio-nu-pink-58.vercel.app/SharedScreenshot.jpg" /> */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp