import { getAllPagesInSpace } from "notion-utils";
import NotionPage from "../src/components/NotionPage";
import notion from "../src/utils/notion";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

export const getStaticProps = async (context) => {
  const pid = context.params.pid;
  const pageId = pid === "blog" ? process.env.NOTION_BLOG_PAGE : pid;
  try {
    const recordMap = await notion.getPage(pageId);
    return {
      props: {
        recordMap,
        showTableOfContents: pid !== process.env.NOTION_BLOG_PAGE,
      },
    };
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
