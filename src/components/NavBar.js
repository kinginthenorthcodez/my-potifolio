import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo from '../assets/img/logo2.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/Twitter.svg';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const NavBar = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact me');
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    // return window.removeEventListener('scroll', onScroll); // remove listener on unmount
  }, [scrolled]);

  const onUpdateActiveLink = (e) => {
    console.log(e.target.name);
    setActiveLink(e.target.name);
  };
  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              name='home'
              onClick={(e) => onUpdateActiveLink(e)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              name='skills'
              onClick={(e) => onUpdateActiveLink(e)}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#project'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              name='projects'
              onClick={(e) => onUpdateActiveLink(e)}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/musungwaisaac/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={navIcon1} alt='linkedin icon' />
              </a>
              <a
                href='https://github.com/kinginthenorthcodez'
                target='_blank'
                rel='noreferrer'
              >
                <img src={navIcon2} alt='github icon' />
              </a>
              <a
                href='https://twitter.com/kinthenorthcode'
                target='_blank'
                rel='noreferrer'
              >
                <img src={navIcon3} alt='twitter icon' />
              </a>
            </div>
            <button
              className='vvd'
              onClick={() => (
                (window.location.href = '#contact'), gaEventTracker('call')
              )}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
