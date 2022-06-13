import { Helmet } from 'react-helmet';
import favicon32 from '../styles/img/favicon/favicon-32x32.png';
import favicon16 from '../styles/img/favicon/favicon-16x16.png';
import webManifest from '../styles/img/favicon/site.webmanifest';
import safariPinnedTab from '../styles/img/favicon/safari-pinned-tab.svg';
import appleTouchIcon from '../styles/img/favicon/apple-touch-icon.png';

const SEO = () => (
        <Helmet>
                {/* MAIN */}
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                        name="description"
                        content="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
                />
                {/* TYPEFACE */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                />
                {/* FAVICONS */}
                <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
                <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
                <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
                <link rel="manifest" href={webManifest} />
                <link rel="mask-icon" href={safariPinnedTab} color="#7b0da3" />
                <meta name="msapplication-TileColor" content="#f4f4f4" />
                <meta name="theme-color" content="#ffffff" />
                {/* TITLE */}
                <title> Flower App </title>{' '}
        </Helmet>
);
export default SEO;
