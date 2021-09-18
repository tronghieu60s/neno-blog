import Head from "next/head";
import Link from "next/link";
import profile from "../constants/profile";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{profile["profile.title"]}</title>
      </Head>
      <main className="neno-profile">
        <p>
          {profile["profile.hello"]} <b>{profile["profile.author"]}</b>.
        </p>
        {profile["profile.contents"].map((content, index) => (
          <div key={index}>
            &gt;{" "}
            <Link href={content["profile.contents.url"]}>
              {content["profile.contents.title"]}
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
