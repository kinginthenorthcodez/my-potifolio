import { Col, Container, Row, Tab } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import proImg1 from '../assets/img/project-img1.png';
import proImg2 from '../assets/img/Airpollutionapp.png';
import proImg3 from '../assets/img/contactTracker6.png';
import proImg4 from '../assets/img/creativeapp.png';
import proImg5 from '../assets/img/bookstore.png';
import proImg6 from '../assets/img/leaderboard.png';
import proImg7 from '../assets/img/recipeapp.png';
import proImg8 from '../assets/img/potifolio1.png';
import proImg9 from '../assets/img/space-watch.png';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

import colorSharp2 from '../assets/img/color-sharp2.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const gaEventTracker = useAnalyticsEventTracker('Projects-view');
  const projects = [
    {
      id: 1,
      title: 'Business Startup',
      description: 'Bussiness & Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails', 'postgresql'],
      imgUrl: proImg1,
      liveLink: '',
      sourceLink: '',
    },
    {
      id: 2,
      title: 'Air Pollution App',
      description:
        'Air Pollution Metrics app provides current, forecast and historical air pollution data for any coordinates on the globe, users can search by region(continent) or Country to get Metrics update in real time..',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      imgUrl: proImg2,
      liveLink:
        'https://kinginthenorthcodez.github.io/air-pollution-metric-app/',
      sourceLink:
        'https://github.com/kinginthenorthcodez/air-pollution-metric-app',
    },
    {
      id: 3,
      title: 'Contact Tracker',
      description:
        'Why Contact Tracker? When you are on journey of excellence , you meet a lot of people who some become friends.And thats where Contact Tracker comes in.visit live link to learn more',
      tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'ReactJs',
        'Vite',
        'LOCAL FORAGE API',
      ],
      imgUrl: proImg3,
      liveLink: '',
      sourceLink: '',
    },
    {
      id: 4,
      title: 'Creative Space website',
      description:
        'A space for the craatives to empower and build innovative solutions together .',
      tags: ['HTML', 'CSS', 'JavaScript', 'LOCAL STORAGE API'],
      imgUrl: proImg4,
      liveLink: 'https://kinginthenorthcodez.github.io/capstone-project-1/',
      sourceLink: 'https://github.com/kinginthenorthcodez/capstone-project-1',
    },

    {
      id: 5,
      title: 'Pennode App',
      description:
        'A Blog app that will show the list of posts and empower readers to interact with them by adding comments and liking posts. Share your experiences and stories with the cosmos of the pennoders.',
      tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'Ruby on Rails',
        'Devise for authentication',
      ],
      imgUrl: proImg8,
      liveLink: 'https://github.com/kinginthenorthcodez/pennode',
      sourceLink: 'https://github.com/kinginthenorthcodez/pennode',
    },
    {
      id: 6,
      title: 'Recipe App',
      description:
        'The Recipe app keeps track of all your recipes and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails', 'postgresql'],
      imgUrl: proImg7,
      liveLink: 'https://recipe-app-on-rials.herokuapp.com/',
      sourceLink: 'https://github.com/kinginthenorthcodez/Recipe-app',
    },
    {
      id: 7,
      title: 'LeaderBoard App',
      description:
        'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Use ES6 modules', 'API'],
      imgUrl: proImg6,
      liveLink: 'https://leaderboard-rush.netlify.app/',
      sourceLink: 'https://github.com/kinginthenorthcodez/Leaderboard-app-',
    },
    {
      id: 7,
      title: 'BookStore App',
      description:
        'The Bookstore is a React-Redux application connected to an existing API to create and remove books in a remote server. Users can Display the list of books, Add and Remove a selected book..',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      imgUrl: proImg5,
      liveLink: '',
      sourceLink: 'https://github.com/kinginthenorthcodez/bookstore',
    },
    {
      id: 8,
      title: 'Space-Watch APP',
      description:
        'A min React app monitoring the sky using NASA data via API.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'API'],
      imgUrl: proImg9,
      liveLink: 'https://space-watch.netlify.app/',
      sourceLink: 'https://github.com/kinginthenorthcodez/space-watch',
    },
  ];
  return (
    <section
      className='project'
      id='project'
      onClick={() => gaEventTracker('projects')}
    >
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
        alt='backround'
      />
    </section>
  );
};

export default Projects;
