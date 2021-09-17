import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

const notion = new NotionAPI({ authToken: process.env.NOTION_TOKEN_V2 });

export default function Blog({ recordMap }) {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  );
}

export async function getStaticProps(context) {
  const recordMap = await notion.getPage("8e119601b05a4b9993a0c04b2a6ed78c");
  return {
    props: { recordMap },
  };
}
