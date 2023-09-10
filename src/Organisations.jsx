import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import rofImg from "./assets/image/ray-of-hope.png";
import sincImg from "./assets/image/sinc.png";
import spcaImg from "./assets/image/SPCA-Logo.png";
import ncssImg from "./assets/image/ncss.png";

function Organisations() {
    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div className="navbar-container">
                <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                <a className="navbar-brand" href="#/">
                        <img
                            src="assets/media/favicon.png"
                            alt="Logo"
                            className="logo"
                        />
                    </a>
                    <a
                        className="navbar-brand navbar-nav-text-heading"
                        href="#/"
                        style={{ padding: "5px" }}
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
                                <a className="nav-link" href="#/results">
                                    Results
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#/orgs">
                                    Organisations
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
                    <h1 className="quoteText">
                        "The gift of <strong>service</strong> leads to a life of{" "}
                        <strong>love.</strong>"
                    </h1>
                    <p>~Mary White</p>
                </div>
                <div style={{ width: "40%" }}></div>
            </div>
            <h1>Check out our affiliated Organisations!</h1>
            <div className="pop-up-flex">
                <div className="pop-up-flex-row">
                    <div
                        className="container container-orange pop-up d-flex flex-column"
                        style={{ justifyContent: "space-around" }}
                    >
                        <p>Ray of Hope</p>
                        <div
                            className="d-flex flex-row"
                            style={{
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <button className="btn btn-lg">
                                <a href="https://rayofhope.sg/view-all/">
                                    <p className="btn-cta-text">Right here!</p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <img className="org-logo" src={rofImg}></img>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container container-purple pop-up d-flex flex-column"
                        style={{ justifyContent: "space-around" }}
                    >
                        <p>National Council Of Social Services</p>
                        <div
                            className="d-flex flex-row"
                            style={{
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <button className="btn btn-lg">
                                <a href="https://www.ncss.gov.sg/volunteer">
                                    <p className="btn-cta-text">Right here!</p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <img className="org-logo" src={ncssImg}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pop-up-flex-row">
                    <div
                        className="container container-purple pop-up d-flex flex-column"
                        style={{ justifyContent: "space-around" }}
                    >
                        <p>Sinc SG</p>
                        <div
                            className="d-flex flex-row"
                            style={{
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <button className="btn btn-lg">
                                <a href="https://sincsg.com">
                                    <p className="btn-cta-text">Right here!</p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <img className="org-logo" src={sincImg}></img>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container container-orange pop-up d-flex flex-column"
                        style={{ justifyContent: "space-around" }}
                    >
                        <p>Society for the Prevention of Cruely to Animals</p>
                        <div
                            className="d-flex flex-row"
                            style={{
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <button className="btn btn-lg">
                                <a href="https://spca.org.sg">
                                    <p className="btn-cta-text">Right here!</p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <img className="org-logo" src={spcaImg}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>Made with ❤️ by members of the 2023 SST Inc. : Kam Yau Shing,
                Yeoh Tian Huai, Alistair Tan Yi, Lim Kai Jun, Dhanvin Mohan Ram</footer>
        </div>
    );
}

export default Organisations;
