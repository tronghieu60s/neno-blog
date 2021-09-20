import React from "react";

export default function Footer() {
  return (
    <div className="neno-footer">
      Copyright &copy; {new Date().getFullYear()} - All rights reserved. Theme
      custom by{" "}
      <a
        href="https://github.com/tronghieu60s/neno-blog"
        target="_blank"
        rel="noreferrer"
      >
        Neno Blog
      </a>
    </div>
  );
}
