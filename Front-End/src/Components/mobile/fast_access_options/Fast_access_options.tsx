import { useEffect, useState } from "react";
import "./Fast_access_options.css";

export const Fast_access_options = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="Fast_access_options_Container">
      <ul className="menu_fastAccess">
        <li className="option_fastAccess">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 512 512"
          >
            <path
              fill={windowWidth < 768 ? "#00bf63" : "#ffffff"}
              d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56"
            />
          </svg>
          <p>Pagar</p>
        </li>
        <li className="option_fastAccess">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            viewBox="0 0 640 512"
          >
            <path
              fill={windowWidth < 768 ? "#00bf63" : "#ffffff"}
              d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23l-174-.2c-13.3 0-24-10.7-24-24s10.7-24 24-24h174.1zM105 377l-23 23h174c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64h241.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52h117.4c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0l19.3-19.3V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52H138.6c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64m64 64H96v64c35.3 0 64-28.7 64-64m384 192c-35.3 0-64 28.7-64 64h64zm-224 32a96 96 0 1 0 0-192a96 96 0 1 0 0 192"
            />
          </svg>
          <p>Transferir</p>
        </li>
        <li className="option_fastAccess">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 48 48"
          >
            <path
              fill={windowWidth < 768 ? "#00bf63" : "#ffffff"}
              d="M36.712 14h3.172l.549-.702a2.964 2.964 0 0 0-.51-4.161l-8.331-6.508a2.964 2.964 0 0 0-4.161.51l-.367.47l.009.007L18.96 14h3.158l7.283-9.321a.464.464 0 0 1 .651-.08l2.346 1.832L26.485 14h3.173l4.71-6.03l4.015 3.137c.202.158.238.45.08.652zM9.25 10h10.297l-1.953 2.5H9.25a1.75 1.75 0 1 0 0 3.5h27.5A6.25 6.25 0 0 1 43 22.25v13.5A6.25 6.25 0 0 1 36.75 42h-25.5A6.25 6.25 0 0 1 5 35.75v-21.5A4.25 4.25 0 0 1 9.25 10M7.5 35.75a3.75 3.75 0 0 0 3.75 3.75h25.5a3.75 3.75 0 0 0 3.75-3.75v-13.5a3.75 3.75 0 0 0-3.75-3.75H9.25a4.2 4.2 0 0 1-1.75-.376zM32.25 28a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5z"
            />
          </svg>
          <p>Prestamo </p>
        </li>
        <li className="option_fastAccess">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 14 14"
          >
            <g fill="none" stroke={windowWidth < 768 ? "#00bf63" : "#ffffff"}>
              <path d="M9.75 3h-5.5a.5.5 0 0 0-.5.5v9.375a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5" />
              <path d="M7 9.438a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M1.906 4.583h-.834a.5.5 0 0 1-.35-.146a.5.5 0 0 1-.144-.354v-3A.5.5 0 0 1 .723.73a.5.5 0 0 1 .35-.147h11.855a.496.496 0 0 1 .494.5v3c0 .133-.052.26-.145.354a.5.5 0 0 1-.35.146h-.833M7 5.21a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m0 6.51a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25" />
            </g>
          </svg>
          <p>Recargas</p>
        </li>
      </ul>
    </section>
  );
};