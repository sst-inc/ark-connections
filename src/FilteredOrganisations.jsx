import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";

function FilteredOrganisations() {

    const employees = [
        {id: 1, name: 'Alice', country: 'Austria'},
        {id: 2, name: 'Bob', country: 'Belgium'},
        {id: 3, name: 'Carl', country: 'Canada'},
    ];

    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div>
                <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                    <a className="navbar-brand" href="#/">
                        <i class="fa-solid fa-arrow-left"></i> Back to home
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
                                <a className="nav-link" href="#/profile">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="d-flex flex-row fade-in-fade-out">
                <div className="startText">
                    <quoteText>
                        "Happiness is when what you <strong>think</strong>, what you <strong>say</strong>, and what you <strong>do</strong> are in harmony."
                    </quoteText>
                    <p>~Mahatma Gandhi</p>
                </div>
                <div style={{width: "40%"}}></div>
            </div>
            <h1 className="fade-in-fade-out">Check out these Organisations!</h1>
            {employees.map((employee, index) => {
            return (
            <div key={index} className="fade-in-fade-out">
                <h2>name: {employee.name}</h2>
                <h2>country: {employee.country}</h2>
                <hr />
            </div>
            );
        })}
            <div className="pop-up-flex fade-in-fade-out">
                <div className="container container-orange pop-up d-flex flex-column" style={{justifyContent:"space-around"}}>
                    <p>Ray of Hope</p>
                    <div className="d-flex flex-row" style={{justifyContent: "space-between", width: "100%"}}>
                        <button className="btn btn-lg">
                            <a href="https://rayofhope.sg/view-all/">
                                <p className="btn-cta-text">Right here!</p>
                            </a>
                        </button>
                        <div style={{width: '75%', textAlign: 'center'}}>
                            <i class="fa-solid fa-computer pop-up-icon"></i>
                        </div>
                    </div>
                </div>
                <div className="container container-purple pop-up d-flex flex-column" style={{justifyContent:"space-around"}}>
                    <p className="h2">Urgently needs help!<br />Many roles up for grabs!</p>
                </div>
            </div>
            <footer>Copyright © Arklink Solutions 2023</footer>
        </div>
    );
}

export default FilteredOrganisations;
