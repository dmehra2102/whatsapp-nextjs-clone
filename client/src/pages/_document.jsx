import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-[100vw] overflow-hidden h-[100vh]">
        <Main />
        <NextScript />
        <div id="photo-picker-element"></div>
      </body>
    </Html>
  );
}
