import profile from "../constants/profile";

export default function Home() {
  return (
    <main className="neno-content">
      <div className="neno-content-inner">
        <p>
          {profile["profile.title"]} {profile["profile.name"]}
        </p>
        {profile["profile.contents"].map((content, index) => (
          <div key={index}>
            &gt;{" "}
            <a
              href={content["profile.contents.url"]}
              target="_blank"
              rel="noreferrer"
            >
              {content["profile.contents.title"]}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
