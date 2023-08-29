import React from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import { finalData } from './Quiz.jsx'

function FilteredOrganisations() {

    const overAllOrganisations = {
        "RayOfHope": {"name": "Ray Of Hope", "url": "http://rayofhope.com", "filter": ["humans", "elderly", "caretaking"]},
        "SincSG" : {"name": "Sinc", "url": "http://sincsg.com", "filter": ["humans"]},
        "SincMY" : {"name": "SincMy", "url": "http://sincmy.com", "filter": ["humans", "elderly"]}
    }

    let goodness = {}
    let sortedOrg = {}
    
    let filter = (filters) => {
        for (let key in overAllOrganisations) { 
            for (let filterKind in finalData) {
                if (overAllOrganisations[key].filter.includes(finalData[filterKind])) {
                    console.log(key, finalData[filterKind]);
                    if (key in goodness) {
                        goodness[key] += 1
                    } else {
                        goodness[key] = 1
                    }
                    console.log(goodness)
                }
            }
        }
        sortedOrg = Object.keys(goodness).sort(function(a, b) {
            return goodness[b] - goodness[a];
        });
        console.log(sortedOrg)
    } 

    filter()

    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="navbar-container">
                <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                    <a className="navbar-brand" href="#/" style={{paddingLeft: "4px", paddingRight: "4px"}}>
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
            <div className="d-flex flex-row">
                <div className="startText">
                    <quoteText>
                        "Happiness is when what you <strong>think</strong>, what you <strong>say</strong>, and what you <strong>do</strong> are in harmony."
                    </quoteText>
                    <p>~Mahatma Gandhi</p>
                </div>
                <div style={{width: "40%"}}></div>
            </div>
            <h1 className="fade-in-fade-out">We think you'll fit best in these organisations: </h1>
            <div className="pop-up-flex">
            {sortedOrg.map((organisation, index) => {
                console.log(organisation)
                return (
                            <div
                                className="container container-purple pop-up d-flex flex-column"
                                style={{ justifyContent: "space-around", marginBottom: "4vw" }}
                                key={index}
                            >
                                <p>{index + 1}. {overAllOrganisations[organisation].name}</p>
                                <div
                                    className="d-flex flex-row"
                                    style={{
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                >
                                <button className="btn btn-lg">
                                    <a href={overAllOrganisations[organisation].url} target="_blank">
                                        <p className="btn-cta-text">Right here!</p>
                                    </a>
                                </button>
                        </div>
                    </div>
                );
            })}
            </div>
            <footer>Copyright © Arklink Solutions 2023</footer>
        </div>
    );
}

export default FilteredOrganisations;
