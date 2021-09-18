import Head from "next/head";
import Link from "next/link";
import {
  Code,
  Collection,
  CollectionRow,
  NotionRenderer,
} from "react-notion-x";
import { getPageTitle } from "notion-utils";
import { useCallback } from "react";

export default function NotionPage({ recordMap }) {
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

  const pageTitle = getPageTitle(recordMap);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <NotionRenderer
        components={{
          pageLink,
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        recordMap={recordMap}
        pageHeader={<h1 className="notion-title">{pageTitle}</h1>}
      />
    </>
  );
}
