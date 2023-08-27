import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

function Profile() {
    const firebaseConfig = {
        apiKey: "AIzaSyC3wDTEFEoo1A0vwrJSPFh6h2erpic8RZ8",
        authDomain: "arklink-connections.firebaseapp.com",
        projectId: "arklink-connections",
        storageBucket: "arklink-connections.appspot.com",
        messagingSenderId: "892713028702",
        appId: "1:892713028702:web:7cc993d8ee7b7275ff38cf",
        measurementId: "G-63H4JPJSR0"
        };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    function userLogin(){
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(result=>{
            const user = result.user;
            document.getElementById("user-id").replaceWith(user.displayName);
        });
    }

    onAuthStateChanged(auth, user =>{
        console.log('You are logged in as', user);
    });

    return (
        <>
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id='navbar-container'>
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
                            <a className="nav-link active" href="#/profile">
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
        
        <i className="fas fa-user-alt" id="user-profile"></i>
        <br/>
        <p id="user-id">Alistair Tan <i className="fas fa-pen" id="edit-name"></i></p>
        <br/>
        <button onClick={userLogin()} className="white-text-orange-banner" style={{width:"30%"}}> 
        Sign In <span className="fab fa-google"></span>
        </button>
        <footer>Copyright © Arklink Solutions 2023</footer>
        </>
    );
}

export default Profile;
