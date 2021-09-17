import Head from "next/head";
import Link from "next/link";
import profile from "../const/profile";

export default function index() {
  return (
    <>
      <Head>
        <title>{profile["profile.title"]}</title>
      </Head>
      <main className="neno-profile">
        <p>{profile["profile.hello"]}</p>
        {profile["profile.contents"].map((content, index) => (
          <div key={index}>
            &gt;{" "}
            <Link
              href={content["profile.contents.url"]}
              target="_blank"
              rel="noreferrer"
            >
              {content["profile.contents.title"]}
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
