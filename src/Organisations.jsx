import React from "react";
import { useState } from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import { overAllOrganisations } from "./FilteredOrganisations.jsx";

function Organisations() {
    const [modalShown, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDesc, setModalDesc] = useState("");
    const [modalLink, setModalLink] = useState("");

    let toggleModal = (title = "", desc = "", link = "") => {
        if (modalShown) {
            setModal(false);
        } else {
            setModalTitle(title);
            setModalDesc(desc);
            setModalLink(link);
            setModal(true);
        }
    };

    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div className="main-content">
            <div className="navbar-container">
                <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                    <a className="navbar-brand" href="#/">
                        <i className="fa-solid fa-arrow-left"></i> Back to home
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
                                <a className="nav-link active" href="#/orgs">
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
                        "The gift of <strong>service</strong> leads to a life of <strong>love.</strong>"
                    </h1>
                    <p>~Mary White</p>
                </div>
                <div style={{ width: "40%" }}></div>
            </div>
            <h1>Check out our affiliated Organisations!</h1>
            <div className="pop-up-flex">
            <div className="pop-up-flex-row" style={{ flexWrap: "wrap" }}>
                    {Object.entries(overAllOrganisations).map((organisation, index) => {
                        return (
                            <div
                                className="container container-purple pop-up d-flex flex-column"
                                style={{
                                    justifyContent: "space-evenly",
                                    marginBottom: "4vw",
                                }}
                                key={index}
                            >
                                <p>
                                    {index + 1}. {organisation[1].name}
                                </p>
                                <div
                                    className="d-flex flex-row"
                                    style={{
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                >
                                    <button
                                        className="btn btn-lg"
                                        onClick={() =>
                                            toggleModal(organisation[1].name, organisation[1].desc, organisation[1].url)
                                        }
                                    >
                                        <p className="btn-cta-text">
                                            View More
                                        </p>
                                    </button>
                                    <img
                                        className="org-logo"
                                        src={
                                            organisation[1]
                                                .image
                                        }
                                    ></img>
                                </div>
                            </div>
                        );
                    })}
                    {modalShown && (
                        <div className="Modal">
                            <div
                                onClick={() => toggleModal()}
                                className="overlay"
                            ></div>
                            <div className="modalcontent modalcontent-orange">
                                <p className="h2">{modalTitle}</p>
                                <button
                                    className="CloseModal btn btn-danger"
                                    onClick={() => toggleModal()}
                                >
                                    X
                                </button>
                                <p>{modalDesc}</p>
                                <br />
                                <div
                                    className="d-flex flex-row"
                                    style={{
                                        justifyContent: "space-around",
                                    }}
                                >
                                    <button className="btn btn-lg">
                                        <a href="#/quiz">
                                            <p className="btn-cta-text">
                                                Take the quiz
                                            </p>
                                        </a>
                                    </button>
                                    <button className="btn btn-lg">
                                        <a href={modalLink} target="_blank">
                                            <p className="btn-cta-text">
                                                Find out more!
                                            </p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </div>
            <footer>Made with ❤️ by members of the 2023 SST Inc. : Kam Yau Shing,
                Yeoh Tian Huai, Alistair Tan Yi, Lim Kai Jun, Dhanvin Mohan Ram</footer>
        </div>
    );
}

export default Organisations;
