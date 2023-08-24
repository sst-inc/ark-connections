import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
function Quiz() {
    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                <a className="navbar-brand" href="#/">
                    <img src="assets/media/favicon.png" alt="Logo" className="logo" />
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
                            <a className="nav-link" href="#/profile">
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Quiz;
