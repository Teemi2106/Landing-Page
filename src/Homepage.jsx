import React from "react";
import Header from "./Components/Header";
import "./CSS/homepage.css";
import icon from "./assets/icon.png";
import undraw from "./assets/undraw.png";
import undraw2 from "./assets/undraw2.png";
import undraw3 from "./assets/undraw3.png";
import undraw4 from "./assets/undraw4.png";
import fb from "./assets/fb.png";
import ln from "./assets/ln.png";
import yt from "./assets/yt.png";
import tw from "./assets/tw.png";
import insta from "./assets/in.png";
import ScrollAnimation from "./Components/ScrollAnimations";

const Homepage = () => {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <div id="homepage">
        <Header />
        <ScrollAnimation animationType="slide-up">
          <section id="hero">
            <div id="content">
              <h1 style={{ fontSize: "5vmin" }}>
                Introduce Your Product Quickly & Effectively
              </h1>
              <p style={{ fontSize: "2vmin" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                fugiat consectetur exercitationem ex, aliquam dolor tempora
                officia architecto ea fuga unde, atque dicta labore rerum omnis.
                A possimus laboriosam in.
              </p>
              <div>
                <button>Purchase UI Kit</button>
                <button>Learn More</button>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animationType="fade-in">
          <section id="section2">
            <div id="content2">
              <h1 style={{ color: "rgba(9, 17, 51, 1)", fontSize: "5vmin" }}>
                Light, Fast & Powerful
              </h1>
              <p style={{ color: "rgba(111, 124, 178, 1)", fontSize: "2vmin" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                tenetur vel, unde mollitia debitis cum eius ipsam doloribus
                corrupti incidunt nisi, sapiente odit eum iste beatae blanditiis
                quasi excepturi cupiditate?
              </p>
              <div id="icon">
                <div>
                  <img src={icon} alt="" style={{ width: "15vmin" }} />
                  <h2
                    style={{ color: "rgba(9, 17, 51, 1)", fontSize: "4.5vmin" }}
                  >
                    Title Goes Here
                  </h2>
                  <p
                    style={{
                      color: "rgba(93, 105, 112, 1)",
                      fontSize: "2vmin",
                    }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, ipsam ex. Magni deleniti explicabo voluptatem
                    voluptatibus voluptates sequi veniam incidunt cumque
                    doloribus aspernatur temporibus nulla, ipsum perspiciatis
                    sed voluptas laudantium!
                  </p>
                </div>
                <div>
                  <img src={icon} alt="" style={{ width: "15vmin" }} />
                  <h2
                    style={{ color: "rgba(9, 17, 51, 1)", fontSize: "4.5vmin" }}
                  >
                    Title Goes Here
                  </h2>
                  <p
                    style={{
                      color: "rgba(93, 105, 112, 1)",
                      fontSize: "2vmin",
                    }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, ipsam ex. Magni deleniti explicabo voluptatem
                    voluptatibus voluptates sequi veniam incidunt cumque
                    doloribus aspernatur temporibus nulla, ipsum perspiciatis
                    sed voluptas laudantium!
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={undraw} alt="" />
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animationType="slide-up">
          <section id="section3">
            <div id="imgContainer">
              <img src={undraw2} alt="" />
            </div>
            <div style={{ padding: "3vmin" }}>
              <h1 style={{ color: "rgba(9, 17, 51, 1)", fontSize: "4.5vmin" }}>
                Light, Fast & Powerful
              </h1>
              <p style={{ color: "rgba(111, 124, 178, 1)", fontSize: "2vmin" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                tenetur vel, unde mollitia debitis cum eius ipsam doloribus
                corrupti incidunt nisi, sapiente odit eum iste beatae blanditiis
                quasi excepturi cupiditate?
              </p>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animationType="zoom-in">
          <section id="section3">
            <div>
              <img src={undraw3} alt="" />
            </div>
            <div>
              <h1 style={{ color: "rgba(9, 17, 51, 1)", fontSize: "4.5vmin" }}>
                Light, Fast & Powerful
              </h1>
              <p style={{ color: "rgba(111, 124, 178, 1)", fontSize: "2vmin" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                tenetur vel, unde mollitia debitis cum eius ipsam doloribus
                corrupti incidunt nisi, sapiente odit eum iste beatae blanditiis
                quasi excepturi cupiditate?
              </p>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animationType="slide-up">
          <section id="section3">
            <div>
              <img src={undraw4} alt="" />
            </div>
            <div style={{ padding: "5vmin" }}>
              <h1 style={{ color: "rgba(9, 17, 51, 1)", fontSize: "4.5vmin" }}>
                Light, Fast & Powerful
              </h1>
              <p style={{ color: "rgba(111, 124, 178, 1)", fontSize: "2vmin" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                tenetur vel, unde mollitia debitis cum eius ipsam doloribus
                corrupti incidunt nisi, sapiente odit eum iste beatae blanditiis
                quasi excepturi cupiditate?
              </p>
              <button
                style={{
                  width: "25vmin",
                  border: "1px solid black",
                  backgroundColor: "rgba(17, 27, 71, 1)",
                  color: "white",
                }}
              >
                Purchase Now
              </button>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animationType="zoom-in">
          <section id="section4">
            <div style={{ padding: "3vmin" }}>
              <h2 style={{ color: "rgba(9, 17, 51, 1)" }}>
                A Price To Suit Everyone
              </h2>
              <p style={{ color: "rgba(111, 124, 178, 1)" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt ipsum omnis, fugiat enim, necessitatibus quam tempora
                sunt nemo optio eum facilis facere. Error adipisci praesentium
                facere provident quo fugit quibusdam.
              </p>
              <h1 style={{ color: "rgba(34, 47, 101, 1)" }}>$40</h1>
              <h3 style={{ color: "rgba(55, 68, 126, 1)", fontSize: "2vmin" }}>
                UI Design Kit
              </h3>
              <p style={{ color: "rgba(93, 105, 112, 1)" }}>
                See, One price, Simple
              </p>
              <button
                style={{
                  backgroundColor: "rgba(17, 27, 71, 1)",
                  border: "1px solid rgba(17, 27, 71, 1)",
                  padding: "1vmin 2vmin",
                  color: "white",
                }}
              >
                Purchase Now
              </button>
            </div>
          </section>
        </ScrollAnimation>
        <footer>
          <div id="company">
            <p style={{ color: "rgba(147, 158, 164, 1)", fontSize: "2vmin" }}>
              ©2023 Yourcompany
            </p>
            <h1 style={{ fontSize: "4vmin" }}>Landing</h1>
            <button
              style={{
                backgroundColor: "rgba(17, 27, 71, 1)",
                border: "1px solid rgba(17, 27, 71, 1)",
                padding: "1vmin 2vmin",
                color: "white",
                fontSize: "2vmin",
              }}
            >
              Purchase Now
            </button>
          </div>
          <hr />
          <div id="comp2">
            <ul style={{ fontSize: "3vmin" }}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div id="footerIcons">
              {" "}
              <img src={fb} alt="" />
              <img src={ln} alt="" />
              <img src={tw} alt="" />
              <img src={yt} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Homepage;
