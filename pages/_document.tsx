import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * MyDocument - Custom Document to augment the application's <html> and <body> tags for Next.js.
 * 
 * This custom Document extends the default Document provided by Next.js, allowing for customization
 * of the application's HTML document structure. It is used to implement application-wide settings such
 * as font imports from Google Fonts and setting a favicon. This setup is crucial for including static
 * assets and global styles that should persist across all pages of the application.
 * 
 * The <Head> component is used to include external CSS files for fonts and other head elements like
 * favicons. The <Main /> component renders the active page's content, and <NextScript /> injects Next.js
 * scripts for the application to function correctly. This structure ensures that global settings are
 * consistently applied on server-side renders and client-side navigation.
 * 
 * @returns {JSX.Element} - A custom Document structure defining global HTML settings for the Next.js application.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                rel="stylesheet"
            />

            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;