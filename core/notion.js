import { NotionAPI } from "notion-client";

const notion = new NotionAPI({ authToken: process.env.NOTION_TOKEN_V2 });

export default notion;
