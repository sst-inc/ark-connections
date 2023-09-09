import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import { finalData, quizzed } from "./Quiz.jsx";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
export let user = "";

function Results() {
    console.log(quizzed)
    const firebaseConfig = {
        apiKey: "AIzaSyC3wDTEFEoo1A0vwrJSPFh6h2erpic8RZ8",
        authDomain: "arklink-connections.firebaseapp.com",
        projectId: "arklink-connections",
        storageBucket: "arklink-connections.appspot.com",
        messagingSenderId: "892713028702",
        appId: "1:892713028702:web:7cc993d8ee7b7275ff38cf",
        measurementId: "G-63H4JPJSR0",
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    var user = auth.currentUser;

    const db = getDatabase();
    /*
    if (user !== null) {
        const quizRef = ref(db, "users/" + user.uid + "/quiz");
        const dataRef = ref(db, "users/" + user.uid + "/finalData");
        onValue(quizRef, (snapshot) => {
            quizzed = snapshot.val();
        });
        if (quizzed === true) {
            onValue(dataRef, (snapshot) => {
                finalData = snapshot.val();
            });
        }
    }
    */

    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="navbar-container">
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
            {quizzed ? (
                <div>
                    <div className="d-flex flex-row">
                        <div className="startText">
                            <h1 className="quoteText">
                                "Knowing yourself is the{" "}
                                <strong>beginning</strong> of all{" "}
                                <strong>wisdom.</strong>"
                            </h1>
                            <p>~Aristotle</p>
                        </div>
                        <div style={{ width: "40%" }}></div>
                    </div>
                    <h1>What we know about you: </h1>
                    <div className="pop-up-flex">
                        <div className="pop-up-flex-row">
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
                                <p>
                                    2. You prefer helping the {finalData[1]}
                                </p>
                            </div>
                        </div>
                        <div className="pop-up-flex-row">
                            <div
                                className="container container-purple pop-up d-flex flex-column container-results"
                                style={{ justifyContent: "space-around" }}
                            >
                                <p>
                                    3. You prefer {finalData[2]} and to {finalData[3]}
                                </p>
                            </div>
                            <div
                                className="container container-orange pop-up d-flex flex-column container-results"
                                style={{ justifyContent: "space-around" }}
                            >
                                <p>
                                    4. You regard yourself as an {finalData[4]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="pop-up-flex">
                    <div className="pop-up-flex-row">
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
                                        <p className="btn-cta-text">
                                            Click to view!!!
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
                        {user ? (
                            <></>
                        ) : (
                            <div
                                className="container container-orange pop-up d-flex flex-column"
                                style={{ justifyContent: "space-around" }}
                            >
                                <p>To save your progress, </p>
                                <div
                                    className="d-flex flex-row"
                                    style={{
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                >
                                    <button className="btn btn-lg">
                                        <a href="#/profile">
                                            <p className="btn-cta-text">
                                                Sign in
                                            </p>
                                        </a>
                                    </button>
                                    <div
                                        style={{
                                            width: "75%",
                                            textAlign: "center",
                                        }}
                                    >
                                        <i className="fa-solid fa-signature pop-up-icon"></i>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="d-flex flex-row">
                        <div className="startText">
                            <h1 className="quoteText">
                                Please take the <strong>quiz</strong> first.
                            </h1>
                        </div>
                        <div style={{ width: "40%" }}></div>
                    </div>
                    <div className="pop-up-flex">
                    <div className="pop-up-flex-row">
                        <a href="#/quiz">
                            <button
                                className="container btn btn-quiz btn-purple container-results"
                                style={{ justifyContent: "space-around" }}
                            >
                                <p className="btn-cta-text">Go to quiz</p>
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Results;
