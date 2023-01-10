import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
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
                <img src={navIcon2} alt='gihub icon' />
              </a>
              <a
                href='https://twitter.com/kinthenorthcode'
                target='_blank'
                rel='noreferrer'
              >
                <img src={navIcon3} alt='twitter icon' />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
