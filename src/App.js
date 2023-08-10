import React from 'react';
import './assets/ex_libs/bootstrap_4/bootstrap.css'
import './assets/css/style.css';


function App() {
  return (
      <div>
    <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
    <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a className="navbar-brand" href="index.html">
            <img src="./favicon.png" alt="Logo" className="logo"/>
        </a>
        <a className="navbar-brand navbar-nav-text-heading" href="index.html">
            Ark Connections
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="page-privacy.html">ss</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    <br></br><br></br><br></br><br></br>
    <div id="start-text">
        <p>
            Welcome to Ark Connections. Feel free to explore possible organisations you can volunteer with or can find help from!
        </p>
    </div>
    <div id="banner">
        <p>
            Explore some orgs that might need help ASAP
        </p>
        <br />
        
    </div>
    <div id="quiz-flex">
        <div id="not-sure">
            <p>
                Not sure which organisation to help?
            </p>
        </div>
        <div id="quiz-button">
            <a href="#" id="quiz-anchor">
                <p style={{margin: 0}}>
                    Take this quiz!
                </p>
            </a>
        </div>
    </div>
    <div id="roh-banner" >
            <a href='https://rayofhope.sg/view-all/'><img src="assets/media/rayofhopebanner.png" alt="Ray of Hope banner"></img></a>
        </div>
  </div>
  );
}

export default App;