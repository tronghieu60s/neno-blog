import { getAllPagesInSpace } from "notion-utils";
import NotionPage from "../src/components/NotionPage";
import notion from "../src/utils/notion";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
let pageId;

export const getStaticProps = async (context) => {
  const pid = context.params.pid;

  if (pid === "blog") {
    pageId = process.env.NOTION_BLOG_PAGE;
  } else {
    pageId = pid;
  }

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

export default function NotionDynamicPage(props) {
  return <NotionPage {...props} />;
}
