import Head from "next/head";
import Link from "next/link";
import {
  Code,
  Collection,
  CollectionRow,
  NotionRenderer,
} from "react-notion-x";
import { getPageTitle } from "notion-utils";

export default function NotionPage({ recordMap }) {
    if (!recordMap) {
    return null;
  }

  const pageLink = ({
    href,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    locale,
    ...props
  }) => (
    <Link
      href={href}
      as={as}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <a {...props} />
    </Link>
  );

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
      />
    </>
  );
}
