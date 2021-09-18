import Head from "next/head";
import Link from "next/link";
import { getPageTitle } from "notion-utils";
import { useCallback, useEffect } from "react";
import {
  Code,
  Collection,
  CollectionRow,
  NotionRenderer,
} from "react-notion-x";
import Footer from "./Footer";

export default function NotionPage(props) {
  const { recordMap, showTableOfContents } = props;

  useEffect(() => {
    const contentHeader = document.querySelector(
      ".notion-aside-table-of-contents-header"
    );
    if (contentHeader) {
      contentHeader.innerHTML = "Mục Lục";
    }
  }, [recordMap]);

  const pageLink = useCallback(
    (item) => (
      <Link {...item}>
        <a {...item} />
      </Link>
    ),
    []
  );

  if (!recordMap) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{getPageTitle(recordMap)}</title>
      </Head>
      <NotionRenderer
        components={{
          pageLink,
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        showTableOfContents={showTableOfContents}
        minTableOfContentsItems={3}
        footer={<Footer />}
      />
    </>
  );
}
