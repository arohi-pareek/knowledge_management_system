import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="AppBottom">
          <div className="Footercontainer">
            <div className="eOffice">
              <p
                style={{
                  fontSize: "12px",
                  position: "relative",
                  color: "#fff",
                  margin: "auto",
                  marginTop: "5px",
                  right: "10em",
                }}
              >
                &reg; COSTA CLOUD
              </p>
            </div>
            <div className="versions">
              <p
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  position: "relative",
                  margin: "auto",
                  marginTop: "5px",
                }}
                // onClick={() => setOpen(true)}
              >
                v1.1.1
              </p>
            </div>
          </div>
        </div>
  );
};

export default Footer;
