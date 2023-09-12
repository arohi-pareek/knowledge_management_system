import React from "react";
import practice from "../images/PRACTICE.png";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row1">
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Practice Nerd Business</a>
                </li>
                <li>
                  <a href="#">Teach on Practice Nerd</a>
                </li>
                <li>
                  <a href="#">Get the app</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Help and Support</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Cookie settings</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Accessibility statement</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="social-links">
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
        <a className="footer-brand" href="#">
          <img
            className="img"
            src={practice}
            alt="Udemy"
            width="10"
            height="15"
          />{" "}
          {/*udemy Logo*/}
          {/*<button type="button" className="btn3">English</button>*/}
          <p className="since">© 2023 Practice Nerd, Inc.</p>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
