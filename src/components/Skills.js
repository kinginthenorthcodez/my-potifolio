import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import dev1 from '../assets/img/skills/dev1.svg';
import dev2 from '../assets/img/skills/dev2.svg';
import dev3 from '../assets/img/skills/dev4.svg';
import dev5 from '../assets/img/skills/dev5.svg';
import colorSharp from '../assets/img/color-sharp.png';
import Language from './Language';
import Framework from './Framework';
import Tool from './Tool';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const Skills = () => {
  const gaEventTracker = useAnalyticsEventTracker('Skills view');
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      className='skill'
      id='skills'
      onClick={() => gaEventTracker('skills')}
    >
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                Full-stack software engineer with a love for clean code,
                responsive web design, and test-driven development. Fluent in
                multiple languages, frameworks, and technologies. Able to work
                effectively on independent projects and collaborate as part of a
                productive team
              </p>
              <Tab.Container id='skills-tab' defaultActiveKey='first'>
                <Nav
                  variant='pills'
                  className='nav-pills mb-5 justify-content-center align-items-center'
                  id='pills-tab'
                >
                  <Nav.Item>
                    <Nav.Link eventKey='first'>Languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>Tools</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <Row>
                      <Language />
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <Row>
                      <Framework />
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                    <Row>
                      <Tool />
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={dev2} alt='Skill' />
                  <h5>Web development</h5>
                </div>
                <div className='item'>
                  <img src={dev3} alt='Skill' />
                  <h5>Web Design</h5>
                </div>
                <div className='item'>
                  <img src={dev1} alt='Skill' />
                  <h5>Mobile development</h5>
                </div>
                <div className='item'>
                  <img src={dev5} alt='Skill' />
                  <h5>Logo Design</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-left'
        src={colorSharp}
        alt='background gradient'
      />
    </section>
  );
};

export default Skills;
