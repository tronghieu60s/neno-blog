import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div className="neno-container">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
