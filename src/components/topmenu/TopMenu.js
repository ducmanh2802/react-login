import React from "react";
import "./TopMenu.css";
import { useHistory } from "react-router-dom";

export default function TopHeader({ signIn, object, data }) {
  let history = useHistory();

  const styleSpan = {
    color: "#a28587",
  };
  let classText = "";
  let welcome = "";
  if (object.username !== "") {
    classText += "nav-link display-none";
    welcome = "nav-link display";
  } else {
    classText += "nav-link display";
    welcome = "nav-link display-none";
  }
  // const [styles, setStyles] = useState({ display: "block" });
  // useEffect(() => {
  //   setStyles(object.username !== "" ? styles.display : { display: "none" });
  // }, []);

  // console.log(styles);
  const signOut = () => {
    history.push("/");
    object.username = "";
    object.password = "";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container px-5">
        <a className="navbar-brand" href="#page-top">
          First Project
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={classText} href="/login">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className={classText} href="/login" onClick={signIn}>
                Log In
              </a>
            </li>
            <li>
              <span style={styleSpan} className={welcome}>
                Xin chao {object.username}
              </span>
            </li>
            <li>
              <a className={welcome} href="/dashboard">
                Dashbord
              </a>
            </li>
            <li>
              <a className={welcome} href="/" onClick={signOut}>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
