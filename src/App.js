import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Carousel,Button} from "react-bootstrap"
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { AiFillEye,AiFillWechat } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import './App.css'


function App() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="#home"><img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/logo.jpg" className="image"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='link-text'>Home</Nav.Link>
            <Nav.Link eventKey={2} href="#service-section" className='link-text'>
              services
            </Nav.Link>
            <Nav.Link href="#blog-section" className='link-text'>Blog</Nav.Link>
            <Nav.Link href="#team-section" className='link-text'>Our Team</Nav.Link>
            <Nav.Link href="#footer-section" className='link-text'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/slider/slider-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Its time for better help</h3>
          <p>We can help you conquer to wide range of psychological and emotional problems</p>
          <Button variant="primary">Schedule a Visit</Button>{""}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/slider/slider-3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Meet Our Pshyciatrists</h3>
          <p>Our Pshyciatrists are highly skilled to meet your needs</p>
          <Button variant="primary">Meet Pshyciatrists</Button>{""}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/slider/slider-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Feeling Stress or anxious?</h3>
          <p>We can help you conquer to wide range of psychological and emotional problems</p>
          <Button variant="primary">View all therapies</Button>{""}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div id="service-section" >
      <div className="aboutus-card">
        <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/services/gallery_01.jpg" className="about-image"/>
        <h1 className="about-heading">Premium Care</h1>
        <p className="about-desc">Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
        <div className="text-arrow">
          <p className="about-text">ReadMore</p>
          <AiOutlineArrowRight className="arrow" />
        </div>
      </div>
      <div className="aboutus-card">
        <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/services/gallery_02.jpg" className="about-image"/>
        <h1 className="about-heading">Powerful Medicine</h1>
        <p className="about-desc">Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
        <div className="text-arrow">
          <p className="about-text">ReadMore</p>
          <AiOutlineArrowRight className="arrow" />
        </div>
      </div>
      <div className="aboutus-card">
        <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/services/gallery_03.jpg" className="about-image"/>
        <h1 className="about-heading">Quality Equipments</h1>
        <p className="about-desc">Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
        <div className="text-arrow">
          <p className="about-text">ReadMore</p>
          <AiOutlineArrowRight className="arrow" />
        </div>
      </div>
      <div className="aboutus-card">
        <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/services/gallery_04.jpg" className="about-image"/>
        <h1 className="about-heading">Experiance Doctors</h1>
        <p className="about-desc">Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
        <div className="text-arrow">
          <p className="about-text">ReadMore</p>
          <AiOutlineArrowRight className="arrow" />
        </div>
      </div>
    </div>
   <div id="blog-section"> 
  
   <h1>Latest Blog</h1>
   <p className='blog-desc'>We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities. But you can read the following facts in order to make sure of all pluses of our clinic:</p>
   <div className='both-cards'>
   <div className='blog-card'>
    <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/blog/blog_01.jpg" className="blog-image"/>
    <div className='blog-card-details'>
    <h2 className='blog-card-heading'>Why Primary treatment is important ?</h2>
    <div className='group'>
    <div className='admin-container'>
      <RiAdminFill className='admin-logo'/>
      <p className='admin-text'>Admin</p>
    </div>
    <div className='admin-container'>
      <AiFillEye className='admin-logo'/>
      <p className='admin-text'>(12)</p>
    </div>
    <div className='admin-container'>
      <AiFillWechat className='admin-logo'/>
      <p className='admin-text'>(12)</p>
    </div>
    </div>
    <p>Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the</p>
    <div className='blog-text-arrow'>
          <p className="blog-text">ReadMore</p>
          <AiOutlineArrowRight className="blog-text blog-arrow" />
        </div>
    </div>
   </div>
   <div className='blog-card'>
    <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/blog/blog_02.jpg" className="blog-image"/>
    <div className='blog-card-details'>
    <h2 className='blog-card-heading'>Why Primary treatment is important ?</h2>
    <div className='group'>
    <div className='admin-container'>
      <RiAdminFill className='admin-logo'/>
      <p className='admin-text'>Admin</p>
    </div>
    <div className='admin-container'>
      <AiFillEye className='admin-logo'/>
      <p className='admin-text'>(12)</p>
    </div>
    <div className='admin-container'>
      <AiFillWechat className='admin-logo'/>
      <p className='admin-text'>(12)</p>
    </div>
    </div>
    <p>Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the</p>
    <div className='blog-text-arrow'>
          <p className="blog-text">ReadMore</p>
          <AiOutlineArrowRight className="blog-text blog-arrow" />
        </div>
    </div>
   </div>
   </div>
   </div>
   <div id="team-section">
    <div>
      <h1>Our Team</h1>
      <p>Take a look at our Team</p>
    </div>
    <div className='team-group'>
      <div className='team-card'>
        <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/team/team-memb1.jpg" />
        <div className='name-designation'>
        <h2 className='text'>David Kanuel</h2>
        <p className='text'>Facial Surgan</p>
        </div>
      </div>
      <div className='team-card'>
        <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/team/team-memb3.jpg" />
        <div className='name-designation'>
        <h2 className='text'>Alexandra</h2>
        <p className='text'>Pshyciatrists</p>
        </div>
      </div>
      <div className='team-card'>
        <img src="https://www.smarteyeapps.com/demo/pediatrician-hospital-website-template/assets/images/team/team-memb4.jpg" />
        <div className='name-designation'>
        <h2 className='text'>Matt Simon</h2>
        <p className='text'>Heart Surgan</p>
        </div>
      </div>
    </div>
   </div>
   <div id="footer-section">
    <div className='address'>
    <h1 className='footer-heading'>Baby Care Hospitals</h1>
    <p className='footer-text'>11/1231, Near Gachibowli <br />
    Hyderabad,Telangana <br />
    Number:+91 9994556788</p>
    </div>
    <div>
      <h2 className='footer-heading'>Follows on Social Media</h2>
      <div className='icon-group'>
      <BsFacebook className='icon'/>
      <FaTwitter className='icon'/>
      <AiFillInstagram className='icon'/>
      </div>
    </div>
   </div>
    </div>
  );
}

export default App;