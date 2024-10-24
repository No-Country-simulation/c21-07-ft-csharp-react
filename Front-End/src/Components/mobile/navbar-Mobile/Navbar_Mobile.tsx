import { useState } from "react";
import "./Nabvar_Mobile.css";
import { Sub_Menu } from "./Sub_Menu_Mobile/Sub_Menu";

export const Navbar_Mobile = () => {
  const [ViewSubMenu, setViewSubMenu] = useState(false);
  const [ViewUserSetting, setViewUserSetting] = useState(false);

  const HandleClick = () => {
    setViewSubMenu(!ViewSubMenu);
  };
  return (
    <>
      <div className="Navbar_Mobile_container">
        <button className="Button-Menu" onClick={HandleClick}>
          {ViewSubMenu ? (
            <svg
              className="Icons-Navbar"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-width="2"
                d="M20 20L4 4m16 0L4 20"
              />
            </svg>
          ) : (
            <svg
              className="Icons-Navbar"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 20 20"
            >
              <path fill="#ffffff" d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          )}
        </button>
        <svg
          className="Icons-Navbar logo"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 64 64"
        >
          <path
            fill="#ffffff"
            d="M17 37.9h2v10h-2zm3 0h2v10h-2zm25 0h2v10h-2zm-3 0h2v10h-2z"
          />
          <path
            fill="#ffffff"
            d="M62 24.051v-2.815L31.989 2L2 21.235v2.815l1.607-1.031l.879 1.313L2 25.928v1.876h1.313v1.842H2v1.877h2.82v1.95h.68v22.742h-.68v2.035H3.5v1.875H2V62h60v-1.875h-1.5V58.25h-1.32v-2.035h-.68V33.473h.68v-1.95H62v-1.877h-1.313v-1.842H62v-1.876l-2.487-1.595l.879-1.313zM31.989 4.814L59.128 22.21l-.878 1.313L31.989 6.691L5.75 23.522l-.879-1.313zm24.929 21.114H7.082L31.989 9.482zM13.5 56.215V54.5H17v-1.875h9.074v-.555h.556v-9.808c0-7.103 10.74-7.214 10.74 0v9.808h.556v.555H47V54.5h3.5v1.875h-37zM16 48.9v-12h7v12zm25 0v-12h7v12zM6.5 33.473h6v22.742h-6zm51 22.742h-6V33.473h6zm1.688-26.569H4.813v-1.842h54.375z"
          />
          <path
            fill="#ffffff"
            d="M31.106 11.901v.897c-1.537.353-2.681 1.57-2.681 3.031c0 1.732 1.604 3.142 3.574 3.142c.985 0 1.787.705 1.787 1.571c0 .867-.802 1.572-1.787 1.572s-1.787-.705-1.787-1.572h-1.787c0 1.461 1.144 2.679 2.681 3.031v.897h1.787v-.897c1.537-.353 2.681-1.57 2.681-3.031c0-1.732-1.604-3.142-3.574-3.142c-.985 0-1.787-.704-1.787-1.571s.802-1.572 1.787-1.572s1.787.705 1.787 1.572h1.787c0-1.461-1.144-2.679-2.681-3.031v-.897zM7.099 34.384h.708v20.98h-.708zm4.093 0h.708v20.98h-.708zm-1.364 0h.707v20.98h-.707zm-1.364 0h.707v20.98h-.707zm43.635 0h.708v20.98h-.708zm4.093 0h.708v20.98h-.708zm-1.364 0h.707v20.98h-.707zm-1.364 0h.707v20.98h-.707zm-26.048 8.294v9.393h9.168v-9.393c0-6.711-9.168-6.609-9.168 0m4.139-3.793v3.652h-3.082c.122-2.199 1.537-3.424 3.082-3.652m.001 12.064h-3.091v-3.047h3.091zm0-4.359h-3.091v-3.047h3.091zm4.122 4.359h-3.092v-3.047h3.092zm.48-6.124v2.591h-1.296v-2.591zm-.48-.25h-1.065v2.015h-2.026v-3.047h3.092v1.032zm-3.092-2.038v-3.659c1.547.212 2.962 1.426 3.082 3.659z"
          />
          <path
            fill="#ffffff"
            d="M35.695 46.467a.185.185 0 1 0-.296.149l-.077.494h.374l-.077-.494a.18.18 0 0 0 .076-.149m-.183-.435a.531.531 0 1 0-.002-1.062a.531.531 0 0 0 .002 1.062"
          />
        </svg>
        <a href="" onClick={() => setViewUserSetting(!ViewUserSetting)}>
          <svg
            className="Icons-Navbar"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"
            />
          </svg>
        </a>
      </div>
      {ViewSubMenu && <Sub_Menu />}
    </>
  );
};
