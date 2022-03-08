import "./intro.scss";
import { init } from "ityped";
import { useRef } from "react";
import { useEffect } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Designer", "Developer", "Engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2 className="colored">Welcome to my website,</h2>
          <h1>
            My name is <span className="colored">Aaron Osolo</span>
          </h1>
          <h3>
            I am a professional Software <span ref={textRef}></span>{" "}
          </h3>
          <h3>
            And founder of <span className="colored"> TEXOL LTD.</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/profile.jfif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
