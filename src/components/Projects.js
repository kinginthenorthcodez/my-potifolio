import { Col, Container, Row, Tab } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import proImg1 from '../assets/img/project-img1.png';
import proImg2 from '../assets/img/project-img2.png';
import proImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Bussiness & Development',
      imgUrl: proImg1,
    },
    {
      title: 'Business Startup',
      description: 'Bussiness & Development',
      imgUrl: proImg2,
    },
    {
      title: 'Business Startup',
      description: 'Bussiness & Development',
      imgUrl: proImg3,
    },
    {
      title: 'Business Startup',
      description: 'Bussiness & Development',
      imgUrl: proImg1,
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hesitate to contact me.
            </p>
            <Tab.Container id='projects-tab' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Latest Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Upcoming Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Research Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'> Upcoming Projects</Tab.Pane>
                <Tab.Pane eventKey='third'> Research Projects</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='backround image'
      />
    </section>
  );
};

export default Projects;
