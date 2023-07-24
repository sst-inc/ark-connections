import React, {
  useState,
  useEffect
} from 'react';
import './assets/css/style.css';
import './assets/ex_libs/bootstrap_4/bootstrap.css'

function App() {
  const [showElements, setShowElements] = useState([]);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              console.log(entry);
              if (entry.isIntersecting) {
                  setShowElements((prevElements) => [...prevElements, entry.target.id]);
              } else {
                  setShowElements((prevElements) =>
                      prevElements.filter((el) => el !== entry.target.id)
                  );
              }
          });
      });

      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));

      // Clean up the observer when the component is unmounted
      return () => {
          observer.disconnect();
      };
  }, []);

  return (
      <div>
    <script src="./assets/ex_libs/jQuery/jquery-3.6.4.slim.min.js"></script>
    <script src="./assets/ex_libs/bootstrap_4/bootstrap.js"></script>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <a className="navbar-brand" href="#home">
              <img src="./favicon.jpeg" alt="Logo" className="logo"/>
          </a>
          <a className="navbar-brand navbar-nav-text-heading" href="#home">
              Arklink Solutions
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="#about">About Us</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#element3goto">Element 3</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#element4goto">Element 4</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#contactus">Contact Us</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#privacy">Privacy Policy</a>
                  </li>
              </ul>
          </div>
      </nav>
      <div id='home'>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
      </div>
    <section id="element1" className={`hidden ${showElements.includes('element1') ? 'show' : ''}`}>
      <h1>
        <img id="boat" src="boat.png" alt="A boat" />
        <br />
        <br />
        Arklink Solutions
      </h1>
    </section>
    <section id="element2" className={`hidden ${showElements.includes('element2') ? 'show' : ''}`}>
      <div id="about">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
      </div>
      <h1>About Us</h1>
      <p>
        Welcome to Arklink Solutions,
        where we aim to be the Digital
        Noah's ark and save humanity by
        linking you with your clients that
        you want to help by choosing your
        preferred social service
      </p>
    </section>
    <div id="element3goto">
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
      </div>
    <section id="element3" className={`hidden ${showElements.includes('element3') ? 'show' : ''}`}>
      <h1>nice to meet u</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores.</p>
    </section>
    <div id="element4goto">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
    </div>
    <section id="element4" className={`hidden ${showElements.includes('element4') ? 'show' : ''}`}>
      <h1>hey its me</h1>
    </section>
    <div id="contactus">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
    </div>
    <section id="element5" className={`hidden ${showElements.includes('element5') ? 'show' : ''}`} >
      <h1>Contact Us</h1>
      <form method="post">
      <input type="text" id="Name" name="Name" placeholder="Name" required/><br/>
      <input type="email" id="Email" name="Email" placeholder="Email" required/><br/>
      <textarea id="Message" name="Message" placeholder="Message" rows='6' maxlength='3000' required></textarea><br/>
      <button type="submit" value="Send Email" onclick="sendEmail()">Submit</button>
      </form>
    </section>
    <div id="privacy">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
    </div>
    <footer id="element6" className={`hidden ${showElements.includes('element6') ? 'show' : ''}`}>
      <p>Copyright &copy; 2023 Arklink Solutions.<br/>(GNU General Public License (v3))<br/>All rights reserved.</p>
      <a href="page-privacy.html"><p>Privacy Policy</p></a>
    </footer>
  </div>
  );
}

export default App;