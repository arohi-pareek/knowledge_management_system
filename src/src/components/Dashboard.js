import React from "react";
import Carousel from "./carousel";
import ericsson from "../ericsson.png";
import w from "../w.png";
import cisco from "../cisco.png";
import pg from "../pg.png";

import Card from "./Card";
import Footer from "./Footer";
import Nav from "./nav";
// import Footer from '../components/Footer'
function Dashboard() {
  return (
    
    <div>
      <Nav />

      <Carousel />

      <section class="white-section" id="features">
        <div class="container-fluid">
          <div class="row">
            <div class="feature-box  ">
              <p className="text">
                Trusted by over 14,400 companies and millions of learners around
                the world
              </p>
              <img className="comp2" src={w} alt="w" width="30" height="24" />
              <img
                className="comp1"
                src={ericsson}
                alt="ericsson"
                width="30"
                height="24"
              />

              <img
                className="comp"
                src={cisco}
                alt="cisco"
                width="30"
                height="24"
              />
              <img className="comp3" src={pg} alt="pg" width="30" height="24" />
            </div>

           
          </div>
        </div>
      </section>

      <Card />
      <Footer />
    </div>
  );
}
export default Dashboard;
