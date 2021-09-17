import Link from "next/link";
import profile from '../const/profile';

export default function index() {
  return (
    <main className="neno-content">
      <div className="neno-content-inner">
        <p>{profile["profile.title"]}</p>
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
      </div>
    </main>
  );
}
