import React from "react";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <footer
      className="footer footer-horizontal footer-center bg-gray-500
     text-primary-content bottom-0 pb-1"
    >
      <aside className=" ">
        <Logo></Logo>
        <p className="font-semibold">
          ScholarStream Institution Ltd.
          <br />
          Providing funds & education since 2010
        </p>
        <p className="text-xs p-0 m-0 font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
        <nav className=" m-0 p-0">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://x.com/yourProfile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open X (Twitter) profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
              >
                <title>X logo</title>

                <path
                  d="M4 5.5L12 12.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 18.5L12 11.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 5.5L12 12.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18.5L12 11.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://facebook.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </aside>
    </footer>
  );
};

export default Footer;
