import { NotionAPI } from "notion-client";
import { getAllPagesInSpace } from "notion-utils";
import { NotionRenderer } from "react-notion-x";

const notion = new NotionAPI({ authToken: process.env.NOTION_TOKEN_V2 });

export const getStaticProps = async (context) => {
  const pageId = context.params.pid;
  const recordMap = await notion.getPage(pageId);

  return { props: { recordMap } };
};

export async function getStaticPaths() {
  const pages = await getAllPagesInSpace(
    process.env.NOTION_BLOG_PAGE,
    "",
    notion.getPage.bind(notion),
    { traverseCollections: false }
  );

  console.log(Object.keys(pages));

  const paths = Object.keys(pages).map((pageId) => `/${pageId}`);

  return { paths, fallback: true };
}

export default function Blog({ recordMap }) {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  );
}
