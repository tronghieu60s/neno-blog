import Head from "next/head";
import { getAllPagesInSpace, getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";
import notion from "../core/notion";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

export const getStaticProps = async (context) => {
  const pid = context.params.pid;
  const pageId = pid === "blog" ? process.env.NOTION_BLOG_PAGE : pid;
  try {
    const recordMap = await notion.getPage(pageId);
    return { props: { recordMap } };
  } catch (error) {
    return { notFound: true };
  }
};

export async function getStaticPaths() {
  if (isDev) {
    return { paths: [], fallback: true };
  }

  const pages = await getAllPagesInSpace(
    process.env.NOTION_BLOG_PAGE,
    "",
    notion.getPage.bind(notion),
    { traverseCollections: false }
  );
  const paths = Object.keys(pages).map((pageId) => `/${pageId}`);
  return { paths, fallback: true };
}

export default function Blog({ recordMap }) {
  if (!recordMap) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{getPageTitle(recordMap)}</title>
      </Head>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </>
  );
}
