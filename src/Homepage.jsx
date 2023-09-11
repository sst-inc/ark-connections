import React from "react";
import { useState } from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import rofImg from "./assets/image/ray-of-hope.png";
import sincImg from "./assets/image/sinc.png";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
} from "firebase/auth";
import { user } from "./Profile.jsx";

function Homepage() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    // Initialize Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyC3wDTEFEoo1A0vwrJSPFh6h2erpic8RZ8",
        authDomain: "arklink-connections.firebaseapp.com",
        projectId: "arklink-connections",
        storageBucket: "arklink-connections.appspot.com",
        messagingSenderId: "892713028702",
        appId: "1:892713028702:web:7cc993d8ee7b7275ff38cf",
        measurementId: "G-63H4JPJSR0",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
        console.log("You are logged in as", user);
    });

    const [ROHModal, setROHModal] = useState(false);
    const [sincModal, setSincModal] = useState(false);

    let toggleModal = (modal) => {
        if (modal === "sincModal") {
            setSincModal(!sincModal);
        }
        if (modal === "ROHModal") {
            setROHModal(!ROHModal);
        }
    };

    if (sincModal) {
        document.body.classList.add("active-sincModal");
    } else {
        document.body.classList.remove("active-sincModal");
    }
    if (ROHModal) {
        document.body.classList.add("active-ROHModal");
    } else {
        document.body.classList.remove("active-ROHModal");
    }

    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div className="main-content">
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
                                    <a className="nav-link" href="#/orgs">
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
                            "The smallest act of <strong>kindness</strong> is
                            worth more than{" "}
                            <strong>the grandest intention.</strong>"
                        </h1>
                        <p>~Oscar Wilde</p>
                    </div>
                    <div style={{ width: "40%" }}></div>
                </div>
                <h1>What can you do here?</h1>
                <div className="pop-up-flex">
                    <div className="pop-up-flex-row">
                        <div
                            className="container container-orange pop-up d-flex flex-column"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p>
                                Explore some organisations that might need help
                                ASAP
                            </p>
                            <div
                                className="d-flex flex-row"
                                style={{
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}
                            >
                                <button className="btn btn-lg">
                                    <a href="#/orgs">
                                        <p className="btn-cta-text">
                                            Right here!
                                        </p>
                                    </a>
                                </button>
                                <div
                                    style={{
                                        width: "75%",
                                        textAlign: "center",
                                    }}
                                >
                                    <i className="fa-solid fa-computer pop-up-icon"></i>
                                </div>
                            </div>
                        </div>
                        <div
                            className="container container-purple pop-up d-flex flex-column"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p className="h2">
                                Not sure which organisation to help?
                            </p>
                            <div
                                className="d-flex flex-row"
                                style={{
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}
                            >
                                <button className="btn btn-lg">
                                    <a href="#/quiz">
                                        <p className="btn-cta-text">
                                            Take this quiz!
                                        </p>
                                    </a>
                                </button>
                                <div
                                    style={{
                                        width: "75%",
                                        textAlign: "center",
                                    }}
                                >
                                    <i className="fa-solid fa-clipboard-user pop-up-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="pop-up-flex-row">
                        <div
                            className="container container-purple pop-up d-flex flex-column"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p className="h2">Ray Of Hope</p>
                            <div
                                className="d-flex flex-row"
                                style={{
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}
                            >
                                <button
                                    onClick={() => toggleModal("ROHModal")}
                                    className="btn btn-lg"
                                >
                                    <p className="btn-cta-text">
                                        NEEDS HELP <strong>ASAP</strong>
                                    </p>
                                    {ROHModal && (
                                        <div className="Modal">
                                            <div
                                                onClick={() =>
                                                    toggleModal("ROHModal")
                                                }
                                                className="overlay"
                                            ></div>
                                            <div className="modalcontent">
                                                <p className="h2">
                                                    Ray of Hope
                                                </p>
                                                <button
                                                    className="CloseModal btn btn-danger"
                                                    onClick={() =>
                                                        toggleModal("ROHModal")
                                                    }
                                                >
                                                    X
                                                </button>
                                                <p>
                                                    They are a crowdfunding
                                                    charity that helps people
                                                    who have fallen through the
                                                    cracks of our society by
                                                    Empowers people to help one
                                                    another - to give hope to
                                                    those who need it most.
                                                </p>
                                                <br />
                                                <div
                                                    className="d-flex flex-row"
                                                    style={{
                                                        justifyContent:
                                                            "space-around",
                                                    }}
                                                >
                                                    <button className="btn btn-lg">
                                                        <a href="#/quiz">
                                                            <p className="btn-cta-text">
                                                                Check your suitability
                                                            </p>
                                                        </a>
                                                    </button>
                                                    <button className="btn btn-lg">
                                                        <a
                                                            href="https://rayofhope.sg/view-all/"
                                                            target="_blank"
                                                        >
                                                            <p className="btn-cta-text">
                                                                Find out more!
                                                            </p>
                                                        </a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </button>
                                <div
                                    style={{
                                        width: "75%",
                                        textAlign: "center",
                                    }}
                                >
                                    <img
                                        className="org-logo"
                                        src={rofImg}
                                        alt="Ray Of Hope"
                                    ></img>
                                </div>
                            </div>
                        </div>
                        <div
                            className="container container-orange pop-up d-flex flex-column"
                            style={{ justifyContent: "space-around" }}
                        >
                            <p className="h2">Sinc Sg</p>
                            <div
                                className="d-flex flex-row"
                                style={{
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}
                            >
                                <button
                                    onClick={() => toggleModal("sincModal")}
                                    className="btn btn-lg"
                                >
                                    <p className="btn-cta-text">
                                        NEEDS HELP <strong>ASAP</strong>
                                    </p>
                                    {sincModal && (
                                        <div className="Modal">
                                            <div
                                                onClick={() =>
                                                    toggleModal("sincModal")
                                                }
                                                className="overlay"
                                            ></div>
                                            <div className="modalcontent">
                                                <p className="h2">Sinc Sg</p>
                                                <button
                                                    className="CloseModal btn btn-danger"
                                                    onClick={() =>
                                                        toggleModal("sincModal")
                                                    }
                                                >
                                                    X
                                                </button>
                                                <p>
                                                    Teaches children the basic
                                                    of web development
                                                </p>
                                                <br />
                                                <div
                                                    className="d-flex flex-row"
                                                    style={{
                                                        justifyContent:
                                                            "space-around",
                                                    }}
                                                >
                                                    <button className="btn btn-lg">
                                                        <a href="#/quiz">
                                                            <p className="btn-cta-text">
                                                                Check your suitability
                                                            </p>
                                                        </a>
                                                    </button>
                                                    <button className="btn btn-lg">
                                                        <a
                                                            href="https://sincsg.com"
                                                            target="_blank"
                                                        >
                                                            <p className="btn-cta-text">
                                                                Find out more!
                                                            </p>
                                                        </a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </button>
                                <div
                                    style={{
                                        width: "75%",
                                        textAlign: "center",
                                    }}
                                >
                                    <img
                                        className="org-logo"
                                        src={sincImg}
                                        alt="Sinc Sg"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                Made with ❤️ by members of the 2023 SST Inc. : Kam Yau Shing,
                Yeoh Tian Huai, Alistair Tan Yi, Lim Kai Jun, Dhanvin Mohan Ram
            </footer>
        </div>
    );
}
export default Homepage;
