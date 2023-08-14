import React from "react";
import './assets/ex_libs/bootstrap_4/bootstrap.css'
import './assets/css/style.css';

function Organisations(){
return (
<div>
    <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
    <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a className="navbar-brand" href="index.html">
            <img src="./assets/media/back_arrow.png" alt="BackArrow" className="logo"/>
            </a>
            <a className="navbar-brand navbar-nav-text-heading" href="index.html">
            Back to home
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/quiz">Quiz</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/results">Results</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/profile">Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div className="header">
        <p>
            Check out other organisations!
        </p>
    </div>
    <a href='https://rayofhope.sg/view-all/' target="_blank">
        <img id="roh-banner" src="./assets/media/rayofhopebanner.png" alt="Ray of Hope banner" />
        <p className="white-text-orange-banner">
            Urgently needs help!<br/>Many roles up for grabs!
        </p>
    </a>
    <a href='https://sincsg.com' target="_blank">
        <img id="sinc-banner" src="./assets/media/sincbanner.png" alt="Sinc banner" />
        <p className="white-text-orange-banner">
            Love making and teaching coding?<br/>This one's for you!
        </p>
    </a>


</div>
)
}

    export default Organisations;