import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import { finalData, quizzed } from "./Quiz.jsx"

function Results() {
    if (quizzed === true) {
        return (
            <div>
                <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
                <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id='navbar-container'>
                <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                    <a className="navbar-brand" href="#/">
                        <img
                            src="assets/media/favicon.png"
                            alt="Logo"
                            className="logo"
                        />
                    </a>
                    <a className="navbar-brand navbar-nav-text-heading" href="#/">
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
                                <a className="nav-link" href="#/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/quiz">
                                    Quiz
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#/results">
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
                <div className="d-flex flex-row">
                    <div className="startText">
                        <quoteText>
                            "Knowing yourself is the <strong>beginning</strong> of
                            all <strong>wisdom.</strong>"
                        </quoteText>
                        <p>~Aristotle</p>
                    </div>
                    <div style={{ width: "40%" }}></div>
                </div>
                <h1>What we know about you: </h1>
                <div className="pop-up-flex">
                    <div className="pop-up-flex-col">
                        <div
                            className="container container-orange pop-up d-flex flex-column container-results"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p>1. You prefer working with {finalData[0]}</p>
                        </div>
                        <div
                            className="container container-purple pop-up d-flex flex-column container-results"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p>3. You prefer {finalData[2]}</p>
                        </div>
                    </div>
                    <div className="pop-up-flex-col">
                        <div
                            className="container container-purple pop-up d-flex flex-column container-results"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p>2. You prefer helping the {finalData[1]} </p>
                        </div>
                        <div
                            className="container container-orange pop-up d-flex flex-column container-results"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p>4. </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="pop-up-flex">
                    <div
                        className="container container-green pop-up d-flex flex-column"
                        style={{ justifyContent: "space-around" }}
                    >
                        <p>You are most suited for these organisations</p>
                        <div
                            className="d-flex flex-row"
                            style={{
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <button className="btn btn-lg">
                                <a href="#/orgs-filter">
                                    <p className="btn-cta-text">Click to view!!!</p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <i class="fa-solid fa-computer pop-up-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>Copyright © Arklink Solutions 2023</footer>
            </div>
        );
    } else {
        return (
            <div>
                <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
                <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id='navbar-container'>
                <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                    <a className="navbar-brand" href="#/">
                        <img
                            src="assets/media/favicon.png"
                            alt="Logo"
                            className="logo"
                        />
                    </a>
                    <a className="navbar-brand navbar-nav-text-heading" href="#/">
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
                                <a className="nav-link" href="#/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/quiz">
                                    Quiz
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#/results">
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
                <div className="d-flex flex-row">
                    <div className="startText">
                        <quoteText>
                            Please take the <strong>quiz</strong> first.
                        </quoteText>
                    </div>
                    <div style={{ width: "40%" }}></div>
                </div>
                <div className="pop-up-flex">
                    <a href="#/quiz">
                        <button
                            className="container btn btn-quiz btn-purple container-results"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p className="btn-cta-text">Go to quiz</p>
                        </button>
                    </a>
                </div>
                <footer>Copyright © Arklink Solutions 2023</footer>
            </div>
        );
    }
}

export default Results;
