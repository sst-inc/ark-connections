import React from "react";
import { useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";

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

export let finalData = [0, 0, 0, 0, 0, 0];
export let quizzed = false;

const auth = getAuth(app);
export var user = auth.currentUser;

if (user !== null) {
    var userName = user.displayName;
    var userEmail = user.email;
    var userPfp = user.photoURL;
}

function Quiz() {
    const [currentQuestionIndex, updateQnIndex] = useState(0);

    function writeUserData(
        userID,
        userName,
        userPfp,
        userEmail,
        finalData,
        quizzed
    ) {
        const db = getDatabase();
        const reference = ref(db, "users/" + userID);

        set(reference, {
            username: userName,
            email: userEmail,
            pfp: userPfp,
            surveyData: finalData,
            quiz: quizzed,
        });
    }

    let changeQuestionIndex = (changed, oldIndex, result) => {
        if (currentQuestionIndex + 1 === data.length && changed > 0) {
            finalData[oldIndex] = result;
            if (
                confirm(
                    "Attention: your quiz results will be saved to your gmail account if signed in"
                )
            ) {
                quizzed = true;
                updateQnIndex(0);
                window.location = "#/results";
                if (user !== null) {
                    writeUserData(
                        user.uid,
                        userName,
                        userPfp,
                        userEmail,
                        finalData,
                        true
                    );
                } else {
                    return undefined;
                }
            }
        } else if (currentQuestionIndex === 0 && changed < 0) {
            finalData[oldIndex] = finalData[oldIndex];
            return updateQnIndex(currentQuestionIndex);
        } else {
            finalData[oldIndex] = result;
            return updateQnIndex(currentQuestionIndex + changed);
        }
    };

    const data = [
        {
            question: "Do you prefer to spend time with Animals or Humans?",
            optn1: "Humans",
            optn2: "Animals",
            optn1Result: "humans",
            optn2Result: "animals",
        },
        {
            question: "Which do you prefer?",
            optn1: "Helping the Elderly",
            optn2: "Helping the younger generation",
            optn1Result: "the elderly",
            optn2Result: "children",
        },
        {
            question: "Which do you prefer?",
            optn1: "Caretaking",
            optn2: "Other",
            optn1Result: "caretaking",
            optn2Result: "not to caretake",
        },
        {
            question: "Would you teach or not",
            optn1: "I would teach",
            optn2: "I would prefer not to teach",
            optn1Result: "teach",
            optn2Result: "not to teach",
        },
        {
            question: "Do you regard yourself as an introvert or extrovert?",
            optn1: "Introvert",
            optn2: "Extrovert",
            optn1Result: "introvert",
            optn2Result: "extrovert",
        },
        {
            question: "Would you do environmental work?",
            optn1: "Yes!",
            optn2: "No",
            optn1Result: "help the environment",
            optn2Result: "not help the environment",
        }
    ];
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
                                <a className="nav-link active" href="#/quiz">
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
                        Quiz: Question {currentQuestionIndex + 1} of{" "}
                        {data.length}
                    </h1>
                    <p>{data[currentQuestionIndex].question}</p>
                </div>
                <div style={{ width: "40%" }}></div>
            </div>
            {finalData[currentQuestionIndex] != 0 ? (
                <h1>
                    For this question you answered{" "}
                    {finalData[currentQuestionIndex]}
                </h1>
            ) : (
                <h1>Remember to answer as sincerely as possible!</h1>
            )}
            <div className="pop-up-flex">
            <div className="pop-up-flex-row">
                <button
                    className="container btn btn-quiz btn-orange container-results"
                    style={{ justifyContent: "space-around" }}
                    onClick={() =>
                        changeQuestionIndex(
                            1,
                            currentQuestionIndex,
                            data[currentQuestionIndex].optn1Result
                        )
                    }
                >
                    <p className="btn-cta-text">
                        {data[currentQuestionIndex].optn1}
                    </p>
                </button>
                <button
                    className="container btn btn-quiz btn-purple container-results"
                    style={{ justifyContent: "space-around" }}
                    onClick={() =>
                        changeQuestionIndex(
                            1,
                            currentQuestionIndex,
                            data[currentQuestionIndex].optn2Result
                        )
                    }
                >
                    <p className="btn-cta-text">
                        {data[currentQuestionIndex].optn2}
                    </p>
                </button>
            </div>
            <div className="pop-up-flex-row" style={{justifyContent: "center"}}>
                <button
                    className="container btn btn-quiz btn-purple container-results"
                    style={{ justifyContent: "space-around" }}
                    onClick={() =>
                        changeQuestionIndex(
                            -1,
                            currentQuestionIndex,
                            finalData[currentQuestionIndex]
                        )
                    }
                >
                    <p className="btn-cta-text">Back</p>
                </button>
                {finalData[currentQuestionIndex] != 0 ? (
                <button
                className="container btn btn-quiz btn-orange container-results"
                style={{ justifyContent: "space-around" }}
                onClick={() =>
                    changeQuestionIndex(
                        1,
                        currentQuestionIndex,
                        finalData[currentQuestionIndex]
                    )
                }
            >
                <p className="btn-cta-text">Next</p>
            </button>
            ) : (
                null
            )} </div>
            </div>
            </div>
            <footer>Made with ❤️ by members of the 2023 SST Inc. : Kam Yau Shing,
                Yeoh Tian Huai, Alistair Tan Yi, Lim Kai Jun, Dhanvin Mohan Ram</footer>
        </div>
    );
}
export default Quiz;
