import React from "react";

export default function Header() {
  return (
    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container px-5">
          <h1 className="masthead-heading mb-0">Trang này để test thôi</h1>
          <h2 className="masthead-subheading mb-0">Chỉ để test thôi</h2>
          <a
            className="btn btn-primary btn-xl rounded-pill mt-5"
            href="#scroll"
          >
            Thích thì click...
          </a>
        </div>
      </div>
      <div className="bg-circle-1 bg-circle" />
      <div className="bg-circle-2 bg-circle" />
      <div className="bg-circle-3 bg-circle" />
      <div className="bg-circle-4 bg-circle" />
    </header>
  );
}
