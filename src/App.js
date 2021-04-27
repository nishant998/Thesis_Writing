import "./App.css";
import HeaderContact from "./HeaderContact";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Nav from "./Nav.js";
import My_blog from "./My_blog.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Header__container">
        <Router>
          <div className="Header__nav">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" exact component={About} />
              <Route path="/Contact" exact component={Contact} />
              <Route path="/Myblog" exact component={My_blog} />
            </Switch>
          </div>
        </Router>
      </div>

      <div className="home__container6">
        <div className="home__container6_left">
          <span className="home__container6_left_title">RAHUL PROJECTS</span>
          <span className="home__container6_left_content">
            <p>Decide and take a step.</p>
            <p>Get dissertations soon</p>
            <p>Order now for discount</p>
          </span>
        </div>
        <div className="home__container6_middle">
          <span className="home__container6_middle_title">MENU</span>
          <span className="home__container6_middle_content">
            <p>
              <a href="./" className="footer_link">
                Home
              </a>
            </p>
            <p>
              <a href="./Myblog" className="footer_link">
                My Blog
              </a>
            </p>
            <p>
              <a href="./About" className="footer_link">
                About
              </a>
            </p>
            <p>
              <a href="./Contact" className="footer_link">
                Contact
              </a>
            </p>
          </span>
        </div>
        <div className="home__container6_right">
          <span className="home__container6_right_title">CONTACT INFO</span>
          <span className="home__container6_right_content">
            <p>rahulprojects12@gmail.com</p>
            <p>+91-8368037530</p>
            <p>Lorem ipsum dolor sit.</p>
          </span>
        </div>
      </div>
      <div className="footer_foo">
        <span className="footer1">conditions for use and sale</span>
        <span className="footer2">privacy notice</span>
        <span className="footer3">My thesis writing</span>
        <span className="footer4">
          © 2581 Chenoweth Drive , rahulprojects.com and team
        </span>
      </div>
    </div>
  );
}

export default App;
