import "./topbar.scss";
import { Mail, Person } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span className="colored">a|o</span>
          </a>
          <div className="itemContainer">
            <Person />
            <span>7262818553</span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>aaronosolo@gmail.com</span>
          </div>
        </div>
        <div className="right" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
