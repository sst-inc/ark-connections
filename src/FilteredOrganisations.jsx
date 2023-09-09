import React from "react";
import { useState } from "react";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import { finalData } from "./Quiz.jsx";
import rofImg from "./assets/image/ray-of-hope.png";
import sincImg from "./assets/image/sinc.png";
import spcaImg from "./assets/image/SPCA-Logo.png";
import ncssImg from "./assets/image/ncss.png";

function FilteredOrganisations() {
    const [modalShown, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDesc, setModalDesc] = useState("");
    const [modalLink, setModalLink] = useState("");
    const overAllOrganisations = {
        RayOfHope: {
            name: "Ray Of Hope",
            desc: "They are a crowdfunding charity that helps people who have fallen through the cracks of our society by Empowers people to help one another - to give hope to those who need it most.",
            url: "http://rayofhope.com",
            image: rofImg,
            filter: ["humans", "the elderly", "caretaking", "introvert"],
        },
        SincSG: {
            name: "Sinc",
            desc: "Teaches children the basic of web development",
            url: "http://sincsg.com",
            image: sincImg,
            filter: ["humans", "children", "teach", "extrovert"],
        },
        SPCA: {
            name: "Society for the Prevention of Cruelty to Animals",
            desc: "",
            url: "https://spca.org.sg",
            image: spcaImg,
            filter: ["animals", "help the environment", "caretaking"],
        },
        NCSS: {
            name: "National Council of Social Services",
            desc: "",
            url: "https://www.ncss.gov.sg/volunteer",
            image: ncssImg,
            filter: ["humans", "animals", "extrovert"],
        },
    };

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

    let goodness = {};
    let sortedOrg = {};

    let filter = () => {
        for (let key in overAllOrganisations) {
            for (let filterKind in finalData) {
                if (
                    overAllOrganisations[key].filter.includes(
                        finalData[filterKind]
                    )
                ) {
                    if (key in goodness) {
                        goodness[key] += 1;
                    } else {
                        goodness[key] = 1;
                    }
                }
            }
        }
        sortedOrg = Object.keys(goodness).sort(function (a, b) {
            return goodness[b] - goodness[a];
        });
    };

    filter();
    return (
        <div>
            <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
            <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="navbar-container">
                <nav className="navbar navbar-expand-sm bg-lightPurple navbar-dark fixed-top">
                    <a
                        className="navbar-brand d-flex flex-row"
                        href="#/"
                        style={{ paddingLeft: "4px", paddingRight: "4px", alignItems: "center", height: "fit-content" }}
                    >
                        <p>
                        <i className="fa-solid fa-arrow-left"></i>
                    </p>
                    <p
                        className="navbar-nav-text-heading"
                    >
                        Back to home
                    </p>
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
                        "Happiness is when what you <strong>think</strong>, what
                        you <strong>say</strong>, and what you
                        <strong> do</strong> are in harmony."
                    </h1>
                    <p>~Mahatma Gandhi</p>
                </div>
                <div style={{ width: "40%" }}></div>
            </div>
            <h1 className="fade-in-fade-out">
                We think you'll fit best in these organisations (Sorted from
                best to worst):
            </h1>
            <div className="pop-up-flex">
                <div className="pop-up-flex-row" style={{ flexWrap: "wrap" }}>
                    {sortedOrg.map((organisation, index) => {
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
                                    {index + 1}. {overAllOrganisations[organisation].name}<br />{(goodness[organisation]/finalData.length*100).toFixed(2)}% score
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
                                            toggleModal(
                                                overAllOrganisations[
                                                    organisation
                                                ].name,
                                                overAllOrganisations[
                                                    organisation
                                                ].desc,
                                                overAllOrganisations[
                                                    organisation
                                                ].url
                                            )
                                        }
                                    >
                                        <p className="btn-cta-text">
                                            View More
                                        </p>
                                    </button>
                                    <img
                                        className="org-logo"
                                        src={
                                            overAllOrganisations[organisation]
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
            <footer>
                Made with ❤️ by members of the 2023 SST Inc. : Kam Yau Shing,
                Yeoh Tian Huai, Alistair Tan Yi, Lim Kai Jun, Dhanvin Mohan Ram
            </footer>
        </div>
    );
}

export default FilteredOrganisations;
