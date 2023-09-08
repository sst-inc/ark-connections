import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
} from "firebase/auth";
export let user = "";

function Profile() {
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

    let userLogin = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
            user = result.user;
            console.log(typeof user);
            loadSaves();
        });
    };

    let loadSaves = () => {
        console.log(user);
        if (user !== null) {
            document.getElementById("user-id").innerHTML = user.displayName;
            document.getElementById("profilePic").src = user.photoURL;
            document.getElementById("profilePic").style.display = "block";
            document.getElementById("pfp").style.display = "none";
            document.getElementById("signBtn").style.display = "none";
        } else {
            return undefined;
        }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("You are logged in as", user);
            loadSaves();
        } else {
            document.getElementById("user-id").innerHTML = "Please Sign in";
        }
    });

    return (
        <>
            <div>
                <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
                <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
                <div id="navbar-container">
                    <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                        <a className="navbar-brand" href="#/">
                            <i class="fas fa-angle-left"></i>
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
                                    <a className="nav-link" href="#/results">
                                        Results
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="#/profile"
                                    >
                                        Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
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
            <h1>Your account: </h1>
            <div className="pop-up-flex">
                <div className="pop-up-flex-col">
                    <div
                        className="container container-orange pop-up d-flex flex-column container-results"
                        style={{ alignItems: "center", height: "150px", justifyContent: "center"}}
                    >
                        <i className="fas fa-user-alt" id="pfp"></i>
                        <img
                            className="pop-up-flex"
                            width="100"
                            height="100"
                            style={{
                                display: "none",
                                justifyContent: "space-around",
                            }}
                            id="profilePic"
                        ></img>
                    </div>
                </div>
                <div className="pop-up-flex-col">
                    <div
                        className="container container-purple pop-up d-flex flex-column container-results"
                        style={{ alignItems: "center", height: "150px", justifyContent: "center"}}
                    >
                        <p id="user-id" className="pop-up-flex" style={{textAlign: "center"}}>
                            Unknown User<i className="fas fa-pen" id="edit-name"></i>
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <button
                onClick={() => userLogin()}
                id="signBtn"
                className="pop-up-flex btn-orange"
                style={{ width: "30%", fontSize: "7vw", marginLeft: "33vw" }}
            >
                Sign In <span className="fab fa-google"></span>
            </button>
            <footer>
                Made with ❤️ by members of the 2023 SST Inc. : Kam Yau Shing,
                Yeoh Tian Huai, Alistair Tan Yi, Lim Kai Jun, Dhanvin Mohan Ram
            </footer>
        </>
    );
}

export default Profile;
