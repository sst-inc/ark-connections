import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
} from "firebase/auth";
import { user } from "./Profile.jsx"

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

    console.log(user)

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
                        "The smallest act of <strong>kindness</strong> is worth
                        more than <strong>the grandest intention.</strong>"
                    </quoteText>
                    <p>~Oscar Wilde</p>
                </div>
                <div style={{ width: "40%" }}></div>
            </div>
            <h1>What can you do here?</h1>
            <div className="pop-up-flex">
                <div className="pop-up-flex-col">
                    <div
                        className="container container-orange pop-up d-flex flex-column"
                        style={{ justifyContent: "space-around" }}
                    >
                        <p>Explore some orgs that might need help ASAP</p>
                        <div
                            className="d-flex flex-row"
                            style={{
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <button className="btn btn-lg">
                                <a href="#/orgs">
                                    <p className="btn-cta-text">Right here!</p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <i class="fa-solid fa-computer pop-up-icon"></i>
                            </div>
                        </div>
                    </div>
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
                            <button className="btn btn-lg">
                                <a
                                    href="https://rayofhope.sg/view-all/"
                                    target="_blank"
                                >
                                    <p className="btn-cta-text">
                                        NEEDS HELP <strong>ASAP</strong>
                                    </p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <i class="fa-regular fa-handshake pop-up-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pop-up-flex-col">
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
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <i class="fa-solid fa-clipboard-user pop-up-icon"></i>
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
                            <button className="btn btn-lg">
                                <a href="https://sincsg.com" target="_blank">
                                    <p className="btn-cta-text">
                                        NEEDS HELP <strong>ASAP</strong>
                                    </p>
                                </a>
                            </button>
                            <div style={{ width: "75%", textAlign: "center" }}>
                                <i class="fa-regular fa-handshake pop-up-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>Made with ❤️ by members of the 2023 SST Inc. : Kam Yau Shing, Yeoh Tian Huai, Alistair Tan Yi, Lim Kai Jun, Dhanvin Mohan Ram</footer>
        </div>
    );
}
export default Homepage;
