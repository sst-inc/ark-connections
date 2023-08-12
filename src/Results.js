import React from "react";
import './assets/ex_libs/bootstrap_4/bootstrap.css';
import './assets/css/style.css';

function Results(){
return (
    <div>
        <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
      <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
      <noscript>You need to enable JavaScript to run this app.</noscript>
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
                      <a className="nav-link" href="#/">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#/quiz">Quiz</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link active" href="#/results">Results</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#/profile">Profile</a>
                  </li>
              </ul>
          </div>
      </nav>
      
    <div style={{background: "#AFD3E2"}}>
    <p  className="dark-orange-titles">
            QUIZ RESULTS
    </p>  
    </div> 
    <br/>

    <p className="header" style={{background:"#AFD3E2", fontSize:"3vw"}}> You are most suited for the following organisations!</p>
    <a href="#/orgs" id="find-out-more">Find Out More!!!</a>

</div>
    );
}

export default Results;