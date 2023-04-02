import './Header.css';
import air from './air.jpg';
import cargoship from './cargo-ship.jpg';
import cargotrain from './cargo-train-6.jpg';
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <header className="Project">
      <div className='Container' id='Container'>
      <nav className='Navbar'>
            <ul>
                <a href="#Container"><li>home</li></a>
                <a href="#service"><li>Services</li></a>
                <a href="#about"><li>About</li></a>
                <Link to="/Order"><button>Order</button></Link>
            </ul>
        </nav>
        <center className = "Center">
            <h1>Cargo
              <div className='Color'>FLASH</div>
            </h1>
        </center>
        </div>
    <div id="service">
      <div className="told reveal" >
        <h1 className="head">Servies</h1>
        <div className="Service-list">
          <div className="work">
          <img  src={air}alt="fireSpot"/>
              <div className="label">
                <h1>Airway</h1>
                <p>AirWay Cargo it can export your product very faster in affordable cost contact Us</p>
                <Link to="/airway"><i class="fas fa-external-link-alt"></i></Link>
              </div>
          </div>
          <div className="work">
          <img  src={cargoship}  alt="fireSpot"/>
              <div className="label">
                <h1>Ship</h1>
                <p>Ship cargo it can carry you product to any another country with efficient contact Use</p>
                <Link to="/ship"><i class="fas fa-external-link-alt"></i></Link>
              </div>
          </div>
          <div className="work">
          <img  src={cargotrain} alt="fireSpot"/>
            <div className="label">
              <h1>Railway</h1>
              <p>Railway can help to import or export to another state in low cast contact Us</p>
              <Link to="/railway"><i class="fas fa-external-link-alt"></i></Link>
            </div>
          </div>
        </div>
        <div className="see">
          <Link to='/Order'><a>see more</a></Link>
        </div>
      </div>
    </div>
    <div id="about">
      <div className="aboutus reveal">
        <h1 className='head'>About Us</h1>
        <div className="cont">
          <div className="contact-me">
              <div className="numbers">
                <p><i class="fas fa-phone-square-alt"></i>91+ 9944669700</p>
                <p><i class="fas fa-paper-plane"></i>ijaasahamad2003@gmail.com</p>
              </div>
              <div className="social-medias">
                <h1>Social media links</h1>
                <div className="media">
                  <a href="https://github.com/ijaas2003"><i class="fab fa-github"></i></a>
                  <a href=""><i class="fab fa-instagram"></i></a>
                  <a href="http://www.linkedin.com/in/ijaas-ahamad-m-43b899219"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <a href="#" className="Download" download="Resume.pdf">Download</a>
              </div>
          </div>
          <div className="mail">
            <h1>This is a Feedback</h1>
            <form action="https://formspree.io/f/xknebybb" method="post">
              <div className="inp">
                  <input type="text" placeholder="Enter your Name" name="Name"/>
              </div>
              <div className="inp">
                  <input type="text" placeholder="Enter your Number" name="Number"/>
              </div>
              <div className="inp">
                  <textarea name="Message" id="" cols="50" rows="7" placeholder="Enter your querys"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <h1>Copyright @ Ijaas<i class="fas fa-heart"></i></h1>
      </div>
      </div>
    </header>
  )
}
export default Header