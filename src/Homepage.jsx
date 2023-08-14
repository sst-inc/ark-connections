import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
function Homepage() {
    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <a className="navbar-brand" href="#/">
                        <img src="./favicon.png" alt="Logo" className="logo" />
                    </a>
                    <a
                        className="navbar-brand navbar-nav-text-heading"
                        href="#/"
                    >
                        Ark Connections
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/quiz">
                                    Quiz
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/results">
                                    Results
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/profile">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="header">
                <p id="h1">
                    Welcome to Ark Connections. Feel free to explore possible
                    organisations you can volunteer with or can find help from!
                </p>
            </div>
            <div id="banner">
                <p>Explore some orgs that might need help ASAP</p>
                <br />
                <button className="btn btn-quiz btn-quiz-sm">
                    <a href="#/orgs">
                        <p>Right here!</p>
                    </a>
                </button>
                <br />
            </div>
            <div className="header">
                <p id="h2">Not sure which organisation to help?</p>
            </div>
            <button className="btn btn-quiz btn-quiz-lg">
                <a href="#/quiz">
                    <p>Take this quiz!</p>
                </a>
            </button>
            <div>
                <a href="https://rayofhope.sg/view-all/" target="_blank">
                    <img
                        id="roh-banner"
                        src="./assets/media/rayofhopebanner.png"
                        alt="Ray of Hope banner"
                    />
                </a>
            </div>
        </div>
    );
}
export default Homepage;
